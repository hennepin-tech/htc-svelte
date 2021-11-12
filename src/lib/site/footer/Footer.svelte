<script lang=ts context=module>
   // import Facebook from '../../icons/Facebook.svelte'
   // import Twitter from '../../icons/Twitter.svelte'
   // import Linkedin from '../../icons/Linkedin.svelte'
   // import Youtube from '../../icons/Youtube.svelte'
</script>
<script lang=ts>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

   import type { FooterProps } from '$types/Footer'
   
   import ArrowR from '$lib/icons/Arrow-r.svelte'
   import Button from '$lib/Button.svelte'

   import inView from '../../actions/inView'
   
   let stuck = true
   let formOpen = false

   let footerHeight

   export let props:FooterProps 
</script>

<div 
   class:stuck 
   class="footer__sub" 
   style={
      stuck ? `` : `bottom:${footerHeight}px` 
   }
>
   <div class="footer__sub__inner container">
      <div class="footer__sub__link">
         <button id="rfi__trigger" on:click={() => formOpen = !formOpen}>
            Get More Information 
               <div class:turn={formOpen} style="
                  transition: transform 0.3s cubic-bezier(0.83, 0, 0.17, 1);
               ">
                  <ArrowR props={{size: 'xs', stroke: '2', color: '#fff'}}/>
               </div>
            
         </button>
         <div class="footer__sub__link__underlay"></div>
      </div>
      <div>
         <div class="footer__sub__link">
            <a href="https://hennepintech.edu/">
               Campus Tour
            </a>
            <div class="footer__sub__link__underlay"></div>
         </div>
         <div class="footer__sub__link">
            <a href="https://hennepintech.edu/" style="border-left: none;">
               Apply Now
            </a>
            <div class="footer__sub__link__underlay"></div>
         </div>
      </div>
   </div>
   <!-- Global RFI Form -->
      {#if formOpen}
      <div id="rfi" transition:slide={{delay: 40, duration: 300, easing: quintOut }}>
         <form action="" method="post" class=" rfi__form container">
            <div style="grid-area: col1;">
               <input type="text" name="" id="">
               <input type="text" name="" id="">
               <input type="text" name="" id="">
            </div>
            <div style="grid-area: col2;">
               <input type="text" name="" id="">
               <select></select>
               <select></select>
            </div>
            <Button 
               props={{
                  behavior: 'button',
                  size: 'm',
                  text: 'Submit',
                  type: 'primary',
                  submit: true,
                  style: 'grid-area: submit; justify-self: end;'
               }}
            />
         </form>
      </div>
      {/if}
   <!-- Global RFI Form End -->
</div>

<footer 
   class="footer" 
   bind:clientHeight={footerHeight}
   use:inView
   on:enter={() => stuck = false}
   on:exit={() => stuck = true}
   style="min-height:200px;"
>
   <!-- Footer Section 1 -->
   <div class="footer__1">
      <div class="footer__1__inner container">
         <a class="footer__1__link" href="https://hennepintech.edu/covid_21.html">
            COVID FAQ
            <ArrowR props={{size: 'xs', stroke: '3', color: '#fff'}}/>
         </a>
      </div>
   </div>

   <!-- Footer Section 2 -->
   <div class="footer__2 container">
      <div class="footer__2__1">
         {#each props.social as item}
            <a class="icon__button icon__button__rnd" href={item.url}>
               <!-- {item.icon} -->
               <svelte:component 
                  this={item.icon}
                  props={{
                     color: '#fff',
                     size: 's',
                     stroke: '2'
                  }}
               />
            </a>
         {/each}
      </div>
      <div class="footer__2__2">
         <Button props={{
            behavior: 'link',
            size: 'm',
            layout: 'block',
            text: 'Contact HTC',
            type: 'primary',
            url: 'https://hennepintech.edu/'
         }}/>

         <a href="directions-and-map/index.html" title="Map Direction">
            Brooklyn Park Campus <br>
            9000 Brooklyn Blvd, Brooklyn Park, MN 55445
         </a>
         <a href="directions-and-map/index.html" title="Map Direction">
            Eden Prairie Campus <br>
            13100 College View Dr, Eden Prairie, MN 55347
        </a>
      </div>
      <div class="footer__2__3">
         <a href="https://minnstate.edu/">
            <img src="/htc-mn-vert.png" alt="">
         </a>
         <a href="http://bit.ly/2IktztT">
            <img src="/hlc-logo.png" alt="">
         </a>
      </div>
   </div>

   <!-- Footer Section 3 -->
   <div class="footer__3">
      <div class="footer__3__inner container">
         {#each props.quickLinks as link, index}
            <a href={link.url}>{link.text}</a> 
            {#if index !== props.quickLinks.length - 1}
               <span>|</span> 
            {/if}
         {/each}
      </div>
   </div>

   <!-- Footer Section 4 -->
   <div class="footer__4">
      <div class="footer__4__inner container">
         <p>Copyright © 2021 by Hennepin Technical College. HTC is an affirmative action, equal opportunity employer and educator. This website can be made available in alternate formats by <a href="https://hennepintech.edu/current-students/access-services/index.html">Disability Services</a></p>
      </div>
   </div>
</footer>

<style>
   .turn {
      transform: rotate(90deg);
   }
   #rfi {
      border-top: 2px solid var(--white);
      padding-top: 1.2rem;
   }

   .rfi__form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas: "col1 col2" "submit submit";
      gap: 0 30px;
      width: 45%;
      max-width: 90vw;
      margin: auto;
   }

   #rfi__trigger {
      display: flex;
      align-items: center;
      border-radius: 0;
   }


   footer * {
      font-size: 1rem;
   }
   .footer__sub {
      width: 100%;
      min-height: 50px;
      background-color: var(--gray-700);
      position: absolute;
      bottom: 0;
      left: 0;
   }
   .footer__sub__inner {
      height:100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
   .footer__sub__inner > div {
      height: 100%;
      display: flex;
      align-items: center;
   }
   .footer__sub__inner button,
   .footer__sub__inner a  {
      background-color: transparent;
      border: none;
      border-left: 2px solid var(--white);
      border-right: 2px solid var(--white);
      color: var(--white);
      font-size: 1.2rem;
      margin: 0;
      height: 50px;
      position: relative;
      display: flex;
      align-items: center;
      padding: 10px;
      z-index: 1;
   }
   .footer__sub__link {
      height: 100%;
      position: relative;
      display: inline-block;
   }
   .footer__sub__link > *:hover {
      text-decoration: underline;
      cursor: pointer;
   }
   .footer__sub__link__underlay {
      position: absolute;
      height: 100%;
      width: 100%;
      clip-path: polygon(0px 0px, 0% 100%, 75px 102%);
      background-color: rgb(51, 54, 55);
      left: 1px;
      bottom: 0;
      z-index: 0;
   }

   .stuck {
      position: fixed;
   }

   .footer__1 {
      height: 50px;
      background-color: var(--orange);
      border-top: 2px solid var(--white);
   }
   .footer__1__inner {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
   }
   .footer__1__link {
      color: var(--white);
      font-size: 1.4rem;
      font-weight: 700;
      display: flex;
      align-items: center;
   }

   .footer__2 {
      padding: 1.2rem 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      gap: 2rem;
      /* justify-content: space-between; */
   }

   .footer__2__1 {
      display: flex;
      gap: 10px;
   }

   .footer__2__1 .icon__button__rnd{
      border-radius: 50%;
      background-color: var(--gray-700);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .footer__2__2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      gap: 1.2rem;
      font-weight: 700;
   }

   .footer__2__3 {
      /* align-self: flex-end; */
      /* justify-self: end; */
      
   }

   .footer__2__3 img {
      max-width: 125px;
      margin-left: auto;
      margin-bottom: 25px;
      display: block;
   }

   .footer__3 {
      background-color: var(--gray-700);
      min-height: 50px;
      padding: 20px;
      border-bottom: 2px solid var(--white);
      text-align: center;
   }
   .footer__3__inner a,
   .footer__3__inner span{
      color: var(--white);
      display: inline-block;
      font-size: .8rem;
   }
   .footer__3__inner span {
      margin: 0 10px;
   }

   .footer__4 {
      border-top: 5px solid var(--orange);
      background-color: var(--gray-100);
      padding: 1.2rem 0;
   }

   .footer__4__inner > p{
      font-size: 1rem;
      color: var(--gray-500);
      margin: 0;
   }
</style>