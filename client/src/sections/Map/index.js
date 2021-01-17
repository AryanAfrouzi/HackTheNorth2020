import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  ZoomControl,
  useMap,
} from "react-leaflet";
import "./GeeseMap.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import gooseImg from "../../assets/goose.png";
import styled from "styled-components";

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}

class Map extends React.Component {
  state = {
    center: [43.4723, -80.5449],
  };

  componentDidMount() {
    if (this.props.center) {
      this.setState({
        center: this.props.center,
      });
    }
  }

  render() {
    return (
      <MapContainer
        useFlyTo
        attributionControl={false}
        center={this.state.center}
        zoom={16}
        zoomControl={false}
      >
        <ChangeView center={this.state.center} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {this.props.geese &&
          this.props.geese.map((goose) => {
            const geeseIcon = new L.Icon({
              iconUrl: gooseImg,
              iconRetinaUrl: gooseImg,
              iconSize: [50, 50],
            });

            return (
              <Marker
                position={[goose.lat, goose.lng]}
                icon={geeseIcon}
                key={goose.date}
                eventHandlers={{
                  click: (e) => {
                    this.setState({ center: [goose.lat, goose.lng] });
                    //this.props.toggleDrawer(true);
                    //this.props.changeCurrentGoose(goose);
                  },
                }}
              />
            );
          })}
        <ZoomControl position="topright" />
      </MapContainer>
    );
  }
}

export default Map;
