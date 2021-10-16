<script lang=ts>
  import { getContext } from 'svelte'
  import Accordion from '$lib/Accordion.svelte'
  import Banner from '$lib/Banner.svelte'
  import Button from '$lib/Button.svelte'
  import Modal, { modalOpen, toggle } from '$lib/Modal.svelte'
  // import { modal } from '$lib/stores/modal'

  // const { open } = getContext('modal')
  // let open = false
  
  // $: modal.set(open)

  // $: console.log($modal)
</script>

  ## Components

  <hr/>

  <!-- Accordion start -->
  ### Accordion

  An accordion should be used when a large amount of information needs to be displayed on a single page. The accordian is built to parse an array of object, each containing a title and a content array of [Portable Text](https://github.com/portabletext/portabletext) blocks. 

  #### Props

  | Prop        | Type                   | Default   |
  |-------------|------------------------|-----------|
  | multiselect | boolean                | false     |
  | data        | AccordianContentItem[] | undefined |

  #### Usage

  ```svelte
  <script>
    import Accordion from 'htc-svelte'
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

  #### Component

  <Accordion />
  <!-- Accordion end -->

  <!-- Banner start -->
  ### Banner

  The banner is placed at the very top of the homepage when an urgent message needs to be communicated to users & stakeholders.

  #### Props

  | Prop    | Type   | Default                                                       |
  |---------|--------|---------------------------------------------------------------|
  | message | string | HTC is closed due to incliment weather - click here for info. |
  | link    | string | #                                                             |

  #### Usage

  ```svelte
  <script>
    import Banner from 'htc-svelte'

    let message = 'This is the message!'
    let link = 'https://google.com'
  </script>

  <Banner props={{ message, link }}/>
  ```

  #### Component

  <Banner />
  <!-- Banner end -->

  <!-- Button start -->
  ### Button

  The banner is placed at the very top of the homepage when an urgent message needs to be communicated to users & stakeholders.

  #### Props

  | Prop     | Type                                | Default      |
  |----------|-------------------------------------|--------------|
  | behavior | link, button                        | link         |
  | text     | string                              | 'Learn More' |
  | type     | primary, secondary, success, danger | 'primary'    |
  | url      | string                              | '#'          |

  #### Usage

  ```svelte
  <script>
    import Button from 'htc-svelte'

    let props = {
      behavior: 'link',
      text: 'Go Home',
      url: 'https://hennepintech.edu',
      type: 'primary'
    }
  </script>

  <Button {props}/>
  ```

  #### Component

  <Button props={{
      behavior: 'link',
      text: 'Go Home',
      url: 'https://hennepintech.edu',
      type: 'primary'
    }}/>
  <!-- Button end -->


  <!-- Modal start -->
  ### Modal

  #### Props

  | Prop     | Type                                | Default      |
  |----------|-------------------------------------|--------------|
  | behavior | link, button                        | link         |
  | text     | string                              | 'Learn More' |
  | type     | primary, secondary, success, danger | 'primary'    |
  | url      | string                              | '#'          |

  #### Usage

  ```svelte
  <script>
    import Button, Modal, { toggle, modalOpen} from 'htc-svelte'

    let buttonProps = {
      behavior: 'button',
      text: 'Open Modal',
      type: 'primary'
    }
  </script>

  <Modal >
    <h2 slot="heading">The Heading</h2>
    <p slot="content">This is a popup!</p>
    <Button slot="trigger" props={buttonProps} on:click={() => toggle($modalOpen)}/>
  </Modal>
  ```

  #### Component

  <Modal >
    <h2 slot="heading">The Heading</h2>
    <p slot="content">This is a popup!</p>
    <Button slot="trigger" props={{
      behavior: 'button',
      text: 'Open Modal',
      type: 'primary'
    }} on:click={() => toggle($modalOpen)}/>
  </Modal>
  
  <!-- Modal end -->

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

</style>