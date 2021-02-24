import React from "react";
import Carousel from "react-material-ui-carousel";
import { Container, GridList, GridListTile } from "@material-ui/core";
//import "~video-react/dist/video-react.css";
//import Drone1 from "../../assets/Drone/Drone1.jpg";
//import { Player } from "video-react";

const Drone = (props) => {
  return (
    <Container style={{ marginTop: 100 }}>
      <Carousel interval={3000}>
        {props.images.map((image) => (
          <img src={image} alt="" style={{ borderRadius: 20 }} />
        ))}
      </Carousel>
      {/*<GridList>
        <GridListTile>
          <img src={Drone1} />
        </GridListTile>
      </GridList>*/}
    </Container>
  );
};

export default Drone;
