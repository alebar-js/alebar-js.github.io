import React, { useState } from "react";
import Table from "./Table";
import Enrollment from "./Enrollment";

const index = () => {
  const rows = []; // retrieve from db
  return (
    <div>
      <Enrollment />
      <div className="flex">
        <Table />
      </div>
    </div>
  );
};

export default index;
