// src/App.jsx

import { useState } from 'react';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import { fetchSearchResults } from './api/api';
import LoginPage from './components/LoginPage';
import UserInfo from './components/UserInfo';

function App() {
  const [user, setUser] = useState(null); // 로그인 사용자
  const [results, setResults] = useState([]); // 검색 결과

  // 로그인 처리 (더미)
  const handleLogin = (userInfo) => {
    setUser(userInfo);
  };

  // 로그아웃 처리
  const handleLogout = () => {
    setUser(null);
    setResults([]);
  };

  // 검색 처리
  const handleSearch = async (query) => {
    const data = await fetchSearchResults(query);
    setResults(data);
  };

  // 로그인 전 화면
  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="container">
      <h1 style={{ marginBottom: '8px' }}>🔍 <strong>SearchBoard</strong></h1>

      <div className="user-info">
        <p>👤 {user.name} ({user.email})</p>
        <button onClick={handleLogout}>로그아웃</button>
      </div>

      <SearchForm onSearch={handleSearch} />
      <SearchResult results={results} />
    </div>
  );
}

export default App;
