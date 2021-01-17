import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Map
        </Button>
        <Button color="inherit" component={Link} to="/drone">
          Drone
        </Button>
        <Button color="inherit" component={Link} to="/sightings">
          Sightings
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
