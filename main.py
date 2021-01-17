from flask import Flask, jsonify, request, send_file
from PIL import Image
import time
server = Flask(__name__)
from sightings import Sightings
import uuid
import json

sightings = Sightings()

def inference(img):
    #save ..._overlay.png
    return 0, ((0,0),(0,0))

@server.route("/still-data", methods = ["POST"])
def load_still():
    data = request.files.get('still')
    img = Image.open(data.stream)
    sid = str(uuid.uuid1().int)
    img.save("stills/"+sid+".png")
    num_geese, bbox = inference(img)
    jsondata = json.loads(request.form['json'])
    sightings.add(sid, time.time(), jsondata["location"], jsondata["telemetry"], num_geese, bbox)
    return "Success", 200

@server.route("/sightings", methods = ["GET"])
def get_sightings():
    sightings.refresh()
    return jsonify(sightings.serialize())

@server.route("/get-still", methods = ["GET"])
def get_still():
    sid = request.json["id"]
    return send_file("stills/"+sid+".png", mimetype="image/png")

@server.route("/get-still-boxed", methods = ["GET"])
def get_still_with_box():
    sid = request.json["id"]
    return send_file("stills/"+sid+"_overlay.png", mimetype="image/png")

server.run(port = "8080", debug = True)
