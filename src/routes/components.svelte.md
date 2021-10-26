<script lang=ts>
  import { getContext } from 'svelte'
  import Accordion from '$lib/Accordion.svelte'
  import Banner from '$lib/Banner.svelte'
  import Button from '$lib/Button.svelte'
  import Callout from '$lib/Callout.svelte'
  import Modal, { modalOpen, toggleModal } from '$lib/Modal.svelte'
  import Toast, { toastOpen, toggleToast } from '$lib/Toast.svelte'

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

  <!-- Modal start -->
  <section id="modal">
  
  <h3> Modal </h3>

  The Modal component uses Svelte's named slots to make composing modals really simple, and Svelte's stores to handle the components state. To have the modal appear on page load, set the onMount prop to true. 
  
  The library currently only supports one modal per page. 

  #### Component

  <Modal props={{ onMount: false, theme: 'black', type: 'simple'}}>
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

  <Modal props={{ onMount: false, theme: 'black', type: 'header'}}>
    <h2 slot="heading">The Heading</h2>
    <p slot="content">This is a popup!</p>
    <Button slot="trigger" props={{
      behavior: 'button',
      layout: 'inline',
      outline: false,
      size: 'm',
      text: 'Open Simple Modal',
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

<style>
  table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 1.5em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  table thead tr {
    background-color: var(--blue);
    color: #ffffff;
    text-align: left;
  }
  th, td {
    padding: 12px 15px;
  }
  table tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  table tbody tr:nth-of-type(even) {
      background-color: var(--gray-100);
  }
  table tbody tr:last-of-type {
      border-bottom: 2px solid var(--blue);
  }

  :global(ol){
    font-size: 1.2rem;
    margin-left: 2rem;
  }
</style>