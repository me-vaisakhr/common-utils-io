/**
 * Function to convert a number with comma separated.
 * @param value, number to be transformed with comma separated 
 * @returns string, value with comma separated
 */
const numberWithCommaSeparated = (value: number):string =>
	value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

/**
 * Function to prepend zero in the beginning by conditions
 * @param value string or number where zero to be prepended
 * @param condition to check the whether to prepend zero or not
 * @returns string with 0 prepended or just the value passing if condition not satisfy
 */
const prependZero = (value: number | string, condition: boolean): string =>
	condition ? `0${value}` : `${value}`;

export { numberWithCommaSeparated, prependZero };
