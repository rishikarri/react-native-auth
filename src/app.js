import React, { Component } from 'react';
import firebase from 'firebase';

import { View, Text } from 'react-native';
import { Header } from './components/common/index.js';
import LoginForm from './components/LoginForm.js'



class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			
			apiKey: "AIzaSyC2REQF0gMJmIaB9V_lYvApv7Oo2QeEFVU",
			authDomain: "auth-a093a.firebaseapp.com",
			databaseURL: "https://auth-a093a.firebaseio.com",
			projectId: "auth-a093a",
			storageBucket: "auth-a093a.appspot.com",
			messagingSenderId: "266884353312"
  			
		});
	}
	render(){
		return (
			<View>
				<Header headerText='Authentication' />
				<LoginForm />
			</View>
		)
	}

}

export default App; 