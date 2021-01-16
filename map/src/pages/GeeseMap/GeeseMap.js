import React from "react";
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import "./GeeseMap.css";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import gooseImg from "./images/goose.png";

class GeeseMap extends React.Component {
    handleClick = event => {
        const { lat, lng } = event.latlng;
        console.log(`Clicked at ${lat}, ${lng}`);
    }
    
    render() {
        return (
            <MapContainer useFlyTo attributionControl={false} center={[43.4723, -80.5449]} zoom={16} zoomControl={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    {this.props.geese && this.props.geese.map(goose => {
                        const geeseIcon = new L.Icon({
                            iconUrl: gooseImg,
                            iconRetinaUrl: gooseImg,
                            iconSize: [50,50],
                        })

                        return <Marker position={[goose.lat, goose.lng]} icon={geeseIcon} key={goose.date} eventHandlers={{click: (e) => {
                                    console.log("Gottem");
                                }
                            }}/>
                    })}
                <ZoomControl position="bottomright"/>
            </MapContainer>
        );
    }
}

export default GeeseMap;