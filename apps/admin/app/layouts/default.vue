<template>
	<UMain>
		<UDashboardGroup>
			<UDashboardSidebar collapsible :ui="{ footer: 'border-t border-default' }">
				<template #header="{ collapsed }">
					<template v-if="!collapsed">
						<UIcon name="logos:nuxt-icon" />
						<h2 class="text-lg font-bold">Bookie</h2>
					</template>

					<UDashboardSidebarCollapse class="ml-auto" />
				</template>

				<template #default="{ collapsed }">
					<UNavigationMenu
						:items="sidebarItems"
						orientation="vertical"
						:collapsed
						tooltip
						:ui="{ link: [collapsed ? undefined : 'px-3', 'py-2'] }" />
				</template>

				<template #footer="{ collapsed }">
					<UDropdownMenu :items="profileMenuItems">
						<UButton
							:avatar="{
								loading: 'lazy',
								alt: 'Ian Del Rosario',
							}"
							:label="collapsed ? undefined : 'Ian Del Rosario'"
							color="neutral"
							variant="ghost"
							class="w-full"
							size="lg"
							:block="collapsed" />
					</UDropdownMenu>
				</template>
			</UDashboardSidebar>

			<UDashboardPanel>
				<template #header>
					<UDashboardNavbar> </UDashboardNavbar>
				</template>

				<template #body>
					<slot />
				</template>
			</UDashboardPanel>
		</UDashboardGroup>
	</UMain>

	<UFooter />
</template>

<script setup lang="ts">
	import type { NavigationMenuItem, DropdownMenuItem } from "@nuxt/ui";

	const sidebarItems: NavigationMenuItem[][] = [
		[
			{
				label: "Dashboard",
				icon: "hugeicons:dashboard-square-02",
			},
			{
				label: "Layouts",
				icon: "hugeicons:maps-editing",
			},
			{
				label: "Bookings",
				icon: "hugeicons:calendar-04",
				badge: 4,
			},
		],
		[
			{
				label: "Users",
				icon: "hugeicons:user-group-02",
			},
			{
				label: "Locations",
				icon: "hugeicons:location-01",
			},
			{
				label: "Statuses",
				icon: "hugeicons:status",
				children: [
					{ label: "Booking Status" },
					{ label: "Layout Status" },
					{ label: "User Status" },
				],
			},
		],
	];

	const profileMenuItems: DropdownMenuItem[][] = [
		[
			{
				label: "Settings",
				icon: "hugeicons:settings-01",
			},
			{
				label: "Profile",
				icon: "hugeicons:user-02",
			},
			{
				label: "Switch App",
				icon: "hugeicons:dashboard-circle",
				children: [
					{ label: "A&U", to: "https://au.boldrtech.com" },
					{ label: "SeatMate", to: "https://seatmate.boldrtech.com" },
					{ label: "BEAT", to: "https://beat.boldrtech.com" },
				],
			},
		],
		[
			{
				label: "Log Out",
				icon: "hugeicons:login-02",
				color: "error",
			},
		],
	];
</script>
