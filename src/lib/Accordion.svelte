<script lang=ts>
  import type { AccordianProps } from "$types/Accordion";
  import AccordianItem from "./AccordianItem.svelte";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  
  export let props:AccordianProps = {
    multiselect: false,
    data: [
      {
        _key: "10868f36f2c1",
        _type: "accordionItem",
        content: [
          {
            _key: "17b23d5f6921",
            _type: "block",
            children: [
              {
                _key: "57869f52ed23",
                _type: "span",
                marks: [],
                text: "Some pt content. this is "
              },
              {
                _key: "1ed5672badda",
                _type: "span",
                marks: [
                  "strong"
                ],
                text: "bold"
              },
              {
                _key: "1ebcba7a79a4",
                _type: "span",
                marks: [],
                text: "."
              }
            ],
            markDefs: [],
            style: "normal"
          }
        ],
        title: "A title"
      },
      {
        _key: "fb77dc0f5c4c",
        _type: "accordionItem",
        content: [
          {
            _key: "ccfaa1b72939",
            _type: "block",
            children: [
              {
                _key: "4539c479b7f2",
                _type: "span",
                marks: [],
                text: "Some more pt content. This is "
              },
              {
                _key: "4049980af8fd",
                _type: "span",
                marks: [
                  "em"
                ],
                text: "italic"
              },
              {
                _key: "77455742e644",
                _type: "span",
                marks: [],
                text: "."
              }
            ],
            markDefs: [],
            style: "normal"
          }
        ],
        title: "another title"
      }
    ]
  }
  
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
        if (!props.multiselect) {
          Object.keys(_).forEach((id) => (_[id] = false));
        }
        return { ..._, [item.id]: item.expanded };
      });
    },
  });
</script>

<ul class="accordion" data-accordion {...$$restProps}>
  {#each props.data as {title, content}, index}
    <AccordianItem {title} {content} {index}/>
  {/each}
</ul>

<style>
  .accordion {
    margin-bottom: 40px;
  }
</style>