// Docs at https://v2.docusaurus.io/docs/configuration
module.exports = {
  title: 'Alliance for Innovation Regulation',
  tagline: "The AIR Accelerator is a set of tools and resources designed to germinate and incubate technology and innovation projects aimed at driving fair finance.", 
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
          title: 'AIR Resources',
          items: [
            {
              label: 'About AIR',
              to: 'https://regulationinnovation.org/',
            },
            {
              label: 'TechSprints',
              to: 'https://regulationinnovation.org/techsprints/',
            },
            {
              label: 'WhitePapers',
              to: 'https://regulationinnovation.org/air-whitepapers/',
            }
          ]
        },
        {
          title: 'AIR Initiatives',
          items: [
            {
              label: 'Events',
              to: 'https://regulationinnovation.org/air-events/',
            },
            {
              label: 'Podcasts',
              to: 'https://regulationinnovation.org/barefoot-innovation-podcast/?sp=guest',
            }
          ]
        },
        {
          title: 'About FINOS',
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
            }
          ]
        },
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