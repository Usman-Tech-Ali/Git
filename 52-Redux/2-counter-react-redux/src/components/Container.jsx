import React from "react";

const Container = ({ children }) => {
  return (
    <div className="card" style={{ width: "100%", padding: "30px" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
