<script lang=ts>
  import type { IconProps } from "$types/Icon";
  
  export let props:IconProps = {
    size: 's',
    stroke: '2',
    color: '#000000'
  }
</script>

{#if props.size === 'xs'}
  <svg xmlns="http://www.w3.org/2000/svg" width="13.632" height="13" viewBox="0 0 13.632 13">
    <g id="Icon_feather-linkedin" data-name="Icon feather-linkedin" transform="translate(-2.5 -2.5)">
      <path id="Path_10" data-name="Path 10" d="M18.985,12a3.985,3.985,0,0,1,3.985,3.985v4.649H20.313V15.985a1.328,1.328,0,1,0-2.657,0v4.649H15V15.985A3.985,3.985,0,0,1,18.985,12Z" transform="translate(-7.338 -5.634)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_11" data-name="Path 11" d="M3,13.5H5.657v7.97H3Z" transform="translate(0 -6.47)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_12" data-name="Path 12" d="M5.657,4.328A1.328,1.328,0,1,1,4.328,3,1.328,1.328,0,0,1,5.657,4.328Z" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 's'}
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
    <g id="Icon_feather-linkedin" data-name="Icon feather-linkedin" transform="translate(-2.5 -2.5)">
      <path id="Path_10" data-name="Path 10" d="M21.582,12a6.582,6.582,0,0,1,6.582,6.582v7.679H23.776V18.582a2.194,2.194,0,1,0-4.388,0v7.679H15V18.582A6.582,6.582,0,0,1,21.582,12Z" transform="translate(-5.164 -4.261)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_11" data-name="Path 11" d="M3,13.5H7.388V26.664H3Z" transform="translate(0 -4.664)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_12" data-name="Path 12" d="M7.388,5.194A2.194,2.194,0,1,1,5.194,3,2.194,2.194,0,0,1,7.388,5.194Z" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'm'}
  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="29.5" viewBox="0 0 31 29.5">
    <g id="Icon_feather-linkedin" data-name="Icon feather-linkedin" transform="translate(-2.5 -2.5)">
      <path id="Path_10" data-name="Path 10" d="M24.918,12a9.918,9.918,0,0,1,9.918,9.918V33.489H28.224V21.918a3.306,3.306,0,1,0-6.612,0V33.489H15V21.918A9.918,9.918,0,0,1,24.918,12Z" transform="translate(-1.836 -1.989)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_11" data-name="Path 11" d="M3,13.5H9.612V33.336H3Z" transform="translate(0 -1.836)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_12" data-name="Path 12" d="M9.612,6.306A3.306,3.306,0,1,1,6.306,3,3.306,3.306,0,0,1,9.612,6.306Z" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'l'}
  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="40" viewBox="0 0 42 40">
    <g id="Icon_feather-linkedin" data-name="Icon feather-linkedin" transform="translate(-2 -2)">
      <path id="Path_10" data-name="Path 10" d="M28.329,12A13.329,13.329,0,0,1,41.657,25.329v15.55H32.771V25.329a4.443,4.443,0,1,0-8.886,0v15.55H15V25.329A13.329,13.329,0,0,1,28.329,12Z" transform="translate(1.343 0.121)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_11" data-name="Path 11" d="M3,13.5h8.886V40.157H3Z" transform="translate(0 0.843)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_12" data-name="Path 12" d="M11.886,7.443A4.443,4.443,0,1,1,7.443,3,4.443,4.443,0,0,1,11.886,7.443Z" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{/if}