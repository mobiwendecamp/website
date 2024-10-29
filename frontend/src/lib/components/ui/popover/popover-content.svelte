<script lang="ts">
	import { Popover as PopoverPrimitive } from "bits-ui";
	import { cn, flyAndScale } from "$lib/utils.js";

	type $$Props = PopoverPrimitive.ContentProps;
	let className: $$Props["class"] = undefined;
	export let transition: $$Props["transition"] = flyAndScale;
	export let transitionConfig: $$Props["transitionConfig"] = undefined;
	export { className as class };
</script>

<PopoverPrimitive.Content
	{transition}
	{transitionConfig}
	class={cn(
		"bg-popover/80 backdrop-blur text-popover-foreground mt-8 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5",
		className
	)}
	{...$$restProps}
>
	<slot />
</PopoverPrimitive.Content>
