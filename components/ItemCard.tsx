import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Avatar } from 'react-native-paper';
import { AvatarImageSource } from 'react-native-paper/lib/typescript/components/Avatar/AvatarImage';
import Card from './shared/Card';
import CustomCard from './shared/CustomCard';

interface Item {
	path?: AvatarImageSource;
	icon?: string;
	title: string;
	style?: StyleProp<ViewStyle>;
}

export interface Asset {
	items: Item[];
	title: string;
	subtitle: string;
	icon?: string;
}

const ItemCard: FC<{ asset: Asset }> = ({
	asset: { title, subtitle, items },
}) => {
	return (
		<View style={styles.container}>
			<CustomCard>
				<View style={[styles.row, styles.separated]}>
					<Text style={styles.titleText}>{title}</Text>
					<Text style={styles.subtitleText}>{subtitle}</Text>
				</View>
				<View style={[styles.row, styles.separated]}>
					{items.map((asset, index) => (
						<View style={styles.rowIcons} key={index}>
							{asset.path ? (
								<Avatar.Image
									source={asset.path}
									size={50}
									style={asset.style || styles.plainAvatar}
								/>
							) : (
								<Avatar.Icon
									icon={asset.icon!}
									style={asset.style}
									size={50}
									color='#FFF'
								/>
							)}

							<Text style={styles.iconText} numberOfLines={3}>
								{asset.title}
							</Text>
						</View>
					))}
				</View>
			</CustomCard>
		</View>
	);
};

export default ItemCard;

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		padding: 10,
		marginHorizontal: 5,
	},

	rowIcons: {
		flexDirection: 'column',
		marginVertical: 5,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		width: '25%',
	},

	separated: {
		justifyContent: 'space-between',
	},
	column: {
		flexDirection: 'column',
	},

	row: {
		flexDirection: 'row',
	},

	titleText: {
		fontWeight: '600',
	},

	subtitleText: {
		color: '#46c272',
	},

	iconText: {
		textTransform: 'uppercase',
		textAlign: 'center',
		marginTop: 5,
		// marginVertical: 5,
		height: 35,
	},

	plainAvatar: {
		backgroundColor: '#FFF',
	},
});
