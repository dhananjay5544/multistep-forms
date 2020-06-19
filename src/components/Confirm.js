import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import { List, ListItem } from 'material-ui/List'

export class Confirm extends Component {

    //go to the next form
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    //go to the prev form
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={bio}
                        />
                    </List>
                    <div>
                        <RaisedButton
                            label="Submit"
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
export default Confirm;