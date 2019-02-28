import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default class PlaceInput extends Component {
    state = {
		placeName: ''
	};

	placeNameChangedHandler = (val) => {
		this.setState({
			placeName: val
		});
	};

	placeSubmitHandler = () => {
		if (this.state.placeName.trim() === '') {
			return;
        }
        
        this.props.onPlaceAdded(this.state.placeName)
	};
	render() {
		return (
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.inputField}
					placeholder="Type Here"
					value={this.state.placeName}
					onChangeText={this.placeNameChangedHandler}
				/>
				<Button title="Add" style={styles.inputButton} onPress={this.placeSubmitHandler} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
    inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		// marginHorizontal: 200,
		// marginVertical: '5%',
		// marginTop: '12%',
		// height: 30,
		width: '100%'
    },
    inputField: {
		width: '70%',
		borderColor: '#ccc',
		borderWidth: 1,
		paddingHorizontal: '5%',
		paddingVertical: '2%',
		borderRadius: 10
	},
	inputButton: {
		width: '30%'
	},
});
