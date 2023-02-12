import cv2
import subprocess
from flask import Flask, request

app = Flask(__name__)


@app.route('/analyze', methods=['POST'])
def analyze():

    # Get the video data from the request

    video_data = request.files['video']
    print('================')
    print(video_data)
    print('================')
    # Save the video data to a file
    video_data.save('video.webm')
    # Write the video data to a file
    # with open('video.mp4', 'wb') as f:
    #     f.write(video_data)

    return 'Video analyzed'


if __name__ == '__main__':
    app.run(debug=True, port=5000)
