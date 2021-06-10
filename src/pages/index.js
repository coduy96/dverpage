import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Image from "@theme/IdealImage";

const features = [
  {
    title: <>Phát triển ứng dụng MOBILE</>,
    imageUrl: "img/undraw_os_upgrade.svg",
    description: <></>,
  },
  {
    title: <>Phát triển ứng dụng WEB</>,
    imageUrl: "img/undraw_web_developer.svg",
    description: <></>,
  },
  {
    title: <>Phát triển API</>,
    imageUrl: "img/undraw_google_analytics.svg",
    description: <></>,
  },
];

const features2 = [
  {
    title: <>Thiết kế hợp lý</>,
    imageUrl: "img/undraw_design.svg",
    description: (
      <>
        Dver tạo ra sản phẩm đáp ứng tất cả các yêu cầu kỹ thuật và cực kì thân
        thiện với người dùng. Khách hàng của bạn sẽ bị thu hút bởi kế sạch đẹp.
      </>
    ),
  },
  {
    title: <>Được tối ưu tốt</>,
    imageUrl: "img/undraw_code.svg",
    description: (
      <>
        Mỗi một sản phẩm đều được tối ưu về tốc độ và bảo mật. Dver luôn cập
        nhật những công nghệ tốt để mang lại cho bạn một trải nghiệm sử dụng
        mượt mà và an toàn.
      </>
    ),
  },
  {
    title: <>Giá trị bỏ ra</>,
    imageUrl: "img/undraw_saving.svg",
    description: (
      <>
        Quá trình phân tích đánh giá dự án chuyên sâu nhằm giảm tối đa chi phí
        cho bạn. Ở Dver số tiền bạn bỏ ra luôn xứng đáng với giá trị bạn sẽ nhận
        lại.
      </>
    ),
  },
];
const QUOTES = [
  {
    thumbnail: require("../data/quotes/duyco.jpg"),
    name: "Duy Cổ",
    title: "Fullstack developer",
    text: <>"Tôi luôn giữ cho mình"</>,
  },
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
    <Layout title={`Phát triển ứng dụng`} description="Phát triển ứng dụng">
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>
            <img
              alt="Docusaurus with Keytar"
              className={styles.heroLogo}
              src={useBaseUrl("img/logo.svg")}
            />
            Tư vấn <span className={styles.heroProjectKeywords}>và</span> phát
            triển{" "}
            <span className={styles.heroProjectKeywords}>
              ứng dụng đa nền tảng{" "}
            </span>
            <span className={styles.heroProjectKeywords}></span>
          </h1>
          <div className={styles.indexCtas}>
            <Link
              className={styles.indexCtasGetStartedButton}
              to={useBaseUrl("contact")}
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
          Biến ý tưởng của bạn thành thực tế.{" "}
          <Link to={useBaseUrl("contact")}>Tại sao không ?</Link>
        </div>
      </div>

      <div
        className={classnames(styles.section, styles.sectionAlt, styles.quotes)}
      ></div>
      <main>
        {/* {features && features.length && (
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

        <hr className={styles.dashed}/> */}

        {features2 && features2.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features2.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <div
        className={classnames(styles.section, styles.sectionAlt, styles.quotes)}
      >
        <div className="container">
          <div className="row">
            {QUOTES.map((quote) => (
              <div className="col" key={quote.name}>
                <div className="avatar avatar--vertical margin-bottom--sm">
                  <Image
                    alt={quote.name}
                    className="avatar__photo avatar__photo--xl"
                    img={quote.thumbnail}
                    style={{ overflow: "hidden" }}
                  />
                  <div className="avatar__intro padding-top--sm">
                    <h4 className="avatar__name">{quote.name}</h4>
                    <small className="avatar__subtitle">{quote.title}</small>
                  </div>
                </div>
                <p className="text--center text--italic padding-horiz--md">
                  {quote.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
