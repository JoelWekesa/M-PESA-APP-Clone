import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import CustomAvatar, { CustomizedAvatar } from '../shared/CustomAvatar';
import { Text as LabelText } from 'react-native-paper';

export interface Item {
	avatar: CustomizedAvatar;
	title: string;
	amount: string;
	time: string;
}

export interface Statement {
	date: string;
	items: Item[];
}

const DetailedStatement: FC<{ statement: Statement }> = ({
	statement: { date, items },
}) => {
	const maxLength = 18;
	return (
		<View style={styles.container}>
			<View style={styles.column}>
				<Text style={[styles.text, styles.title]}>{date}</Text>
			</View>
			{items.map((item, index) => (
				<View style={[styles.row, styles.spaceBetween]} key={index}>
					<View style={[styles.row, styles.marginVertical]}>
						<CustomAvatar avatar={item.avatar} />
						<View style={styles.center}>
							<Text style={[styles.text, styles.leftSpace]}>
								{item.title.length > maxLength
									? item.title.slice(0, maxLength) + '...'
									: item.title}
							</Text>
						</View>
					</View>
					<View style={[styles.column, styles.marginVertical, styles.center]}>
						<View style={styles.leftAlign}>
							<Text style={styles.text}>{item.amount}</Text>
						</View>
						<View style={styles.leftAlign}>
							<LabelText variant='labelMedium' style={styles.muted}>
								{item.time}
							</LabelText>
						</View>
					</View>
				</View>
			))}
		</View>
	);
};

export default DetailedStatement;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		marginHorizontal: 5,
		marginTop: 20,
	},

	text: {
		textTransform: 'uppercase',
	},

	title: {
		marginVertical: 5,
	},

	column: {
		flexDirection: 'column',
	},

	row: {
		flexDirection: 'row',
	},

	leftSpace: {
		marginLeft: 10,
	},

	spaceBetween: {
		justifyContent: 'space-between',
	},

	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	marginVertical: {
		marginVertical: 10,
	},
	leftAlign: {
		alignSelf: 'flex-end',
	},
	muted: {
		color: '#d1cdca',
		fontSize: 14,
	},
});
