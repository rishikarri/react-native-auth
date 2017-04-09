import React from 'react';
import { Text, TouchableOpacity } from 'react-native'; 
// Button that can be reused - contains styling and renders children 

const Button = ({whenPressed, children}) => {

	// destructure buttonStyle from styles 
	const { buttonStyle, textStyle } = styles; 

	return (
		<TouchableOpacity onPress={whenPressed} style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16, 
		fontWeight: '600',
		paddingTop: 10, 
		paddingBottom: 10
	},
	buttonStyle: {
		flex: 1, 
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5, 
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5, 
		marginRight: 5

	}
}
export { Button }; 


