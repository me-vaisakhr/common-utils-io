/**
 * Gives percentage from value
 * @param value value to be converted to percentage
 * @param outOf maximum range
 * @param percentageIn default is 100
 * @returns percentage as number
 */
const getPercentageFromValue = (
  value: number,
  outOf: number,
  percentageIn: number = 100
) => (value / outOf) * percentageIn;

/**
 * Gives value from percentage
 * @param percent percentage value to be converted to value
 * @param outOf maximum range 
 * @param percentageIn default is 100
 * @returns value as number
 */
const getValueFromPercentage = (
  percent: number,
  outOf: number,
  percentageIn: number = 100
) => (percent * outOf) / percentageIn;

export { getPercentageFromValue, getValueFromPercentage };
