/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from "react";

import Image from "@theme/IdealImage";
import Layout from "@theme/Layout";

import classnames from "classnames";
import styles from "./styles.module.css";
import users from "../../data/users";

const TITLE = "Hãy kể về ý tưởng của bạn";
const DESCRIPTION = "Dver luôn lắng nghe!";

function Showcase() {
  const [isLoading, setLoading] = useState(true);
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>{TITLE}</h1>
          <p>{isLoading ? "Đang tải trang bạn đợi 1 tí nhé" : DESCRIPTION}</p>
          <iframe
            onLoad={() => setLoading(false)}
            scrolling="no"
            src="https://thirsty-newton-e2d20b.netlify.com/"
            width="400"
            height="590"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}

export default Showcase;
