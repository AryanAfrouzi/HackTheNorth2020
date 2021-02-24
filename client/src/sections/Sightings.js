import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Sightings extends React.Component {
  state = {
    geese: [],
  };

  componentDidMount() {
    this.setState({
      geese: this.props.geese,
    });
  }

  render() {
    return (
      <Grid container spacing={4} style={{ margin: 0, width: "100%" }}>
        {this.state.geese.map((goose) => (
          <Grid item xs={12} md={4} sm={6}>
            <Card>
              <Image
                image={this.props.server + "/get-still-boxed?id=" + goose.image}
              />
              <CardContent>
                <Typography>Date: {goose.date}</Typography>
                <Typography>Number of Geese: {goose.number}</Typography>
                <Typography>Latitude: {goose.lat}</Typography>
                <Typography>Longitude: {goose.lng}</Typography>
                <Button
                  component={Link}
                  to={{
                    pathname: "/",
                    state: { center: [goose.lat, goose.lng] },
                  }}
                >
                  View on Map
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

const Image = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`;
