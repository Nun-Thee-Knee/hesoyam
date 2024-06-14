'use client';

import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import io from 'socket.io-client';

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const socketRef = useRef<any>(null);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:5000');

    socketRef.current.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socketRef.current.on('disconnect', () => {
      console.log('Disconnected from WebSocket server');
    });

    return () => {
      socketRef.current.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (videoRef.current?.srcObject) {
        (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const sendFrame = () => {
    if (videoRef.current && canvasRef.current && socketRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const dataURL = canvasRef.current.toDataURL('image/jpeg');
        socketRef.current.emit('frame', dataURL);
      }
    }
  };

  const handleClick = async () => {
    try {
      if (!isStreaming) {
        let stream;
        try {
          stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        } catch (err) {
          setError('Error accessing the screen');
          console.error('Error accessing the screen:', err);
          return;
        }

        videoRef.current?.classList.remove('hidden');
        videoRef.current!.srcObject = stream;
        setIsStreaming(true);

        intervalRef.current = setInterval(sendFrame, 100);
      } else {
        // Stop streaming
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        if (videoRef.current?.srcObject) {
          (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
        }
        videoRef.current?.classList.add('hidden');
        setIsStreaming(false);
      }
    } catch (err) {
      setError('Error accessing the screen');
      console.error(err);
    }
  };

  return (
    <div className='bg-black h-[100vh] flex flex-col gap-10 items-center justify-center text-white'>
      <Link href="/api/auth/signout">
      <button  className='bg-red-800 hover:bg-red-600 p-3 rounded-xl'>Logout</button>
      </Link>
      <button
        onClick={handleClick}
        id='add-screen'
        className='bg-purple-500 font-bold uppercase p-3 rounded-xl hover:bg-purple-600'
      >
        {isStreaming ? 'Stop Screen' : 'Add Screen'}
      </button>
      {error && <p className='text-red-500'>{error}</p>}
      <video
        ref={videoRef}
        id='screen'
        className='hidden h-96 w-[700px]'
        autoPlay
      ></video>
      <canvas ref={canvasRef} className='hidden'></canvas>
    </div>
  );
};

export default Video;
