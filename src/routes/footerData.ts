import Facebook from '../lib/icons/Facebook.svelte'
   import Twitter from '../lib/icons/Twitter.svelte'
   import Linkedin from '../lib/icons/Linkedin.svelte'
   import Youtube from '../lib/icons/Youtube.svelte'
export default {
  name: 'Footer',
  social: [
    {
      name: 'Facebook',
      url: 'https://facebook.com/hennepintechnicalcollege',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/hennepintech',
      icon: Twitter,
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/edu/hennepin-technical-college-21279',
      icon: Linkedin,
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/hennepintech',
      icon: Youtube,
    },
  ],
  quickLinks: [
    { 
      text: 'D2L',
      url: 'https://hennepintech.learn.minnstate.edu/',
    },
    { 
      text: 'eServices',
      url: 'https://hennepintech.edu/current-students/registration/eservices-and-schedule-old-5342.html',
    },
    { 
      text: 'eTimesheets',
      url: 'https://eservices.minnstate.edu/tlr/secure/home',
    },
    { 
      text: 'Employee Portal',
      url: 'https://mnscu.sharepoint.com/sites/HTC-employeeportal/',
    },
    { 
      text: 'myHennepinTech',
      url: 'https://hennepintech.edu/technology-services/student-email.html',
    },
    { 
      text: 'StarID',
      url: 'https://hennepintech.edu/future-students/starID.html',
    },
    { 
      text: 'Transfer ',
      url: 'https://hennepintech.edu/future-students/transfer/index.html',
    },
    { 
      text: 'Minnesota State Self Service ',
      url: 'https://hub.selfservice.systems.state.mn.us/psp/hubss/SELFSERVICE/',
    },
    { 
      text: 'Employee Directory',
      url: 'https://hennepintech.edu/directory/index.html',
    },
    { 
      text: 'Privacy Policy',
      url: 'https://hennepintech.edu/about-htc/privacy-policy.html',
    },
    { 
      text: 'Contact Webmaster ',
      url: 'mailto:service.desk@hennepintech.edu',
    },
  ],
  footnote: '<p>Copyright © 2021 by Hennepin Technical College. HTC is an affirmative action, equal opportunity employer and educator. This website can be made available in alternate formats by <a href="https://hennepintech.edu/current-students/access-services/index.html">Disability Services</a></p>',
}