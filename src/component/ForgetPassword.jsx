import React, { useState } from 'react';
import './ForgetPassword.css';

const ForgetPassword = () => {
  const [Email, setEmail] = useState('');
  const [resetTokenSent, setResetTokenSent] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jumjibackend.onrender.com/forgetPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Email }),
      });

      if (response.ok) {
        setResetTokenSent(true);
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      {!resetTokenSent ? (
        <form onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Enter your Email"
            value={Email}
            onChange={handleEmailChange}
          />
          <button type="submit">Send Reset Link</button>
          {error && <p>{error}</p>}
        </form>
      ) : (
        <form>
          <p>Reset link sent to your email. Please check your inbox.</p>
        </form>
      )}
    </div>
  );
};

export default ForgetPassword;
