<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>



<button class:selected="{$selectedTab === tab}" on:click="{() => selectTab(tab)}">
	<slot></slot>
</button>

<style>
	button {
		background: none;
    border: 2px solid var(--text-color);
    border-radius: var(--radius) var(--radius) 0 0;
    margin-bottom: -2px;
		color: var(--gray-300);
    font-size: 1.2rem;
	}

	button:hover {
		cursor: pointer;
	}

  button:focus {
    background-color: var(--gray-100);
    color: var(--black);
  }

  button:not(:disabled):active {
    background-color: transparent;
  }
	
	.selected {
		border-bottom: 0px solid var(--white);
		color: var(--text-color);
		background-color: var(--white);

	}

	.selected:hover {
		cursor: unset;
	}
</style>