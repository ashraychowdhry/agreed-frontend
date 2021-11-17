import React from "react";
import { Link } from "react-router-dom";

function PageNotFoundPage() {
  return (
    <div style={{padding: '40px'}}>
      <h1>Whoops</h1>
      <h3>We can't seem to find this page</h3>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default PageNotFoundPage;
