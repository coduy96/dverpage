/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect } from "react";

import Image from "@theme/IdealImage";
import Layout from "@theme/Layout";

import classnames from "classnames";
import styles from "./styles.module.css";
import users from "../../data/users";

const TITLE = "Liên lạc với Dver";
const DESCRIPTION =
  "Để có một sản phẩm tuyệt vời";

function Showcase() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>{TITLE}</h1>
          <p>{DESCRIPTION}</p>

          <div className={styles.announcementInner}>
            <iframe
              scrolling="no"
              src="https://thirsty-newton-e2d20b.netlify.com/"
              width="400"
              height="570"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Đang tải…
            </iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Showcase;
