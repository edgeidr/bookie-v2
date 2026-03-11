<template>
	<UTabs
		:items="tabItems"
		:defaultValue="tabItems.at(0)?.value"
		orientation="vertical"
		:ui="{
			root: 'h-full items-start gap-4',
			list: 'min-w-3xs',
			trigger: 'w-full',
			trailingBadge: 'ml-auto',
			content: 'h-full',
		}">
		<template #content="{ item }">
			<div class="border-muted overflow-clip rounded-md border">
				<div class="border-accented flex justify-end border-b px-4 py-3.5">
					<UDropdownMenu
						:items="
							tableRef?.tableApi
								?.getAllColumns()
								.filter((column) => column.getCanHide())
								.map((column) => ({
									label: column.columnDef.header,
									type: 'checkbox' as const,
									checked: column.getIsVisible(),
									onUpdateChecked: (checked: boolean) => {
										tableRef?.tableApi
											?.getColumn(column.id)
											?.toggleVisibility(!!checked);
									},
									onSelect: (e: Event) => {
										e.preventDefault();
									},
								}))
						"
						:content="{ align: 'end' }">
						<UButton
							label="Columns"
							color="neutral"
							variant="outline"
							trailing-icon="i-lucide-chevron-down" />
					</UDropdownMenu>
				</div>

				<UContextMenu :items="contextMenuItems">
					<UTable
						ref="tableRef"
						v-model:columnVisibility="columnVisibility"
						:data="getLayouts(item.value as number)"
						:columns
						@contextmenu="onContextMenu"
						@hover=""
						sticky
						:ui="{ root: 'w-full', base: 'min-w-full overflow-clip' }">
						<template #statusId-cell="{ getValue }">
							<UBadge
								variant="subtle"
								:color="getStatusInfo(getValue() as number).color"
								:label="getStatusInfo(getValue() as number).label" />
						</template>

						<template #action-cell="{ row }">
							<UDropdownMenu :items="getRowActions(row)">
								<UButton
									icon="hugeicons:more-vertical"
									color="neutral"
									variant="ghost" />
							</UDropdownMenu>
						</template>
					</UTable>
				</UContextMenu>
			</div>
		</template>
	</UTabs>
</template>

<script setup lang="ts">
	import type {
		TabsItem,
		TableColumn,
		TableRow,
		DropdownMenuItem,
		BadgeProps,
		ContextMenuItem,
	} from "@nuxt/ui";

	definePageMeta({
		title: "Layouts",
	});

	const { locations } = useLocations();
	const { layouts } = useLayouts();
	const { layoutStatuses } = useLayoutStatuses();
	const contextMenuItems = ref<ContextMenuItem[]>([]);
	const tableRef = useTemplateRef("tableRef");
	const columnVisibility = ref({});

	const columns: TableColumn<any>[] = [
		{
			accessorKey: "uuid",
			header: "UUID",
		},
		{
			accessorKey: "name",
			header: "Name",
		},
		{
			accessorKey: "description",
			header: "Description",
		},
		{
			accessorKey: "statusId",
			header: "Status",
		},
		{
			accessorKey: "updatedAt",
			header: "Last Updated",
		},
		{
			id: "action",
			enableHiding: false,
			meta: { class: { td: "text-right" } },
		},
	];

	const tabItems = computed<TabsItem[]>(() => {
		return locations.map((location) => ({
			value: location.id,
			label: location.name,
			badge: location.layoutsCount || undefined,
		}));
	});

	const getLayouts = (locationId: number) => {
		return layouts.filter((layout) => layout.locationId === locationId);
	};

	const getRowActions = (row: TableRow<any>): DropdownMenuItem[] => {
		const statuses: DropdownMenuItem[] = layoutStatuses
			.filter((layoutStatus) => layoutStatus.id !== row.getValue("statusId"))
			.map((layoutStatus) => ({
				label: layoutStatus.name,
			}));

		return [
			{ label: "Edit" },
			{
				label: "Set Status",
				children: statuses,
			},
			{ label: "Duplicate" },
			{ label: "Delete", color: "error" },
		];
	};

	const getStatusInfo = (statusId: number) => {
		const status = layoutStatuses.find((layoutStatus) => layoutStatus.id === statusId);
		const color: BadgeProps["color"] = (status?.color as BadgeProps["color"]) ?? "neutral";
		const label = status?.name;

		return { color, label };
	};

	const onContextMenu = (e: Event, row: TableRow<any>) => {
		contextMenuItems.value = getRowActions(row);
	};
</script>
