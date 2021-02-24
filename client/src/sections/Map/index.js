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
import Yellow from "../../assets/Goose/YellowGoose.png";
import Orange from "../../assets/Goose/OrangeGoose.png";
import Red from "../../assets/Goose/RedGoose.png";
import styled from "styled-components";
import { withRouter } from "react-router";
import Popup from "../../components/Popup";
import { Dialog } from "@material-ui/core";

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [43.4723, -80.5449],
      open: false,
      currentGoose: null,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({
        center: this.props.location.state.center,
      });
    } else {
      this.setState({
        center: [43.4723, -80.5449],
      });
    }
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const { state } = this.props;

    return (
      <>
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
              let color = Yellow;

              if (goose.number >= 10) {
                color = Red;
              } else if (goose.number >= 5) {
                color = Orange;
              }
              const geeseIcon = new L.Icon({
                iconUrl: color,
                iconRetinaUrl: color,
                iconSize: [50, 50],
              });

              return (
                <Marker
                  position={[goose.lat, goose.lng]}
                  icon={geeseIcon}
                  key={goose.date}
                  eventHandlers={{
                    click: (e) => {
                      this.setState({
                        center: [goose.lat, goose.lng],
                        currentGoose: goose,
                        open: true,
                      });
                    },
                  }}
                />
              );
            })}
          <ZoomControl position="topright" />
        </MapContainer>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <Popup server={this.props.server} goose={this.state.currentGoose} />
        </Dialog>
      </>
    );
  }
}

export default withRouter(Map);
