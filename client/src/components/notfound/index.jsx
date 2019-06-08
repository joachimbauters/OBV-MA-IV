import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <h2>Whoops, 404 not found</h2>
      <Link to="/">Bring me home!</Link>
    </section>
  );
};

export default NotFound;
