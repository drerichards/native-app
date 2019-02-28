import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ListItem from './ListItem';

const PlaceList = (props) => {
	const placesOutput = props.places.map((place, i) => <ListItem placeName={place} onItemPressed={() => props.onItemDeleted(i)} key={i} />);
	return <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>;
};

const styles = StyleSheet.create({
	listContainer: {
		width: '100%'
	}
});
export default PlaceList;
