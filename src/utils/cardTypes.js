export const DEFAULT_CVC_LENGTH = 3;
export const DEFAULT_ZIP_LENGTH = 5;
export const DEFAULT_CARD_FORMAT = /(\d{1,4})/g;
export const CARD_TYPES = [
	{
		displayName: "Visa",
		type: "visa",
		format: DEFAULT_CARD_FORMAT,
		startPattern: /^4/,
		gaps: [4, 8, 12],
		lengths: [16, 18, 19],
		code: {
			name: "CVV",
			length: 3,
		},
	},
	{
		displayName: "Mastercard",
		type: "mastercard",
		format: DEFAULT_CARD_FORMAT,
		startPattern: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
		gaps: [4, 8, 12],
		lengths: [16],
		code: {
			name: "CVC",
			length: 3,
		},
	},
	{
		displayName: "American Express",
		type: "amex",
		format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
		startPattern: /^3[47]/,
		gaps: [4, 10],
		lengths: [15],
		code: {
			name: "CID",
			length: 4,
		},
	},
	{
		displayName: "Diners Club",
		type: "dinersclub",
		format: DEFAULT_CARD_FORMAT,
		startPattern: /^(36|38|30[0-5])/,
		gaps: [4, 10],
		lengths: [14, 16, 19],
		code: {
			name: "CVV",
			length: 3,
		},
	},
];

export const getCardTypeByValue = (value) =>
	CARD_TYPES.filter((cardType) => cardType.startPattern.test(value))[0];
export const getCardTypeByType = (type) =>
	CARD_TYPES.filter((cardType) => cardType.type === type)[0];
