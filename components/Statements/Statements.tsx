import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Statement from './Statement';
import { useRouter } from 'expo-router';

const Statements = () => {
	const router = useRouter();
	return (
		<View style={styles.container}>
			<View style={styles.column}>
				<View style={[styles.row, styles.spaceBetween]}>
					<Text style={[styles.text]}>m-pesa statements</Text>
					<Pressable onPress={() => router.push('/statements')}>
						<Text style={[styles.text, styles.greenText]}>see all</Text>
					</Pressable>
				</View>
				<Statement />
			</View>
		</View>
	);
};

export default Statements;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		marginHorizontal: 5,
		marginTop: 20,
	},

	row: {
		flexDirection: 'row',
		marginVertical: 5,
	},

	spaceBetween: {
		justifyContent: 'space-between',
	},

	column: { flexDirection: 'column' },

	text: {
		textTransform: 'uppercase',
		padding: 5,
	},

	greenText: {
		color: '#46c272',
	},
});
