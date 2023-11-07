import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import DetailedStatements from '../../components/Statements/DetailedStatements';

const StateMents = () => {
	return (
		<View style={styles.container}>
			<DetailedStatements />
		</View>
	);
};

export default StateMents;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		flex: 1,
	},
});
