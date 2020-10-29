import Moment from "moment";

export function calcDeadlinePercentage(startDate: string, endDate: string): { max: number, value: number } {
	const maxMinutes = Moment(endDate).diff(startDate, "minutes")

	let currentValue = maxMinutes - Moment(endDate).diff(Moment(), "minutes")
	if (currentValue > maxMinutes)
		currentValue = maxMinutes

	return { max: maxMinutes, value: currentValue }
}

export function calcTimeLeft(endDate: string): { months: number, weeks: number, days: number, hours: number, minutes: number, seconds: number } {

	const SECONDS_IN_A_MONTH = 2628000
	const SECONDS_IN_A_WEEK = 604800
	const SECONDS_IN_A_DAY = 86400
	const SECONDS_IN_AN_HOUR = 3600

	const secondsLeft = Moment(endDate).diff(Moment(), "seconds") // We multiply with 60 to get seconds
	if (secondsLeft < 0) {
		return {
			months: 0,
			weeks: 0,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}

	const months = Math.floor(secondsLeft / SECONDS_IN_A_MONTH)
	let timeleft = Math.floor(secondsLeft % SECONDS_IN_A_MONTH)
	const weeks = Math.floor(timeleft / SECONDS_IN_A_WEEK)
	timeleft = Math.floor(timeleft % SECONDS_IN_A_WEEK)
	const days = Math.floor(timeleft / SECONDS_IN_A_DAY)
	timeleft = Math.floor(timeleft % SECONDS_IN_A_DAY)
	const hours = Math.floor(timeleft / SECONDS_IN_AN_HOUR)
	timeleft = Math.floor(timeleft % SECONDS_IN_AN_HOUR)
	const minutes = Math.floor(timeleft / 60)
	const seconds = Math.floor(timeleft % 60)
	
	return {
		months,
		weeks,
		days,
		hours,
		minutes,
		seconds
	}
}