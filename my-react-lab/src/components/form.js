import React, { useState } from 'react';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [age, setAge] = useState('');

  const Submit = () => {
    alert(`Email: ${email}, Password: ${password}, Full Name: ${fullname}, Age: ${age}`);
  };

  const Reset = () => {
    setEmail('');
    setPassword('');
    setFullname('');
    setAge('');
  };

  return (
    <div className="form-container">
      <h1 className="form-header">Task 3</h1>
      <h1 className="form-header">Login Form:</h1>
      <div className="form-inputs">
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <input
          className="form-input"
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="form-buttons">
        <button className="form-button submit-button" onClick={Submit}>
          Submit
        </button>
        <button className="form-button reset-button" onClick={Reset}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default Form;


