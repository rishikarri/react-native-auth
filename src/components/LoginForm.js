import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common/index.js'

class LoginForm extends Component {
	state = { text: '' };


	render() {
		return (
			<Card>				

				<CardSection>
					<TextInput 
						value={this.state.text}
						style={{ height: 20, width: 300 }} 
						onChangeText={text => this.setState({ text })}
					/>
				</CardSection>

				<CardSection />


				<CardSection >
					<Button> Login </Button>
				</CardSection >
			</Card>
		);
	}
}

export default LoginForm;