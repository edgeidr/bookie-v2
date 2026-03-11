<template>
	<div class="flex h-full gap-6">
		<USkeleton class="h-64 w-2xs" />
		<USkeleton class="h-full w-full" />
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		breadcrumb: [{ label: "Settings" }],
	});
</script>
