import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import styled from "styled-components";

const Popup = ({ goose }) => {
  return (
    <Card>
      <Image image={goose.image} title="Paella dish" />
      <CardContent>
        <Typography>Date {goose.date}</Typography>
        <Typography>Number of Geese: {goose.number}</Typography>
        <Typography>Latitude: {goose.lat}</Typography>
        <Typography>Longitude: {goose.lng}</Typography>
      </CardContent>
    </Card>
  );
};

const Image = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`;

export default Popup;
