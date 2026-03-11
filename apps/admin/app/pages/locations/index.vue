<template>
	<div class="flex h-full flex-col gap-6">
		<USkeleton class="h-28 w-full" />
		<USkeleton class="h-full w-full" />
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		breadcrumb: [{ label: "Locations" }],
	});
</script>
