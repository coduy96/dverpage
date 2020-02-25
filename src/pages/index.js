import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    )
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    )
  },
  {
    title: <>Powered by React</>,
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    )
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Team phát triển ứng dụng`}
      description="Description will go into a meta tag in <head />"
    >
    
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt="Docusaurus with Keytar"
              className={styles.heroLogo}
              src={useBaseUrl("img/logo.svg")}
            />
            Bạn muốn <span className={styles.heroProjectKeywords}>có</span>{" "}
            websites <span className={styles.heroProjectKeywords}>ứng dụng di động</span>
            , thật{" "}
            <span className={styles.heroProjectKeywords}>tốt</span>
          </h1>
          <div className={styles.indexCtas}>
            <Link
              className={styles.indexCtasGetStartedButton}
              to={useBaseUrl("docs/introduction")}
            >
              Bắt đầu ngay thôi!
            </Link>
            {/* <span className={styles.indexCtasGitHubButtonWrapper}>
              <iframe
                className={styles.indexCtasGitHubButton}
                src="https://ghbtns.com/github-btn.html?user=facebook&amp;repo=docusaurus&amp;type=star&amp;count=true&amp;size=large"
                width={160}
                height={30}
                title="GitHub Stars"
              />
            </span> */}
          </div>
        </div>
      </div>

      <div className={classnames(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          Chương trình khuyến mãi{' '}
          <Link to={useBaseUrl('/docs/migrating-from-v1-to-v2')}>
            v1 to v2 migration guide
          </Link>
          .
        </div>
      </div>

      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
