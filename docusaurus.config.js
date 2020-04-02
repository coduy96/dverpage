module.exports = {
  title: "Dver solution",
  tagline: "The tagline of my site",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus",
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2 // the max number of images generated between min and max (inclusive)
      }
    ]
  ], // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Dver",
      logo: {
        alt: "Dver logo",
        src: "img/logo.svg"
      },
      links: [
        { to: "blog", label: "Chia sẻ của Dver", position: "left" },
        { to: "showcase", label: "Dự án đã hoàn thành", position: "left" },
        {
          to: "docs/doc1",
          activeBasePath: "docs",
          label: "Tài liệu",
          position: "left"
        }
      ]
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Về chúng tôi",
      //     items: [
      //       {
      //         label: "Chúng tôi là ai? ",
      //         to: "/"
      //       },
      //       {
      //         label: "Vì sao chọn chúng tôi ?",
      //         to: "/"
      //       }
      //     ]
      //   },
      //   {
      //     title: "Các công nghệ được áp dụng",
      //     items: [
      //       {
      //         label: "ExpressJS",
      //         href: "https://expressjs.com/"
      //       },
      //       {
      //         label: "React",
      //         href: "https://reactjs.org/"
      //       },
      //       {
      //         label: "React Native",
      //         href: "https://reactnative.dev/"
      //       },
      //       {
      //         label: "Mongodb",
      //         href: "https://www.mongodb.com/"
      //       }
      //     ]
      //   },
      //   {
      //     title: "Cộng đồng",
      //     items: [
      //       {
      //         label: "Blog",
      //         to: "Blog"
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/coduy96"
      //       },
      //       {
      //         label: "Facebook",
      //         href: "https://www.facebook.com/cotrinh.hienduy"
      //       },
      //       {
      //         label: "Youtube",
      //         href: "https://www.youtube.com"
      //       }
      //     ]
      //   }
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Dver`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "./docs/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        blog: {
          path: "./blog/",
          postsPerPage: 3,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Dver.`
          }
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
