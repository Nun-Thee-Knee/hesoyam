from twilio.rest import Client
from dotenv import load_dotenv
import os

load_dotenv()

def send_message_to_hospital(message_text):
    account_sid = os.getenv("hospital_account_sid")
    auth_token = os.getenv("hospital_auth_token")
    client = Client(account_sid, auth_token)
    message = client.messages.create(
    from_=os.getenv("hospital_twilio_number"),
    to=os.getenv("hospital_actual_number"),
    body=message_text
    )
    print(message.sid)

def send_message_to_user(message_text):
    account_sid = os.getenv("user_account_sid")
    auth_token = os.getenv("user_auth_token")
    client = Client(account_sid, auth_token)

    message = client.messages.create(
    from_=os.getenv("user_twilio_number"),
    to=os.getenv("user_actual_number"),
    body=message_text
    )
    print(message.sid)

def send_message_to_police(message_text):
    account_sid = os.getenv("police_account_sid")
    auth_token = os.getenv("police_auth_token")
    client = Client(account_sid, auth_token)

    message = client.messages.create(
    from_=os.getenv("police_twilio_number"),
    to=os.getenv("police_actual_number"),
    body=message_text
    )
    print(message.sid)
