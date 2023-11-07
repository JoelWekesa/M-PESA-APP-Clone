import { format } from 'date-fns';
export function getDatesBetween(startDate: Date, endDate: Date) {
	const dates = [];
	let currentDate = new Date(startDate);

	while (currentDate <= endDate) {
		const formated = format(new Date(currentDate), 'd LLLL yyyy');
		dates.push(formated);
		currentDate.setDate(currentDate.getDate() + 1);
	}

	dates.reverse();

	return dates;
}
