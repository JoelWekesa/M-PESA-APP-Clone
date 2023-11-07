import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';

const Actions = () => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<View style={styles.column}>
					<Avatar.Icon
						icon='arrow-top-right-thin'
						style={[styles.avatar, styles.greenAvatar]}
						size={50}
						color='white'
					/>
					<Text style={styles.iconText}>Send and request</Text>
				</View>
				<View style={styles.column}>
					<Avatar.Icon
						icon='cash'
						style={[styles.avatar, styles.blueAvatar]}
						size={50}
						color='white'
					/>
					<Text style={styles.iconText}>Pay</Text>
				</View>
				<View style={styles.column}>
					<Avatar.Icon
						icon='arrow-down-thin'
						style={[styles.avatar, styles.redAvatar]}
						size={50}
						color='white'
					/>
					<Text style={styles.iconText}>Withdraw</Text>
				</View>
				<View style={styles.column}>
					<Avatar.Icon
						icon='cellphone-sound'
						style={[styles.avatar, styles.blueishAvatar]}
						size={50}
						color='white'
					/>
					<Text style={styles.iconText}>Airtime</Text>
				</View>
			</View>
		</View>
	);
};

export default Actions;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		marginHorizontal: 5,
		marginTop: 20,
	},

	row: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},

	column: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},

	avatar: {
		margin: 2,
	},

	greenAvatar: {
		backgroundColor: '#46c272',
	},

	blueAvatar: {
		backgroundColor: '#1e7cf8',
	},

	redAvatar: {
		backgroundColor: '#f82e5a',
	},

	blueishAvatar: {
		backgroundColor: '#31c5fa',
	},

	iconText: {
		textTransform: 'uppercase',
		textAlign: 'center',
		marginTop: 10,
		flexShrink: 1,
		width: 80,
		height: 40,
	},
});
