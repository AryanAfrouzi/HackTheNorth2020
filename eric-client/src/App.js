import React from "react";
import styled, { ThemeProvider } from "styled-components";
import NoSsr from "@material-ui/core/NoSsr";
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import Theme from "./theme";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

import Map from "./sections/Map";
import Drone from "./sections/Drone";
import Sightings from "./sections/Sightings";

import "./App.css";

import Geese from "./data/Geese";
import DroneImages from "./data/DroneImages";

/*
class App extends React.Component {
  state = {
  geese: [
    {
      lat: 43.4723,
      lng: -80.5449,
      date: "01/16/2021",
      number: 1,
      image: "https://i.ytimg.com/vi/JsGz-wQpEkY/maxresdefault.jpg",
    },
    {
      lat: 43.4727,
      lng: -80.5439,
      date: "01/10/2021",
      number: 1,
      image: "https://i.ytimg.com/vi/JsGz-wQpEkY/maxresdefault.jpg",
    },
    {
      lat: 43.4728,
      lng: -80.5489,
      date: "01/16/2021",
      number: 1,
      image: "https://i.ytimg.com/vi/JsGz-wQpEkY/maxresdefault.jpg",
    },
    {
      lat: 43.472,
      lng: -80.5339,
      date: "01/10/2021",
      number: 1,
      image: "https://i.ytimg.com/vi/JsGz-wQpEkY/maxresdefault.jpg",
    },
    {
      lat: 43.4763,
      lng: -80.5479,
      date: "01/16/2021",
      number: 1,
      image: "https://i.ytimg.com/vi/JsGz-wQpEkY/maxresdefault.jpg",
    },
    {
      lat: 43.4721,
      lng: -80.5431,
      date: "01/10/2021",
      number: 1,
      image: "https://i.ytimg.com/vi/JsGz-wQpEkY/maxresdefault.jpg",
    },
  ],
  currentGoose: {
    lat: 43.4727,
    lng: -80.5439,
    date: "01/10/2021",
    image: "https://i.ytimg.com/vi/JsGz-wQpEkY/maxresdefault.jpg",
  },
  drawerOpen: false,
};


  changeCurrentGoose = (goose) => {
    this.setState({ currentGoose: goose });
  };
  toggleDrawer = (bool) => {
    this.setState({ drawerOpen: bool });
  };

  render() {
    return (
      <NoSsr>
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={Theme}>
            <ThemeProvider theme={Theme}>
              <div className="App">
                {<GeeseMap
                  geese={this.state.geese}
                  toggleDrawer={this.toggleDrawer}
                  changeCurrentGoose={this.changeCurrentGoose}
                />}
                {<Sidebar
                  goose={this.state.currentGoose}
                  open={this.state.drawerOpen}
                  toggleDrawer={this.toggleDrawer}
                />}
                {<Sightings geese={this.state.geese}/>}
              </div>
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </NoSsr>
    );
  }
}
*/

const App = () => {
  return (
    <NoSsr>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={Theme}>
          <ThemeProvider theme={Theme}>
            <Router>
              <div className="App">
                <Navbar />
                {/*<Sidebar />*/}
                <Switch>
                  <Route exact path="/">
                    <Map geese={Geese.data} />
                  </Route>
                  <Route exact path="/drone">
                    <Layout>
                      <Drone images={DroneImages.data}/>
                    </Layout>
                  </Route>
                  <Route exact path="/sightings">
                    <Layout>
                      <Sightings geese={Geese.data} />
                    </Layout>
                  </Route>
                </Switch>
              </div>
            </Router>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </NoSsr>
  );
};

export default App;
