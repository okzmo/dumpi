<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<style lang="postcss">
	:global(body) {
		@apply bg-zinc-925 text-zinc-50;
		overflow: hidden;
	}
</style>
