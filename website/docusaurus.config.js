// Docs at https://v2.docusaurus.io/docs/configuration
module.exports = {
  title: 'Alliance for Innovation Regulation',
  tagline: "AIR is a global non-profit that advances a fair financial system, by promoting the use of 'responsible technology' to help consumers and small businesses build financial health.", 
  url: 'https://air-accelerator.finos.org',
  baseUrl: '/',
  favicon: 'img/favicon/favicon-air.ico',
  projectName: 'air-accelerator',
  organizationName: 'finos',
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: ['https://fonts.googleapis.com/css?family=Overpass:400,400i,700'],

  // TODO - find a place for these
  // ogImage: 'img/undraw_online.svg',
  // twitterImage: 'img/undraw_tweetstorm.svg',
  // twitterUsername: 'FinosFoundation',

  themeConfig: {
    navbar: {
      title: 'Alliance for Innovation Regulation',
      logo: {
        alt: 'AIR Logo',
        src: 'img/favicon/favicon-air.ico',
      },
      items: [
        {to: 'docs/what-is-odp', label: 'Docs', position: 'right'},
        {
          href: 'https://github.com/finos/open-regtech/',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      copyright: `Copyright © 2021 - AIR - FINOS - The Fintech Open Source Foundation`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
        href: 'https://finos.org'
      },
      links: [
        {
          title: 'FINOS Initiatives',
          items: [
            {
              label: 'FINOS Projects on GitHub',
              to: 'https://github.com/finos',
            },
            {
              label: 'Engage the FINOS Community',
              to: 'https://www.finos.org/engage-with-our-community',
            },
            {
              label: 'FINOS News and Events',
              to: 'https://www.finos.org/news-and-events',
            }]
          },
          {
            title: 'Quick links',
            items: [
            {
              label: 'Join a Project Meeting',
              to: 'https://github.com/finos/open-developer-platform/issues?q=label%3Ameeting+',
            },
            {
            label: 'Browse Good First Issues',
            to: 'https://github.com/finos/open-developer-platform/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22',
            },
            {
              label: 'Ask a Question',
              to: 'https://github.com/finos/open-developer-platform/issues/new?assignees=&labels=&template=Support_question.md&title=',
            }]
          },
          {
            title: 'FINOS Community',
            items: [    
            {
            label: 'FINOS Community Handbook',
            to: 'https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/80642059/Community+Handbook',
            },
            {
            label: 'FINOS Community Governance',
            to: 'https://github.com/finos/community/tree/master/governance',
            },
            {
              label: 'FINOS on LinkedIn',
              to: 'https://www.linkedin.com/company/finosfoundation',
            }
          ]
        }
      ]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          editUrl:
            'https://github.com/finos/open-developer-platform/edit/master/website/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ]
};