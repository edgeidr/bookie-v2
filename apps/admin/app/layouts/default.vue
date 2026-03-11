<template>
	<UMain>
		<UDashboardGroup>
			<UDashboardSidebar collapsible :ui="{ footer: 'border-t border-default' }">
				<template #header="{ collapsed }">
					<UIcon
						name="logos:nuxt-icon"
						:class="[collapsed ? 'mx-auto size-5' : undefined]" />
					<h2 v-if="!collapsed" class="text-lg font-bold">Bookie</h2>
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
					<UDashboardNavbar :title="$route.meta.title?.toString()">
						<template #leading>
							<UDashboardSidebarCollapse />
						</template>
					</UDashboardNavbar>
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
				to: "/",
			},
			{
				label: "Layouts",
				icon: "hugeicons:maps-editing",
				to: "/layouts",
			},
			{
				label: "Bookings",
				icon: "hugeicons:calendar-04",
				badge: 4,
				to: "/bookings",
			},
		],
		[
			{
				label: "Users",
				icon: "hugeicons:user-group-02",
				to: "/users",
			},
			{
				label: "Locations",
				icon: "hugeicons:location-01",
				to: "/locations",
			},
			{
				label: "Statuses",
				icon: "hugeicons:status",
				children: [
					{
						label: "Booking Status",
						to: "/booking-status",
					},
					{
						label: "Layout Status",
						to: "/layout-status",
					},
					{
						label: "User Status",
						to: "/user-status",
					},
				],
			},
		],
	];

	const profileMenuItems: DropdownMenuItem[][] = [
		[
			{
				label: "Settings",
				icon: "hugeicons:settings-01",
				to: "/settings",
			},
			{
				label: "Profile",
				icon: "hugeicons:user-02",
				to: "/profile",
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
