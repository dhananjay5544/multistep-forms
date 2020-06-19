import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

export class FormUserDetails extends Component {

    //go to the next form
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User details" />
                    <TextField
                        hintText="Enter your First Name"
                        floatingLabelText="First Name"
                        onChange={this.props.handleChange}
                        defaultValue={values.firstName}
                        name="firstName"
                    />
                    <br/>
                    <TextField
                        hintText="Enter your Last Name"
                        floatingLabelText="Last Name"
                        onChange={this.props.handleChange}
                        defaultValue={values.lastName}
                        name="lastName"
                    />
                    <br/>
                    <TextField
                        hintText="Enter your Email"
                        floatingLabelText="Email"
                        onChange={this.props.handleChange}
                        defaultValue={values.email}
                        name="email"
                    />
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles ={
    button:{
        margin:15
    }
}
export default FormUserDetails;