<script lang=ts>
  import { getContext } from 'svelte'
  import Accordion from '$lib/Accordion.svelte'
  import Banner from '$lib/Banner.svelte'
  import Button from '$lib/Button.svelte'
  import Callout from '$lib/Callout.svelte'
  import Card from '$lib/Card.svelte'
  import Modal, { modalOpen, toggleModal } from '$lib/Modal.svelte'
  import Toast, { toastOpen, toggleToast } from '$lib/Toast.svelte'
  import Tooltip from '$lib/Tooltip.svelte'

  const handleClick = (msg:string) => {
      alert(msg);
    }
</script>

<svelte:head>
  <title>Components</title>
</svelte:head>

  ## Components

  <hr/>

  <!-- Accordion start -->
  <section id="accordion">

  <h3> Accordion </h3>

  An accordion should be used when a large amount of information needs to be displayed on a single page. The accordian is built to parse an array of object, each containing a title and a content array of [Portable Text](https://github.com/portabletext/portabletext) blocks. 

  #### Component

  <Accordion />

  #### Props

  | Prop        | Type                   | Default   |
  |-------------|------------------------|-----------|
  | multiselect | boolean                | false     |
  | data        | AccordianContentItem[] | undefined |

  #### Usage

  ```svelte
  <script>
    import { Accordion } from '@hennepin-tech/htc-svelte'
    import { client } from 'sanityClient'

    let accordionData = []

    onMount(async () => {
      const res = await client.fetch(/* a groq query for accordion data*/)
      accordionData = await res.json()
    })
  </script>

  <Accordion 
    props={{
      multiselect: true
      data: accordionData
    }}
  />
  ```
  </section>
  <!-- Accordion end -->

  <hr/>
  
  <!-- Banner start -->
  <section id="banner">

  <h3> Banner </h3>

  The banner is placed at the very top of the homepage when an urgent message needs to be communicated to users & stakeholders.

  #### Component

  <Banner />

  #### Props

  | Prop    | Type   | Default                                                       |
  |---------|--------|---------------------------------------------------------------|
  | message | string | HTC is closed due to inclement weather - click here for info. |
  | link    | string | #                                                             |

  #### Usage

  ```svelte
  <script>
    import { Banner } from '@hennepin-tech/htc-svelte'

    let message = 'This is the message!'
    let link = 'https://google.com'
  </script>

  <Banner props={{ message, link }}/>
  ```
  </section>
  <!-- Banner end -->

  <hr/>

  <!-- Button start -->
  <section id="button">
  
  <h3> Button </h3>

  Buttons have a variety of uses, and therefore require a large number of props to function in a given use case. Here are some guidelines for this component...
  
  1. Outline buttons should only be used on dark backgrounds.
  2. All 's' and 'xs' sixed buttons should be outline buttons on dark backgrounds to ensure an accessible contrast ratio
  3. Svelte event directives (on:click, on:mouseover, on:mouseenter, on:mouseleave, & on:focus) are passed down to the child button/anchor element


  #### Component

  <Button props={{
      behavior: 'link',
      layout: 'inline',
      outline: false,
      size: 'm',
      text: 'Go Home',
      type: 'primary',
      url: 'https://hennepintech.edu',
    }}
  />

<div style="padding: 1.2rem; background-color: var(--gray-700); display: inline-block;">
  <Button props={{
      behavior: 'button',
      layout: 'inline',
      outline: true,
      size: 'm',
      text: 'Alert me!',
      type: 'primary'
    }} 
    on:click={() => handleClick('You clicked the button!')}
  />
</div>

  <Button props={{
      behavior: 'button',
      layout: 'inline',
      outline: false,
      size: 'm',
      text: 'Submit',
      type: 'success'
    }}
    on:click={() => handleClick('Successfully submitted!')}
  />


  #### Props

  | Prop     | Type                                | Default      |
  |----------|-------------------------------------|--------------|
  | behavior | link, button                        | link         |
  | layout   | block, inline                       | block        |
  | outline  | boolean                             | false        |
  | size     | xs, s, m, l                         | m            |
  | text     | string                              | 'Learn More' |
  | type     | primary, secondary, success, danger | 'primary'    |
  | url      | string                              | '#'          |

  #### Usage

  Using as a link
  
  ```svelte
  <script>
    import { Button } from '@hennepin-tech/htc-svelte'

    let buttonProps = {
      behavior: 'link',
      layout: 'inline',
      outline: false,
      size: 'm',
      text: 'Go Home',
      url: 'https://hennepintech.edu',
      type: 'primary'
    }
  </script>

  <Button props={buttonProps}/>
  ```

  Using as a button

  ```svelte
  <script>
    import { Button } from '@hennepin-tech/htc-svelte'

    let buttonProps = {
      behavior: 'button',
      layout: 'block',
      outline: true,
      size: 'm',
      text: 'Alert me!',
      type: 'secondary'
    }

    const handleClick = () => {
      alert('You clicked the button!');
    }
  </script>

  <Button props={buttonProps} on:click={handleClick}/>
  ```
  </section>
  <!-- Button end -->

  <hr/>

  <!-- Callout start -->
  <section id="callout">

  <h3> Callout </h3>

  #### Component

  <Callout props={{ 
    image: 'https://hennepintech.edu/_images/home/1-500x500-ONLINE.jpg',
    imageAlt: 'A glasses wearing student, sitting in front of their computer, smiling.',
    path: '/',
    title: 'Learn More'
  }}/>

  #### Props

  | Prop     | Type   | Default                                                      |
  |----------|--------|--------------------------------------------------------------|
  | image    | string | 'https://hennepintech.edu/_images/home/1-500x500-ONLINE.jpg' |
  | imageAlt | string | undefined                                                    |
  | path     | string | '/'                                                          |
  | title    | string | 'Learn More'                                                 |

  #### Usage

  ```svelte
  <script>
    import { Callout } from '@hennepin-tech/htc-svelte'

    let calloutProps = {
      // A URL string
      image: 'https://hennepintech.edu/_images/home/1-500x500-ONLINE.jpg',
      // Alternative text is always required!
      imageAlt: 'A glasses wearing student, sitting in front of their computer, smiling.',
      // Either a local path in the Svelte app, or an external URL
      path: '/',
      title: 'Learn More'
    }

  </script>

  <Callout props={calloutProps}/>
  ```
  </section>
  <!-- Callout end -->

  <hr/>

  <!-- Card start -->
  <section id="card">
  
  <h3> Card </h3>

  #### Component

  <Card props={{
    date: 'Sun. Sept 12th, 2021',
    desc: 'a description of the article',
    image: 'https://hennepintech.edu/_images/academic-programs/building-and-construction/carpentry/Carpentry_banner3.jpg',
    imageAlt: 'A wide shot of the carpentry shop at HTC',
    path: '/',
    title: 'Card Title'
  }}/>

  #### Props

  | Prop     | Type   | Default      |
  |----------|--------|--------------|
  | date     | string | undefined    |
  | desc     | string | ''           |
  | image    | string | undefined    |
  | imageAlt | string | undefined    |
  | path     | string | '/'          |
  | title    | string | 'Learn More' |

  #### Usage

  ```svelte
  <script>
    import { Card } from '@hennepin-tech/htc-svelte'

    let cardProps = {
      date: 'Sun. Sept 12th, 2021',
      desc: 'a description of the article',
      // A URL string
      image: 'https://hennepintech.edu/_images/academic-programs/building-and-construction/carpentry/Carpentry_banner3.jpg',
      // Alternative text is always required!
      imageAlt: 'A wide shot of the carpentry shop at HTC',
      // Either a local path in the Svelte app, or an external URL
      path: '/',
      title: 'Card Title'
    }

  </script>

  <Card props={cardProps}/>
  ```
  </section>
  <!-- Card end -->

  <hr/>

  <!-- Modal start -->
  <section id="modal">
  
  <h3> Modal </h3>

  The Modal component uses Svelte's named slots to make composing modals really simple, and Svelte's stores to handle the components state. To have the modal appear on page load, set the onMount prop to true. 
  
  The library currently only supports one modal per page. 

  #### Component

  <Modal props={{ onMount: false, theme: 'black', type: 'header'}}>
    <h2 slot="heading">The Heading</h2>
    <p slot="content">This is a popup!</p>
    <Button slot="trigger" props={{
      behavior: 'button',
      layout: 'inline',
      outline: false,
      size: 'm',
      text: 'Open Modal',
      type: 'primary'
    }} on:click={() => toggleModal($modalOpen)}/>
  </Modal>

  #### Props

  | Prop     | Type                 | Default  |
  |----------|----------------------|----------|
  | onMount  | boolean              | false    |
  | theme    | black, blue          | black    |
  | type     | simple, header, form | header   |

  #### Slots

  | Slot     | Use With Type | HTML or Component | Description                                      |
  |----------|---------------|-------------------|--------------------------------------------------|
  | trigger  | any           | Button, button    | Use when the user opens the modal using a button |
  | heading  | header        | h2, h3            | Heading text                                     |
  | content  | any           | div, p            | Holds all other content for a modal              |


  #### Usage

  ```svelte
  <script>
    import { Button, Modal, toggleModal, modalOpen } from '@hennepin-tech/htc-svelte'

    let modalProps = {
      onMount: true,
      theme: 'black',
      type: 'header'
    }

    let buttonProps = {
      behavior: 'button',
      layout: 'block',
      outline: false,
      size: 'm',
      text: 'Open Modal',
      type: 'primary'
    }
  </script>

  <Modal props={modalProps}>
    <h2 slot="heading">The Heading</h2>
    <p slot="content">This is a popup!</p>
    <Button slot="trigger" props={buttonProps} on:click={() => toggleModal($modalOpen)}/>
  </Modal>
  ```
  </section>
  <!-- Modal end -->

  <hr/>

  <!-- Toast start -->
  <section id="toast">
  
  <h3>Toast</h3>

  #### Component

  <Button 
    props={{ 
      behavior: 'button',
      layout: 'block',
      size: 'm',
      text: 'Open Toast',
      type: 'primary'
    }} 
    on:click={() => toggleToast($toastOpen)}
  />
  <Toast props={{
    message: 'A Sample Message',
    position: 'right',
    type: 'primary'
  }}/>

  #### Props

  | Prop     | Type                                | Default          |
  |----------|-------------------------------------|------------------|
  | message  | string                              | A Sample Message |
  | position | left, center, right                 | right            |
  | type     | primary, secondary, success, danger | primary          |

  #### Usage

  ```svelte
  <script>
    import Toast, { toastOpen } from '@hennepin-tech/htc-svelte'

    let props = {
      message: 'A Sample Message',
      position: 'right',
      type: 'primary'
    }

    onMount(() => toastOpen.set(true))

  </script>

  <Toast {props}/>
  ```
  </section>
  <!-- Toast end -->

  <!-- Tooltip start -->
  <section id="tooltip">
  
  <h3>Tooltip</h3>

  #### Component

  <Tooltip 
    props={{
      content: 'Click this button to go to the homepage!',
      position: 'left'
    }} 
  >
    <Button 
      props={{ 
        behavior: 'link',
        layout: 'block',
        size: 'm',
        text: 'Hover for tooltip',
        type: 'primary',
        url: '/'
      }} 
    />
  </Tooltip>

  #### Props

  | Prop      | Type                     | Default        |
  |-----------|--------------------------|----------------|
  | content   | string                   | Toast Content! |
  | position  | left, right, top, bottom | top            |

  #### Usage

  ```svelte
  <script>
    import Tooltip from '@hennepin-tech/htc-svelte'

    let buttonProps = { 
        behavior: 'link',
        layout: 'block',
        size: 'm',
        text: 'Hover for tooltip',
        type: 'primary',
        url: '/'
      }

  </script>

  <Tooltip 
    props={{
      content: 'Click this button to go to the homepage!',
      position: 'top'
    }} 
  >
    <Button 
      props={buttonProps} 
    />
  <Tooltip/>
  ```
  </section>
  <!-- Tooltip end -->

  
