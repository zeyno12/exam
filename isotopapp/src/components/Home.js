import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="isotop">
        <button>Go to ISOTOP page</button>
      </Link>
    </div>
  );
};

export default Home;
