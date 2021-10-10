<script lang=ts>
  import type { AccordianProps } from "$types/Accordian";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  
  export let multiselect:boolean = false;
  // export let data:AccordianProps = [
  //   {
  //     title: 'title',
  //     content: {}
  //   }
  // ]
  
  const items = writable({});

  setContext("Accordion", {
    items,
    add: (item) => {
      items.update((_) => ({ ..._, [item.id]: item.expanded }));
    },
    remove: (item) => {
      items.update((_) => {
        const _items = { ..._ };
        delete _items[item.id];
        return _items;
      });
    },
    toggle: (item) => {
      items.update((_) => {
        if (!multiselect) {
          Object.keys(_).forEach((id) => (_[id] = false));
        }
        return { ..._, [item.id]: item.expanded };
      });
    },
  });
</script>

<ul data-accordion {...$$restProps}>
  <slot />
</ul>