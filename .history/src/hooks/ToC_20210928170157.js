import { Link } from "gatsby";
import React from "react";
import loadable from "@loadable/component";
const Scrollspy = loadable(() => import("./autoMenu"));

const ToC = () => <Scrollspy />;

export default ToC;
