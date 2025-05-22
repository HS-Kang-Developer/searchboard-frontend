// src/components/LoginPage.jsx

import React from 'react';

function LoginPage({ onLogin }) {
  const handleLogin = () => {
    // 나중에 Cognito 로그인으로 바꿀 예정
    const dummyUser = {
      name: '홍길동',
      email: 'user@example.com',
    };
    onLogin(dummyUser);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>🔐 SearchBoard 로그인</h2>
      <button onClick={handleLogin}>로그인 (더미)</button>
    </div>
  );
}

export default LoginPage;
