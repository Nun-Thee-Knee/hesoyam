from flask import Flask
from flask_socketio import SocketIO, emit
from datetime import datetime as dt, timedelta
import base64
import cv2
import numpy as np
from collections import deque
from Algorithim import detect_accident
from message import send_message_to_hospital

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

frame_buffer = deque(maxlen=60)
accident_detected_flag = False

@app.route('/')
def index():
    return 'WebSocket Server'

@socketio.on('frame')
def handle_frame(frame_data):
    global accident_detected_flag
    
    current_time = dt.now()
    frame_data = frame_data.split(",")[1]
    frame_binary = base64.b64decode(frame_data)
    frame_array = cv2.imdecode(np.frombuffer(frame_binary, np.uint8), -1)
    
    frame_buffer.append((current_time, frame_array))
    
    if len(frame_buffer) >= frame_buffer.maxlen and not accident_detected_flag:
        timestamp_2_seconds_ago = current_time - timedelta(seconds=1)
        frame_2_seconds_ago = None
        
        for timestamp, frame in reversed(frame_buffer):
            if timestamp <= timestamp_2_seconds_ago:
                frame_2_seconds_ago = frame
                break
        
        if frame_2_seconds_ago is not None:
            current_frame_path = 'current_frame.jpg'
            frame_2_seconds_ago_path = 'frame_2_seconds_ago.jpg'
            cv2.imwrite(current_frame_path, frame_array)
            cv2.imwrite(frame_2_seconds_ago_path, frame_2_seconds_ago)
            
            accident_detected, non_zero_count = detect_accident(frame_2_seconds_ago_path, current_frame_path)
            
            if accident_detected:
                accident_detected_flag = True
                print("Accident detected")
                send_message_to_hospital("There's an accident. Send an ambulance")
                socketio.emit('accident_result', {'accident_detected': accident_detected, 'non_zero_count': non_zero_count})
            else:
                import os
                os.remove(current_frame_path)
                os.remove(frame_2_seconds_ago_path)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000)
