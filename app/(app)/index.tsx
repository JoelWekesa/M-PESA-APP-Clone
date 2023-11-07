import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Actions from '../../components/Actions';
import Balance from '../../components/Balance';
import Items from '../../components/Items';
import Statements from '../../components/Statements/Statements';
import { useAuth } from '../../providers/auth';

const Home = () => {
	const { signOut } = useAuth();

	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<Balance />
			<Statements />
			<Actions />
			<Items />
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
