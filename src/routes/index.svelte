<script lang=ts context=module>
  export const ssr = false;
  import { sidebar } from './sidebar'
  import { mergeById } from '../utils/mergeById'
  import type { SidebarItem } from './sidebar';
  
  const getComponents = () => {
    let l = []
    for (const i of sidebar){
      if (i.anchor === 'components' && i.children){
        l.push(i.children)
      } else { continue }
    }
    return l.flat()
  }

  const getImports = async (arr) => {
    let imports = []
    for (const i of arr){
      console.log(i.renderedComponent)
      imports.push(
        {
          id: i.id,
          import: (await import(`../lib/${i.renderedComponent}.svelte`)).default
        }
      )
    }
    console.log(imports)
    return imports
  }

  export const load = async () => {
    const components = await getComponents();
    const imports = getImports(components);

    return {
      props: {
        components: await components,
        imports: await imports
      }
    }
  }

  
</script>
<script lang=ts>
  export let components:SidebarItem[]
  export let imports:any[]

  let squash:any[] = []
  $:(squash = mergeById(components, imports))
</script>

{#each squash as i}
  <div id={`#${i.anchor}`}>
    <h2>{i.text}</h2>
    <svelte:component this={i.import}/>
  </div>
{/each}

<style>
  h2 {
    border-bottom: 1px solid #000;
    width: max-content;
    margin: 1.2rem auto 1.2rem 0;;
  }
</style>