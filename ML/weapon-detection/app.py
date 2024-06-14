import streamlit as st
import cv2
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array

# Path to your pre-trained model
MODEL_PATH = 'weapon_detection_model.h5'
model = load_model(MODEL_PATH)

# Function to preprocess the image
def preprocess_image(image):
    # Resize the image to the size your model expects
    image = cv2.resize(image, (224, 224))
    # Convert the image to array
    image = img_to_array(image)
    # Expand dimensions to match the input shape of the model
    image = np.expand_dims(image, axis=0)
    return image

# Function to perform weapon detection
def detect_weapon(image):
    preprocessed_image = preprocess_image(image)
    prediction = model.predict(preprocessed_image)
    # Assuming the model outputs a probability of weapon presence
    return prediction[0][0]  # Modify based on your model's output structure

# Streamlit interface
st.title("Weapon Detection using Streamlit")
st.write("Upload an image to detect the presence of weapons.")

uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])

if uploaded_file is not None:
    # Convert the uploaded file to an OpenCV image
    file_bytes = np.asarray(bytearray(uploaded_file.read()), dtype=np.uint8)
    image = cv2.imdecode(file_bytes, 1)

    # Display the uploaded image
    st.image(image, channels="BGR")

    # Perform weapon detection
    prediction = detect_weapon(image)
    
    # Display the result
    if prediction > 0.5:  # Adjust the threshold based on your model
        st.write("Weapon detected!")
    else:
        st.write("No weapon detected.")
