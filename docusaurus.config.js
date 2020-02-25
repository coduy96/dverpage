module.exports = {
  title: 'Dver solution',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Dver',
      logo: {
        alt: 'Dver logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'showcase', label: 'Showcase', position: 'left'},
        {to: 'feedback', label: 'Feedback', position: 'left'},
        {
          href: 'https://github.com/coduy96',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Về chúng tôi',
          items: [
            {
              label: 'Chúng tôi là ai? ',
              to: 'docs/doc1',
            },
            {
              label: 'Vì sao chọn chúng tôi ?',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Các công nghệ được áp dụng',
          items: [
            {
              label: 'ExpressJS',
              href: 'https://expressjs.com/',
            },
            {
              label: 'React',
              href: 'https://reactjs.org/',
            },
            {
              label: 'React Native',
              href: 'https://reactnative.dev/',
            },
            {
              label: 'Mongodb',
              href: 'https://www.mongodb.com/',
            },
          ],
        },
        {
          title: 'Cộng đồng',
          items: [
            {
              label: 'Blog',
              to: 'docs/doc1',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/coduy96',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/cotrinh.hienduy',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dver Team`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
