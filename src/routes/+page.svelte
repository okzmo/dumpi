<script lang="ts">
	import { onMount } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let active = $state(false);
	let input = $state<HTMLInputElement | null>(null);

	onMount(() => {
		window.addEventListener('keydown', (e) => {
			if (e.metaKey && e.key === 'k') {
				active = !active;
			}
			if (e.key === 'Escape') {
				active = false;
			}
		});
	});

	$effect(() => {
		if (active) {
			input?.focus();
		} else {
			input?.blur();
		}
	});
</script>

<div class="flex h-screen flex-wrap gap-2 overflow-auto px-5 py-5">
	<div class="h-[375px] w-[284px] rounded-lg bg-zinc-500"></div>
	<div class="h-[375px] w-[284px] rounded-lg bg-zinc-500"></div>
	<div class="h-[375px] w-[284px] rounded-lg bg-zinc-500"></div>
	<div class="h-[375px] w-[284px] rounded-lg bg-zinc-500"></div>
	<div class="h-[375px] w-[284px] rounded-lg bg-zinc-500"></div>
	<div class="h-[375px] w-[284px] rounded-lg bg-zinc-500"></div>
	<div class="h-[375px] w-[284px] rounded-lg bg-zinc-500"></div>
	<div class="h-[375px] w-[284px] rounded-lg bg-zinc-500"></div>
	<div class="h-[375px] w-[284px] rounded-lg bg-zinc-500"></div>
	<div class="h-[375px] w-[284px] rounded-lg bg-zinc-500"></div>
	<div class="h-[375px] w-[284px] rounded-lg bg-zinc-500"></div>
	<div class="h-[375px] w-[284px] rounded-lg bg-zinc-500"></div>
	<div class="h-[375px] w-[284px] rounded-lg bg-zinc-500"></div>
	<div class="h-[375px] w-[284px] rounded-lg bg-zinc-500"></div>
	<div class="h-[375px] w-[284px] rounded-lg bg-zinc-500"></div>
</div>

{#if active}
	<input
		bind:this={input}
		transition:fly={{
			y: active ? 100 : 0,
			duration: active ? 125 : 75,
			delay: active ? 125 : 0,
			easing: expoOut
		}}
		placeholder="Search"
		class="fixed bottom-9 left-16 z-[20] w-[calc(100%-4rem*2)] border-none bg-transparent text-4xl italic text-zinc-50 placeholder:text-zinc-50/30 focus:shadow-none focus:outline-none focus:ring-transparent focus-visible:outline-none"
	/>
{/if}

<div
	class="decorations pointer-events-none fixed left-0 top-0 flex gap-x-[8px] rounded-br-[8px] border-b border-r border-zinc-50/30 bg-zinc-925 px-[8px] py-[8px]"
>
	<div class="h-[12px] w-[12px]"></div>
	<div class="h-[12px] w-[12px]"></div>
	<div class="h-[12px] w-[12px]"></div>
</div>

<div
	class="blur-menu top top-0 h-[500px] translate-y-[-500px] transition-transform duration-[350ms] ease-power2-in"
	class:active
>
	<div class="layer top-0"></div>
	<div class="layer top-0"></div>
	<div class="layer top-0"></div>
	<div class="layer top-0"></div>
	<div class="layer top-0"></div>
	<div class="layer top-0"></div>
</div>

<div
	class="blur-menu bottom bottom-0 h-[800px] translate-y-[800px] transition-transform duration-[350ms] ease-power2-in"
	class:active
>
	<div class="layer bottom-0"></div>
	<div class="layer bottom-0"></div>
	<div class="layer bottom-0"></div>
	<div class="layer bottom-0"></div>
	<div class="layer bottom-0"></div>
	<div class="layer bottom-0"></div>
</div>

<style>
	.blur-menu {
		position: fixed;
		left: 0;
		width: 100%;
		z-index: 10;
		pointer-events: none;
	}

	.blur-menu.bottom.active {
		transform: translateY(0%);
	}

	.blur-menu.top.active {
		transform: translateY(0%);
	}

	.layer {
		position: absolute;
		left: 0;
		width: 100%;
		background: rgba(18, 18, 22, 0.5);
		mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgb(0, 0, 0, 0) 100%);
		pointer-events: none;
	}

	.blur-menu.top .layer {
		mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgb(0, 0, 0, 0) 100%);
	}

	.layer:nth-child(1) {
		height: 10%;
		backdrop-filter: blur(128px);
	}

	.layer:nth-child(2) {
		height: 20%;
		backdrop-filter: blur(64px);
	}

	.layer:nth-child(3) {
		height: 30%;
		backdrop-filter: blur(32px);
	}

	.layer:nth-child(4) {
		height: 40%;
		backdrop-filter: blur(16px);
	}
	.layer:nth-child(5) {
		height: 50%;
		backdrop-filter: blur(8px);
	}
	.layer:nth-child(6) {
		height: 60%;
		backdrop-filter: blur(4px);
	}
</style>
