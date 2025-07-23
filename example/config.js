module.exports = {
  pathPrefix: '/gatsby-theme-academic',
  siteUrl: 'http://HuangMason320.github.io',
  title: 'Mason Huang',
  description: 'Personal Website of Mason Huang',
  author: 'Mason Huang',
  authorAlternative: '黃稚筌',
  introduction: [
    'You can write one or several paragraphs to introduce yourself here. You can find this introduction in the `config.js` file in the template.',
    'In this site, almost everything supports Markdown Syntax. For example, you can add hyperlinks in the introduction such as [fxhsb](https://github.com/Reapor-Yurnero) with\n```markdown\n[fxhsb](https://github.com/Reapor-Yurnero)\n```',
    'Here we try to test whether reloading is enabled when site updated (23).',
  ],
  avatar: 'static/avatar.png',
  professions: [
    'Undergraduate Researcher',
  ],
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  location: 'Taiwan',
  email: 'masonhuang0320@gmail.com',
  postsForArchivePage: 3,
  disqusScript: process.env.DISQUS_SCRIPT
    || 'https://tc-imba.disqus.com/embed.js',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },
  social: [
    {
      url: '/resume.pdf',
      icon: ['ai', 'cv'],
    }, {
      url: 'https://github.com/HuangMason320',
      icon: ['fab', 'github'],
    }, {
      url: 'https://twitter.com/',
      icon: ['fab', 'twitter'],
    }, {
      url: 'https://scholar.google.com/citations?user=oful4lkAAAAJ&',
      icon: ['fab', 'google-scholar'],
    },
  ],
  education: [
    // {
    //   date: 'Jan 2020 - Present',
    //   icon: 'graduation-cap',
    //   title: 'Ph.D in Computer Science',
    //   location: 'Some University, Somewhere',
    // },
    {
      date: 'Sep. 2021 - Present',
      icon: 'National Tsing Hua University',
      title: 'B.B.A. in Technology Management',
      location: 'Hsinchu, Taiwan',
    },
    {
      date: 'Sep. 2018 - Jun. 2021',
      icon: 'school',
      title: 'Affiliated Senior High School of National Taiwan Normal University',
      location: 'Taipei, Taiwan',
    }],
  interests: [
    {
      icon: 'cubes',
      title: 'Distributed Systems',
    }, {
      icon: 'layer-group',
      title: 'Full Stack Development',
    }, {
      icon: ['fab', 'linux'],
      // icon: 'linux',
      title: 'Open Source Community',
    }],
  experience: [
    {
      title: 'Industry Experience',
      position: 'left',
      data: [
        {
          date: 'Jul. 2024 - Present',
          title: 'Software Engineer Intern',
          location: 'Taiwan',
          description: 'description',
        },
      ],
    },
    {
      title: 'Teaching',
      position: 'right',
      data: [
        {
          title: 'Teaching Assistant of XXX',
          date: 'Aug 2019',
          location: 'Somewhere',
          description: '',
        },
      ],
    },
    {
      title: 'Research Experience',
      position: 'left',
      data: [
        {
          title: 'Undergraduate Researcher',
          date: 'Jul. 2023 - present',
          location: 'National Tsing Hua University',
          description: '',
        },
      ],
    },
    // {
    //   title: 'Volunteer',
    //   position: 'left',
    //   data: [
    //     {
    //       date: 'Aug 2019',
    //       title: '[fxh](https://github.com/Reapor-Yurnero) home visit third time',
    //       location: 'Somewhere',
    //     }, {
    //       date: 'Aug 2018',
    //       title: '[fxh](https://github.com/Reapor-Yurnero) home visit second time',
    //       location: 'Somewhere',
    //     }, {
    //       date: 'Aug 2017',
    //       title: '[fxh](https://github.com/Reapor-Yurnero) home visit\n\n111',
    //       location: 'Somewhere',
    //     },
    //   ],
    // },
  ],
  // awards: [
  //   {
  //     date: 'Someday',
  //     title: 'Some Award',
  //   }, {
  //     date: 'Someday',
  //     title: 'Another Award',
  //   },
  // ],
  tagColors: [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  ],
  tags: [
    {
      id: 'javascript',
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    {
      id: 'rxjs',
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    {
      id: 'typescript',
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    {
      id: 'reactjs',
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    {
      id: 'gatsby',
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    {
      id: 'html',
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    {
      id: 'css',
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    {
      id: 'python',
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  ],
  defaultLanguage: 'en',
  wakatime: {
    username: 'HuangMason320',
    activity: '7add4047-08f9-4da8-b649-aa114503678f',
    language: '460a84ab-722a-4b80-b896-cabaa13ad7eb',
    os: 'caf7d0d1-8fd2-4595-a991-363c8583fea9',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT
    || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'G-ZK3P43DY6M',
};
