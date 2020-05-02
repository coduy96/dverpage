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

const TITLE = "Không được phép truy cập";
const DESCRIPTION = "Đây là sản phẩm nội bộ dùng cho doanh nghiệp không thể xem chi tiết! Bạn có thể xem chi tiết những dự án khác.";

function Showcase() {
  const [isLoading, setLoading] = useState(true);
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>{TITLE}</h1>
          <p>{DESCRIPTION}</p>
        
          <img src='img/undraw_private.svg' alt='IMG' />
        
        </div>
      </div>
    </Layout>
  );
}

export default Showcase;
