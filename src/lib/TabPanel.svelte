<script lang=ts>
	import { getContext } from 'svelte';
	import { fade } from 'svelte/transition'
	import { TABS } from './Tabs.svelte';

	const panel = {};
	const { registerPanel, selectedPanel } = getContext(TABS);

	let selected

	$:($selectedPanel === panel ? selected = true : selected = false)

	registerPanel(panel);
</script>

<div class="tab__panel" class:selected={selected} >
	{#if $selectedPanel === panel}
		<slot></slot>
	{/if}
</div>

<style>
	.tab__panel.selected{
		border: 2px solid var(--text-color);
		border-radius: 0 var(--radius) var(--radius) var(--radius);
		padding: 1.2rem;
	}
</style>
