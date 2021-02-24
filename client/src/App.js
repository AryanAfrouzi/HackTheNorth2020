import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import NoSsr from "@material-ui/core/NoSsr";
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import Theme from "./theme";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { Typography } from "@material-ui/core";

import Map from "./sections/Map";
import Drone from "./sections/Drone";
import Sightings from "./sections/Sightings";

import "./App.css";

import Geese from "./data/Geese";
import DroneImages from "./data/DroneImages";

const serverURL = "https://05351de26b56.ngrok.io/";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [serverResult, setServerResult] = useState(null);
  const [geese, setGeese] = useState(null);

  useEffect(() => {
    fetch(serverURL + "/sightings", {})
      .then((res) => res.json())
      .then(
        (result) => {
          setServerResult(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      );
  }, []);

  useEffect(() => {
    setLoading(true);
    convertData(serverResult);
    setLoading(false);
  }, [serverResult]);

  const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  };

  const convertData = (result) => {
    if (result) {
      console.log(result);
      const Geese = { data: [] };
      for (let i = 0; i < result.length; i++) {
        const o_date_en = new Intl.DateTimeFormat("en");
        const a_date_en = o_date_en.formatToParts();
        console.log(result);

        Geese.data.push({
          lat: result[i].location[0],
          lng: result[i].location[1],
          date: timeConverter(result[i].time),
          number: result[i].geesestimate,
          image: result[i].id.toString(),
        });
      }
      setGeese(Geese);
    }
  };

  return (
    <NoSsr>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={Theme}>
          <ThemeProvider theme={Theme}>
            <Router>
              <div className="App">
                <Navbar />
                {!geese ? (
                  <Typography>Loading...</Typography>
                ) : (
                  <Switch>
                    <Route exact path="/">
                      <Map server={serverURL} geese={geese.data} />
                    </Route>
                    <Route exact path="/drone">
                      <Layout>
                        <Drone images={DroneImages.data} />
                      </Layout>
                    </Route>
                    <Route exact path="/sightings">
                      <Layout>
                        <Sightings server={serverURL} geese={geese.data} />
                      </Layout>
                    </Route>
                  </Switch>
                )}
              </div>
            </Router>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </NoSsr>
  );
};

export default App;
