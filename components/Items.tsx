import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ItemCard, { Asset } from './ItemCard';

const styles = StyleSheet.create({
	avatarGreen: {
		backgroundColor: '#7bd500',
	},

	avatarBlue: {
		backgroundColor: '#1e7cf8',
	},

	avatarBorderless: {
		backgroundColor: '#FFF',
	},
});

const items: Asset[] = [
	{
		title: 'Financial Services',
		subtitle: 'View All',
		items: [
			{
				path: require('../assets/images/globalpay.png'),
				title: 'Global Pay',
			},
			{
				path: require('../assets/images/mshwari.jpeg'),
				title: 'M-Shwari',
			},
			{
				path: require('../assets/images/kcb.jpg'),
				title: 'KCB M-PESA',
			},

			{
				icon: 'chart-timeline-variant',
				title: 'Mali',
				style: styles.avatarBlue,
			},
		],
	},

	{
		title: 'Shop & Gift',
		subtitle: 'View All',
		items: [
			{
				path: require('../assets/images/gitpesa.png'),
				title: 'Buy Gift Voucher',
			},
			{
				path: require('../assets/images/shopzetu.png'),
				title: 'Shop Zetu',
			},
			{
				path: require('../assets/images/ezawadi.jpeg'),
				title: 'ezawadi',
			},

			{
				path: require('../assets/images/masoko.jpeg'),
				title: 'safaricom masoko',
			},
		],
	},

	{
		title: 'Public Sector',
		subtitle: 'View All',
		items: [
			{
				path: require('../assets/images/mycounty-2.png'),
				title: 'My County',
			},
			{
				path: require('../assets/images/nairobi.png'),
				title: 'My Nairobi',
			},
			{
				path: require('../assets/images/hustler.jpg'),
				title: 'Hustler Fund',
			},

			{
				path: require('../assets/images/nhif.jpeg'),
				title: 'NHIF',
			},
		],
	},
];

const Items = () => {
	return (
		<View>
			{items.map((item, index) => (
				<ItemCard asset={item} key={index} />
			))}
		</View>
	);
};

export default Items;
