module.exports = {
    locales: {
      '/': {
        lang: 'en-US',
        title: 'Kaosjs Library',
        description: 'Documentation site for the kaosjs library'
      }
    },

    plugins: [
      [
        'vuepress-plugin-typescript'
      ],
    ],

    themeConfig: {
      repoLabel: 'Contribute!',
      // git repo here... gitlab, github
      repo: '',
      docsDir: 'docs',
      editLinks: true,
      docsBranch: 'dev',
      editLinkText: 'Help us improve this page!',
      search: false,
      locales: {
        '/': {
          label: 'English',
          selectText: 'Languages',
          lastUpdated: 'Last Updated',
          // service worker is configured but will only register in production
          serviceWorker: {
            updatePopup: {
              message: 'New content is available.',
              buttonText: 'Refresh'
            }
          },
          nav: [
            { text: 'Getting Started', link: '/guide' },
            { text: 'Components', link: '/components/' },
            { text: 'GitHub', link: 'https://github.com/Kawacrepe/Kaosjs' }
          ],
          sidebar: {
            '/components/': [
              {
                title: 'Components',
                collapsable: false,
                children: ['modal', 'popover', 'list', 'select']
              }
            ]
          }
        }
      }
    }
  }