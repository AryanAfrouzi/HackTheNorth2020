import React from "react";
import Card from "../../components/Card";
import {Grid} from "@material-ui/core";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default class Sightings extends React.Component {
    state = {
        date: Date.now(),
        geese: []
    }

    componentDidMount() {
        this.setState({
            geese: this.props.geese
        });
    }

    changeDate = date => {
        this.setState({date});
        const filteredGeese = this.props.geese.filter(goose => goose.date === this.getDate(date));
        this.setState({geese: filteredGeese});
        console.log(this.props.geese, this.getDate(this.state.date));
    }

    getDate = date => {
        date = new Date(date);
        const month = date.getMonth()+1;
        const day = date.getDate();
        const year = date.getFullYear();
        return (month < 10 ? "0" + month : month) + "/" + (day < 10 ? "0" + day : day) + "/" + year;
    }

    render() {
        return (
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Filter by date"
                        value={this.state.date}
                        onChange={this.changeDate}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
                
                <Grid container spacing={10} style={{margin: 0, width: '100%'}}>
                    {this.state.geese.map(goose => 
                        (<Grid item xs={12} sm={4}>
                            <Card goose={goose}/>
                        </Grid>)
                    )}
                </Grid>
            </div>
            
        );
    }
}