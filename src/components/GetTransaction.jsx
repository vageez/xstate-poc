import React from "react";
import { Helmet } from "react-helmet";

const GetTransaction = ({ send }) => {
  console.log(`Render :: GetTransaction`);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GetTransaction</title>
      </Helmet>
      <h1>{`Fetching transaction ...`}</h1>
    </div>
  );
};

export default GetTransaction;
