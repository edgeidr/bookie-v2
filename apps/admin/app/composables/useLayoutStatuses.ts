export const useLayoutStatuses = () => {
	const layoutStatuses = [
		{
			id: 1,
			name: "Active",
			color: "success",
			createdAt: "2026-03-01",
			updatedAt: "2026-03-01",
			deletedAt: null,
		},
		{
			id: 2,
			name: "Inctive",
			color: "error",
			createdAt: "2026-03-01",
			updatedAt: "2026-03-01",
			deletedAt: null,
		},
	];

	return { layoutStatuses };
};
