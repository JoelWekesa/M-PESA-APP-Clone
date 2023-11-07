const min = 1;
const max = 110000;
const randomNum = (Math.floor(Math.random() * (max - min + 1)) + min).toFixed(
	2
);

export const randomType = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

export const cashGen = () => {
	switch (randomType) {
		case 2:
			return '+' + randomNum;

		case 1:
			return '-' + randomNum;

		default:
			return '-' + randomNum;
	}
};
