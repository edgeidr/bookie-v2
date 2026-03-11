import type { BreadcrumbItem } from "@nuxt/ui";

declare module "#app" {
	interface PageMeta {
		breadcrumb?: BreadcrumbItem[];
	}
}
