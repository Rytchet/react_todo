import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>
        This is a simple Todo app. It's implemented using React and gets the
        todos automatically from an API using Axios.
      </p>
      <p>
        The changes don't save after realoading the page because it's only a
        frontend demo
      </p>
    </React.Fragment>
  );
}
