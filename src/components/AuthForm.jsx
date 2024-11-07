// AuthForm.jsx
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const AuthForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return isLoginForm ? (
    <LoginForm toggleToRegister={() => setIsLoginForm(false)} />
  ) : (
    <RegistrationForm toggleToLogin={() => setIsLoginForm(true)} />
  );
};

export default AuthForm;
