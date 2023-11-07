import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Text as LabelText } from 'react-native-paper';

const Statement = () => {
	return (
		<View style={[styles.row, styles.spaceBetween]}>
			<View style={[styles.row, styles.center]}>
				<View style={[styles.space]}>
					<Avatar.Text
						label='DL'
						size={50}
						color='#f82e5b'
						style={styles.avatar}
					/>
				</View>
				<View style={styles.space}>
					<Text style={styles.boldText}>DIASPORA LTD</Text>
				</View>
			</View>
			<View style={styles.column}>
				<View style={styles.alignLeft}>
					<Text style={styles.boldText}>-2,400.00</Text>
				</View>
				<View style={styles.alignLeft}>
					<LabelText variant='labelMedium' style={styles.muted}>
						5 Nov, 12:00 AM
					</LabelText>
				</View>
			</View>
		</View>
	);
};

export default Statement;

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
	},

	spaceBetween: {
		justifyContent: 'space-between',
	},

	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	space: {
		marginHorizontal: 5,
	},

	avatar: {
		backgroundColor: '#fff3f7',
	},

	column: {
		flexDirection: 'column',
		justifyContent: 'center',
	},

	alignLeft: {
		alignSelf: 'flex-end',
	},

	boldText: {
		fontWeight: 'bold',
	},

	muted: {
		color: '#d1cdca',
	},
});
