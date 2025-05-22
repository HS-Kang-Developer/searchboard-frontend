// src/components/UserInfo.jsx

function UserInfo({ user, onLogout }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p>👤 {user.name} ({user.email})</p>
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
}

export default UserInfo;
