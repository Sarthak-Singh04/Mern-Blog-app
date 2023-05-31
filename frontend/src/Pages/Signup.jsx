import React, { useState } from 'react';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function register(e) {
    e.preventDefault();
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return (
    <form className='Signup' onSubmit={register}>
      <h1>Signup</h1>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button >Sign up</button>
    </form>
  );
}

export default Signup;
