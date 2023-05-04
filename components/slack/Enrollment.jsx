import React, { useState } from "react";

import Button from "@mui/material/Button";

const labelInput = "flex";

const Enrollment = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("enrolling", firstName, lastName);
    // INSERT into students ....
  };

  return (
    <>
      <div className="py-8">
        Enroll student
        <div className={labelInput}>
          <div className={labelInput}>
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div className={labelInput}>
            <label>Password</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <label>First name:</label>
          <input
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
          />
        </div>
        <div className={labelInput}>
          <label>Last name:</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className={labelInput}>
          <label>Address:</label>
          <input onChange={(e) => setAddress(e.target.value)} value={address} />
        </div>
        <div className={labelInput}>
          <label>ID:</label>
          <input onChange={(e) => setId(e.target.value)} value={id} />
        </div>
        <div className={labelInput}>
          <label>Phone Number:</label>
          <input
            type="number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
      </div>
      <Button onClick={handleSubmit}>Enroll Student</Button>
    </>
  );
};

export default Enrollment;
