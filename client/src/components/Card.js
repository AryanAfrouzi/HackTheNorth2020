import {Paper, makeStyles, Divider} from "@material-ui/core";
import {FaCalendar, FaGlobeAmericas} from "react-icons/fa";

const styles = makeStyles({
    card: {
        backgroundColor: "#C4C4C4",
        opacity: 60,
        padding: 20,
        borderRadius: 20,
        boxShadow: "7px 7px 7px #AAAAAA",
        textAlign: "center",
        marginBottom: 20
    },
    image: {
        width: "100%",
        boxShadow: "2px 2px 5px"
    },
    info: {
        marginBottom: 25
    }
})

const Card = props => {
    const classes = styles();

    return (
        <Paper className={classes.card}>
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
                </div>
        </Paper>
    );
}

export default Card;