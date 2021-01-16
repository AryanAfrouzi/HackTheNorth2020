from picamera import PiCamera
from time import sleep

camera = PiCamera()
camera.start_preview()
sleep(5)
filename = "pircam-" +  datetime.now().strftime("%Y-%m-%d_%H.%M.%S.jpg")
camera.capture(filename)
camera.stop_preview()