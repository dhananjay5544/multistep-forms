import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export class FormPersonalDetails extends Component {

    //go to the next form
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    //go to the next form
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal details" />
                    <TextField
                        hintText="Enter your Occupation"
                        floatingLabelText="Occupation"
                        onChange={this.props.handleChange}
                        defaultValue={values.occupation}
                        name="occupation"
                    />
                    <br />
                    <TextField
                        hintText="Enter your City"
                        floatingLabelText="City"
                        onChange={this.props.handleChange}
                        defaultValue={values.city}
                        name="city"
                    />
                    <br />
                    <TextField
                        hintText="Enter your Bio"
                        floatingLabelText="Bio"
                        onChange={this.props.handleChange}
                        defaultValue={values.bio}
                        name="bio"
                    />
                    <br />
                    <div>
                        <RaisedButton
                            label="Continue"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                        />
                        <RaisedButton
                            label="Back"
                            primary={false}
                            style={styles.button}
                            onClick={this.back}
                        />
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default FormPersonalDetails;