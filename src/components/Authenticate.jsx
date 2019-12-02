import React from "react";
import { Helmet } from "react-helmet";

const Authenticate = () => {
  console.log(`Render :: Authenticate`)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Authenticate</title>
      </Helmet>
      <h1>{`Authenticating...`}</h1>
    </div>
  );
};

export default Authenticate;
