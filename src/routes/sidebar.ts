// const propTypes = import.meta.globEager('../types/*.ts')

// console.log(Array.from(Object.values(propTypes)))
// console.log(typeof(propTypes))

export type SidebarItem = {
  anchor: string,
  id: number,
  renderedComponent?: string,
  text: string,
  type: string,
  children?: SidebarItem[],
  // props?: Object,

}

export const sidebar:SidebarItem[] = [
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
      {
        anchor: 'article',
        id: 2,
        renderedComponent: 'Article',
        text: 'Article',
        type: 'child'
      },
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
        // props: {

        // }
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
      
      {
        anchor: 'form',
        id: 7,
        renderedComponent: 'Form',
        text: 'Form',
        type: 'child',
      },
      {
        anchor: 'modal',
        id: 8,
        renderedComponent: 'Modal',
        text: 'Modal',
        type: 'child',
      },
      {
        anchor: 'navigation',
        id: 9,
        renderedComponent: 'Navigation',
        text: 'Navigation',
        type: 'child',
      },
      {
        anchor: 'toast',
        id: 10,
        renderedComponent: 'Toast',
        text: 'Toast',
        type: 'child',
      },
      {
        anchor: 'tooltip',
        id: 11,
        renderedComponent: 'Tooltip',
        text: 'Tooltip',
        type: 'child',
      },
    ]
  }
]