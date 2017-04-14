import React, { Component } from 'react';
import firebase from 'firebase';

import { View, Text } from 'react-native';
import { Header, Button } from './components/common/index.js';
import LoginForm from './components/LoginForm.js'



class App extends Component {

	// Login of null makes it so we don't know if we're logged in or not
	state = { loggedIn: null }

	componentWillMount() {
		firebase.initializeApp({
			
			apiKey: "AIzaSyC2REQF0gMJmIaB9V_lYvApv7Oo2QeEFVU",
			authDomain: "auth-a093a.firebaseapp.com",
			databaseURL: "https://auth-a093a.firebaseio.com",
			projectId: "auth-a093a",
			storageBucket: "auth-a093a.appspot.com",
			messagingSenderId: "266884353312"  			
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState ({
					loggedIn: true
				})
			} else {
				this.setState ({
					loggedIn: false
				})
			}
		})
	}

	renderContent() {
		if (this.state.loggedIn) {
			return (
				<Button>
					Log Out
				</Button>
			)
		}

		return <LoginForm />
	}
	
	render(){
		return (
			<View>
				<Header headerText='Authentication' />

				<View style={styles.marginAbove}>
					{this.renderContent()}
				</View>
			</View>
		)
	}

}

const styles = {
		marginAbove: {
			marginTop: 40,
			paddingTop: 40,
			borderColor: 'red',
			borderWidth: .5,
			borderRadius: 4
		}			
	};

export default App; 