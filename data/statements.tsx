import { StyleSheet } from 'react-native';
import { Item, Statement } from '../components/Statements/DetailedStatement';
import { getDatesBetween } from './dates';
import { names } from './names';
import { randomTimes } from './times';

export enum Colors {
	blue = '#1e7cf8',
	red = '#f82e5b',
}

const styles = StyleSheet.create({
	reddishAvatar: {
		backgroundColor: '#fff3f7',
	},

	blueishAvatar: {
		backgroundColor: '#d5eaf6',
	},
});

const startDate = new Date('2023-09-01');
const endDate = new Date('2023-09-30');

const startDateOct = new Date('2023-10-01');
const endDateOct = new Date('2023-10-31');

const startDateNov = new Date('2023-11-01');
const endDateNov = new Date('2023-11-30');

const dates = getDatesBetween(startDate, endDate);

const kshFormatter = new Intl.NumberFormat('en-KE', {
	style: 'currency',
	currency: 'KES',
});

const listGen = (): Item[] => {
	const blueList: Item[] = [];
	for (let i = 0; i < Math.floor(Math.random() * (5 - 1 + 1)) + 1; i++) {
		const name = names[Math.floor(Math.random() * names.length)];

		const num = Math.floor(Math.random() * (2 - 1 + 1));
		blueList.push({
			time: randomTimes[Math.floor(Math.random() * randomTimes.length)],
			amount: kshFormatter.format(
				Math.floor(Math.random() * (110000 - 300 + 1)) + 300
			),
			title: name,
			avatar: {
				color: num === 1 ? Colors.red : Colors.blue,
				style: num === 1 ? styles.reddishAvatar : styles.blueishAvatar,
				label: name.split(' ')[0].charAt(0) + name.split(' ')[1].charAt(0),
				size: 40,
			},
		});
	}

	return blueList;
};

const actualDates = (month: string) => {
	switch (month) {
		case 'October':
			const dates = getDatesBetween(startDateOct, endDateOct);

			return dates;

		case 'November':
			const datesN = getDatesBetween(startDateNov, endDateNov);

			return datesN;

		default:
			return getDatesBetween(startDate, endDate);
	}
};

export const getStatements = (month: string) => {
	const dates = actualDates(month);

	return dates.slice(0, 10).map((date) => ({
		date,
		items: listGen(),
	}));
};

export const statements: Statement[] = dates.slice(0, 10).map((date) => ({
	date,
	items: listGen(),
}));
