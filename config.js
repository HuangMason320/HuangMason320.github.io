module.exports = {
  pathPrefix: '',
  siteUrl: 'http://masonnn.me',
  title: 'Mason Huang',
  description: 'Portfolio of Mason Huang',
  author: 'Mason Huang',
  authorAlternative: '黃稚筌',
  introduction: [
    'I\'m an undergraduate student at [National Tsing Hua University](https://www.nthu.edu.tw/) in Taiwan, pursuing a Bachelor of Business Administration with an interdisciplinary program in Computer Science and Quantitative Finance. I currently conduct research at [MISLAB](http://mislab.cs.nthu.edu.tw/) under the supervision of Prof. Min-Chun Hu.',
    
    '### Research Interests',
    'My research focuses on **Human-Computer Interaction** and **Computer Vision**, with particular interests in:',
    '- **Digital Arts & Interactive Systems**: Developing immersive creative tools and interactive visualization systems, including VR environments and real-time music visualization driven by human expression',
    '- **2D Image Processing & 3D Human Pose Estimation**: Working on advanced computer vision techniques for human motion understanding and multimodal emotion recognition',

    // '### Current Research',
    // 'I\'m currently working on **"PerformaVis: Real-Time Affective Music Visualization Driven by Pianist\'s Bodily Expressions"** (under submission), which combines computer vision, human-computer interaction, and digital arts to create personalized musical performance visualizations.',

    // 'Additionally, I\'m exploring a new project called **"Memorializing Emotions through Multimodal Optimization and Reconstructive Yielding"**, aimed at providing everyone with the opportunity to bid a proper farewell to those they\'ve lost through innovative HCI approaches.',

    '### Industry Experience',
    'Currently serving as a Software Engineer Intern at Innovedus Inc., where I develop and optimize AI models for Kneron NPU, including working on the company\'s core external application KNEO X.',

    '### Updates',
    '- One paper accepted by [*UIST 2025*](https://uist.acm.org/2025/) (*Aug. 2, 2025*)!',
    '- One paper accepted by [*TAICHI 2025*](https://taichi2025.taiwanchi.org) (*Jul. 17, 2025*)!',
    '- One paper accepted by [*SIGGRAPH 2024*](https://s2024.siggraph.org/) (*Apr 25, 2024*)!',
  ],
  avatar: 'avatar.png',
  professions: [
    'Undergraduate Researcher',
  ],
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  location: 'Taiwan',
  email: 'masonnnhuang@pm.me',
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
      icon: ['fa', 'file'],
    }, {
      url: 'https://github.com/HuangMason320',
      icon: ['fab', 'github'],
    }, 
    {
      url: 'https://www.linkedin.com/in/cchuang-mason/',
      icon: ['fab', 'linkedin'],
    }, 
    {
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
      icon: 'university',
      title: 'B.B.A. in Technology Management',
      location: 'National Tsing Hua University',
    },
    {
      date: 'Sep. 2018 - Jun. 2021',
      icon: 'school',
      title: 'Senior High School Degree',
      location: 'Affiliated Senior High School of National Taiwan Normal University',
    }],
  interests: [
    {
      icon: 'palette',
      title: 'Digital Arts & Interactive Systems',
    },
    {
      icon: 'layer-group',
      title: 'Full Stack Development',
    }, {
      icon: ['fab', 'linux'],
      // icon: 'linux',
      title: 'Open Source Community',
    },
    {
      icon: ['fa', 'music'],
      title: 'Music',
    },
  ],
  experience: [
    {
      title: 'Industry Experience',
      position: 'left',
      data: [
        {
          date: 'Jul. 2024 - Present',
          title: 'Software Engineer Intern',
          location: 'Taiwan',
          description: '',
        },
      ],
    },
    {
      title: 'Teaching',
      position: 'right',
      data: [
        {
          title: 'Teaching Assistant',
          date: 'Jan. 2025 - Jun. 2025',
          location: 'National Tsing Hua University',
          description: '**11320CS241002 Software Studio**',
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
