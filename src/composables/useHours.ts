import { ref } from "vue";
import { HOURS } from "../enums/hours";

export function useHours() {
	const hours = ref(HOURS);

	const semanticHours = () => hours.value.map(convertToSemanticHour);

	const convertToSemanticHour = (hour: string) =>
		hour.slice(0, hour.length > 3 ? 2 : 1) + ":" + hour.slice(-2);

	const compareHours = (hour: string, semanticHour: string) => semanticHour == convertToSemanticHour(hour);

	return {
		hours,
		semanticHours: semanticHours(),
		compareHours,
	};
}
