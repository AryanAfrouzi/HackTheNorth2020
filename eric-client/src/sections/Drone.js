import Carousel from 'react-material-ui-carousel';
import {Container} from "@material-ui/core";

const Drone = props => {
  return (
    <Container style={{marginTop: 100}}>
      <Carousel interval={3000}>
        {props.images.map(image => <img src={image} alt="" style={{borderRadius: 20}}/>)}
      </Carousel>
    </Container>
  );
};

export default Drone;
