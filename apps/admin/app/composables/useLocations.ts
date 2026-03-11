export const useLocations = () => {
	const locations = [
		{ id: 1, name: "Manila", countryCode: "PH", layoutsCount: 2 },
		{ id: 2, name: "Tacloban", countryCode: "PH", layoutsCount: 2 },
		{ id: 3, name: "Mexico", countryCode: "MX", layoutsCount: 1 },
		{ id: 4, name: "South Africa", countryCode: "ZA", layoutsCount: 3 },
		{ id: 5, name: "Canada", countryCode: "CA", layoutsCount: 0 },
		{ id: 6, name: "US", countryCode: "US", layoutsCount: 2 },
	];

	return { locations };
};
