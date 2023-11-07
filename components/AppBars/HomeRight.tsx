import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';

const HomeRight = () => {
	return (
		<View style={styles.row}>
			<View style={styles.center}>
				<Avatar.Icon icon='bell-outline' size={40} style={styles.plainAvatar} />
			</View>

			<View style={styles.center}>
				<Avatar.Icon icon='clock-outline' size={40} style={styles.plainAvatar} />
			</View>
			<View style={styles.center}>
				<Avatar.Icon icon='qrcode' size={40} style={styles.plainAvatar} />
			</View>
		</View>
	);
};

export default HomeRight;

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
	},

	center: {
		justifyContent: 'center',
	},

	space: {
		marginHorizontal: 10,
	},

	plainAvatar: {
		backgroundColor: '#FFF',
	},
});
