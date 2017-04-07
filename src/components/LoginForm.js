import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common/index.js';

class LoginForm extends Component {
	state = { text: '' };


	render() {
		return (
			<Card>				

				<CardSection>
					<Input 
						value={this.state.text}
						onChangeText={text => this.setState({ text })}>
					</Input>
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