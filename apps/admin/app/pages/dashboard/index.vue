<template>
	<div class="flex gap-6">
		<USkeleton class="h-40 w-full" />
		<USkeleton class="h-40 w-full" />
		<USkeleton class="h-40 w-full" />
		<USkeleton class="h-40 w-full" />
	</div>

	<div class="flex h-full gap-6">
		<USkeleton class="h-full w-2/3" />
		<USkeleton class="h-full w-1/3" />
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		path: "/",
		breadcrumb: [{ label: "Dashboard" }],
	});
</script>
