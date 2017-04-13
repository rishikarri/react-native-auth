import React from 'react';
import { View, ActivityIndicator } from 'react-native';


// presentational component - no need for state 

const Spinner = ({ sizeOfSpinner }) => {
	return ( 
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={sizeOfSpinner || 'large'}/>
		</View>


	);
};


const styles = {
	spinnerStyle: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export { Spinner };


