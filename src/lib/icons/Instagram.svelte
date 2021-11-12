<script lang=ts>
  import type { IconProps } from "$types/Icon";
  
  export let props:IconProps = {
    size: 's',
    stroke: '2',
    color: '#000000'
  }
</script>

{#if props.size === 'xs'}
  <svg xmlns="http://www.w3.org/2000/svg" width="13.62" height="13.62" viewBox="0 0 13.62 13.62">
    <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(-2.5 -2.5)">
      <path id="Path_7" data-name="Path 7" d="M6.155,3h6.31A3.155,3.155,0,0,1,15.62,6.155v6.31a3.155,3.155,0,0,1-3.155,3.155H6.155A3.155,3.155,0,0,1,3,12.465V6.155A3.155,3.155,0,0,1,6.155,3Z" transform="translate(0 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_8" data-name="Path 8" d="M17.881,14.43a2.924,2.924,0,1,1-2.463-2.463,2.924,2.924,0,0,1,2.463,2.463Z" transform="translate(-5.654 -5.573)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_9" data-name="Path 9" d="M26.25,9.75h0" transform="translate(-13.47 -3.91)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 's'}
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
    <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(-2 -2)">
      <path id="Path_7" data-name="Path 7" d="M8,3H18a5,5,0,0,1,5,5V18a5,5,0,0,1-5,5H8a5,5,0,0,1-5-5V8A5,5,0,0,1,8,3Z" transform="translate(0 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_8" data-name="Path 8" d="M21.192,15.85a4.588,4.588,0,1,1-3.866-3.866,4.588,4.588,0,0,1,3.866,3.866Z" transform="translate(-3.614 -3.562)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_9" data-name="Path 9" d="M26.25,9.75h0" transform="translate(-7.75 -2.25)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'm'}
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(-2 -2)">
      <path id="Path_7" data-name="Path 7" d="M10.5,3h15A7.5,7.5,0,0,1,33,10.5v15A7.5,7.5,0,0,1,25.5,33h-15A7.5,7.5,0,0,1,3,25.5v-15A7.5,7.5,0,0,1,10.5,3Z" transform="translate(0 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_8" data-name="Path 8" d="M25.938,17.886a6.974,6.974,0,1,1-5.876-5.876,6.974,6.974,0,0,1,5.876,5.876Z" transform="translate(-0.981 -0.967)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_9" data-name="Path 9" d="M26.25,9.75h0" transform="translate(0 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{:else if props.size === 'l'}
  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43">
    <g id="Icon_feather-instagram" data-name="Icon feather-instagram" transform="translate(-1.5 -1.5)">
      <path id="Path_7" data-name="Path 7" d="M13,3H33A10,10,0,0,1,43,13V33A10,10,0,0,1,33,43H13A10,10,0,0,1,3,33V13A10,10,0,0,1,13,3Z" transform="translate(0 0)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_8" data-name="Path 8" d="M30.38,19.792a9.208,9.208,0,1,1-7.757-7.757,9.207,9.207,0,0,1,7.757,7.757Z" transform="translate(1.805 1.779)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
      <path id="Path_9" data-name="Path 9" d="M26.25,9.75h0" transform="translate(7.75 2.25)" fill="none" stroke={props.color} stroke-linecap="round" stroke-linejoin="round" stroke-width={props.stroke}/>
    </g>
  </svg>
{/if}