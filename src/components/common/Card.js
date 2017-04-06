import React from 'react';
import { View } from 'react-native';

// makes something with some nice styling that looks like a card

// {this will render any components we pass to this card line }
// 			{/*this will render anything we passed to this card */ }
const Card = (props) => {
	return(
		<View style={styles.containerStyle}>

			{props.children}
			
		</View>
	);
};

// create a styles object
const styles = {
	containerStyle: {
		borderWidth: 1, 
		borderRadius: 2, 
		borderColor: "#ddd", 
		borderBottomWidth: 0, 
		shadowColor: "#000",
		shadowOffset: {
			width: 0, 
			height: 2
		},
		shadowOpacity: 0.1, 
		shadowRadius: 2, 
		elevation: 1, 
		marginLeft: 5, 
		marginRight: 5, 
		marginTop: 10


	}
}

export default Card; 