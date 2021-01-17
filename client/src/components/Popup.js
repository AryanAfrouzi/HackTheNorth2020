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
import { Link } from "react-router-dom";

const Popup = ({ goose }) => {
  return (
    <Card>
      <Image image={goose.image} title="Paella dish" />
      <CardContent>
        <Typography>Number of Geese: {goose.number}</Typography>
        <Typography>Date: {goose.date}</Typography>
        <Button component={Link} to="/sightings">
          More Info
        </Button>
      </CardContent>
    </Card>
  );
};

const Image = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`;

export default Popup;
