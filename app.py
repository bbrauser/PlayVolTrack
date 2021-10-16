import os
from flask import Flask, request, redirect
from twilio.twiml.messaging_response import MessagingResponse

app = Flask(__name__)

@app.route("/sms", methods=['GET', 'POST'])
def sms_reply():
    """Respond to incoming calls with a simple text message."""
    # Start our TwiML response
    resp = MessagingResponse()

    # Add a message
    resp.message("Your volunteer hours have been logged! Thank you for all you do for Playhouse in the Park!")

    return str(resp)

if __name__ == "__main__":
    app.run(debug=True)