import { Drawer, Divider, makeStyles, List, ListItem } from '@material-ui/core';
import {FaCalendar, FaGlobeAmericas} from "react-icons/fa";
import {GiGoose} from "react-icons/gi";

const useStyles = makeStyles({
    drawer: {
        width: 300,
        zIndex: 10,
        textAlign: "center",
        paddingTop: 100
    },
    image: {
        width: 280,
        marginBottom: 75,
        boxShadow: "5px 5px 5px #AAAAAA"
    },
    info: {
        marginBottom: 50
    }
});

const Sidebar = props => {
    const classes = useStyles();

    return (
        <Drawer anchor={"left"} open={props.open} variant={"temporary"} BackdropProps={{ invisible: true }} onClose={() => props.toggleDrawer(false)}>
            <div className={classes.drawer}>
                <img className={classes.image} src={props.goose.image} alt="A goose"/>

                <div className={classes.info}>
                    <h1><FaCalendar color="#328BDD"/> Date</h1>
                    <h2>{props.goose.date}</h2>
                    <Divider/>
                </div>
                
                <div className={classes.info}>
                    <h1><FaGlobeAmericas color="#44A978"/> Location</h1>
                    <h2>Latitude: {props.goose.lat}</h2>
                    <h2>Longitude: {props.goose.lng}</h2>
                    <Divider/>
                </div>

                <div className={classes.info}>
                    <h1><GiGoose color="#654321"/> Number</h1>
                    <h2>{props.goose.number}</h2>
                </div>
            </div>
        </Drawer>
    );
}

export default Sidebar;