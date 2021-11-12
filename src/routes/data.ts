export type SidebarItem = {
  anchor: string,
  description?: {text: string, snippet: any},
  id: number,
  renderedComponent?: string,
  text: string,
  type: string,
  children?: SidebarItem[],
  props?: Object,

}

export const data:SidebarItem[] = [
  {
    anchor: 'components',
    id: 1,
    text: 'Components',
    type: 'parent',
    children: [
      {
        anchor: 'accordion',
        id: 1,
        renderedComponent: 'Accordion',
        text: 'Accordion',
        type: 'child'
      },
      // {
      //   anchor: 'article',
      //   id: 2,
      //   renderedComponent: 'Article',
      //   text: 'Article',
      //   type: 'child'
      // },
      {
        anchor: 'banner',
        id: 3,
        renderedComponent: 'Banner',
        text: 'Banner',
        type: 'child',
      },
      {
        anchor: 'button',
        id: 4,
        renderedComponent: 'Button',
        text: 'Button',
        type: 'child',
        props: {
          text: 'Button',
          behavior: 'button',
          url: '#',
          type: 'secondary'
        }
      },
      {
        anchor: 'callout',
        id: 5,
        renderedComponent: 'Callout',
        text: 'Callout',
        type: 'child',
      },
      {
        anchor: 'card',
        id: 6,
        renderedComponent: 'Card',
        text: 'Card',
        type: 'child',
      },
      
      // {
      //   anchor: 'form',
      //   id: 7,
      //   renderedComponent: 'Form',
      //   text: 'Form',
      //   type: 'child',
      // },
      {
        anchor: 'modal',
        id: 8,
        renderedComponent: 'Modal',
        text: 'Modal',
        type: 'child',
      },
      // {
      //   anchor: 'tabs',
      //   id: 10,
      //   renderedComponent: 'Tabs',
      //   text: 'Tabs',
      //   type: 'child',
      // },
      {
        anchor: 'toast',
        id: 11,
        renderedComponent: 'Toast',
        text: 'Toast',
        type: 'child',
      },
      {
        anchor: 'tooltip',
        id: 12,
        renderedComponent: 'Tooltip',
        text: 'Tooltip',
        type: 'child',
      },
    ]
  },
  {
    anchor: 'stores',
    id: 2,
    text: 'Stores',
    type: 'parent',
    children: [
      {
        anchor: 'innerWidth',
        description: {
          text: "In the global __layout.svelte component, simply import the store, create some local state that is bound to the innerWidth, and write a reactive statement that sets the local state to the store.",
          snippet: new String(`
            <script lang=ts>
              import { innerWidth } from "htc-svelte/stores"
              let localWidth  
              $: innerWidth.set(localWidth)
            </script>
            
            <svelte:window bind:innerWidth={localWidth}/>
          `)
        },
        id: 1,
        text: 'Inner Width',
        type: 'child',
      }
    ]
  },
  {
    anchor: 'actions',
    id: 3,
    text: 'Actions',
    type: 'parent',
    children: [
      {
        anchor: 'inView',
        description: {
          text: "inView",
          snippet: new String(`
            <script lang=ts>
              import { inView } from "htc-svelte/actions"
              let localWidth  
              $: innerWidth.set(localWidth)
            </script>
            
            <svelte:window bind:innerWidth={localWidth}/>
          `)
        },
        id: 1,
        text: 'inView',
        type: 'child',
      }
    ]
  },
]