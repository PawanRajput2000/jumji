import React, { useState } from 'react';
import { useParams } from 'react-router-dom'

const ResetPasswordForm = () => {
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  const params = useParams();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    console.log(params.token)

    try {
      const response = await fetch(`https://jumjibackend.onrender.com/reset-password/${params.token}`, {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Password }),
      });

      if (response.ok) {
        alert("password updated successfully")
      } else {
        const data = await response.json();
        console.warn(data.error)
        setError(data.error);
      }
    } catch (error) {
        console.warn(error)
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="Enter new password"
          value={Password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Reset Password</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default ResetPasswordForm;
