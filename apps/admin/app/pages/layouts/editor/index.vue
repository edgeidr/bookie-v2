<template>
	<div class="flex h-full gap-4">
		<USkeleton class="h-full min-w-20" />

		<div class="flex flex-1 flex-col gap-4">
			<USkeleton class="h-16 w-full" />
			<USkeleton class="h-full w-full" />
		</div>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		breadcrumb: [{ label: "Layouts", to: "/layouts" }, { label: "Editor" }],
	});
</script>
