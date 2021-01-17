import React from "react";
import Card from "../components/Card";
import { Grid } from "@material-ui/core";

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
      <Grid container spacing={10} style={{ margin: 0, width: "100%" }}>
        {this.state.geese.map((goose) => (
          <Grid item xs={12} sm={4}>
            <Card goose={goose} />
          </Grid>
        ))}
      </Grid>
    );
  }
}
