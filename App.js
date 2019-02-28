/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

import PlaceInput from './src/components/input/PlaceInput';
import PlaceList from './src/components/list/PlaceList';

type Props = {};
export default class App extends Component<Props> {
	state = {
		placeName: '',
		places: []
	};

	placeAddedHandler = (placeName) => {
		this.setState((prevState) => {
			return {
				places: prevState.places.concat({key: Math.random() ,value: placeName})
			};
		});
	};

	placeDeleteHandler = (key) => {
		this.setState((prevState) => {
			return {
				places: prevState.places.filter((place) => {
					return place.key !== key;
				})
			};
		});
	};
	render() {
		return (
			<View style={styles.container}>
				<PlaceInput onPlaceAdded={this.placeAddedHandler} />
				<PlaceList places={this.state.places} onItemDeleted={this.placeDeleteHandler} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 46,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#FFF'
	}
});
