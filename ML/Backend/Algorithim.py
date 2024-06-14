import cv2
from mtcnn import MTCNN
import numpy as np
from PIL import Image
import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

def detect_accident(image1_path, image2_path, threshold=5000):
    image1 = np.array(Image.open(image1_path))
    image2 = np.array(Image.open(image2_path))
    image1_resized = cv2.resize(image1, (image2.shape[1], image2.shape[0]))
    gray1 = cv2.cvtColor(image1_resized, cv2.COLOR_BGR2GRAY)
    gray2 = cv2.cvtColor(image2, cv2.COLOR_BGR2GRAY)
    diff = cv2.absdiff(gray1, gray2)
    _, diff_thresh = cv2.threshold(diff, 30, 255, cv2.THRESH_BINARY)
    non_zero_count = np.count_nonzero(diff_thresh)
    return non_zero_count > threshold, non_zero_count

def find_person_in_image(person_image, test_image):
    detector = MTCNN()
    person_image_rgb = cv2.cvtColor(person_image, cv2.COLOR_BGR2RGB)
    test_image_rgb = cv2.cvtColor(test_image, cv2.COLOR_BGR2RGB)
    person_faces = detector.detect_faces(person_image_rgb)
    test_faces = detector.detect_faces(test_image_rgb)
    if not person_faces:
        return False
    if not test_faces:
        return False
    person_face_coordinates = person_faces[0]['box']
    for test_face in test_faces:
        test_face_coordinates = test_face['box']
        if face_matches(person_face_coordinates, test_face_coordinates):
            return True
    return False

def face_matches(face1_coordinates, face2_coordinates, threshold=0.7):
    x1, y1, w1, h1 = face1_coordinates
    x2, y2, w2, h2 = face2_coordinates
    intersection_area = max(0, min(x1+w1, x2+w2) - max(x1, x2)) * max(0, min(y1+h1, y2+h2) - max(y1, y2))
    union_area = w1 * h1 + w2 * h2 - intersection_area
    iou = intersection_area / union_area
    return iou >= threshold

def process_images(person_image_path, test_image_path):
    person_image = np.array(Image.open(person_image_path))
    test_image = np.array(Image.open(test_image_path))
    found = find_person_in_image(person_image, test_image)
    return found

