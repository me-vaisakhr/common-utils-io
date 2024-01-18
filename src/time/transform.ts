import { prependZero } from "../numerics/transform";

/**
 * Simple time formatting function.
 * @param timeInSeconds time in seconds to be formatted
 * @returns string and format will be HH:MM:SS
 */
export const formatSecondsToHHMMSS = (timeInSeconds: number):string => {
	const hours: number = Math.floor(timeInSeconds / 3600);
	const minutes: number = Math.floor((timeInSeconds - hours * 3600) / 60);
	const seconds: number = timeInSeconds - hours * 3600 - minutes * 60;

	return (
		`${prependZero(hours, hours < 10)}:${prependZero(minutes, minutes < 10)}:${prependZero(seconds, seconds < 10)}`);
};
