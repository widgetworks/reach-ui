// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-react-helmet/src/gatsby-ssr.js
import Helmet from "./src/components/Helmet";
// import { Helmet } from "react-helmet";

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes
}) => {
  const helmet = Helmet.renderStatic();
  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }
  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
    helmet.base.toComponent()
  ]);
};
