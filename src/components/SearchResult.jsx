function SearchResult({ results }) {
  if (!results || results.length === 0) {
    return <p className="result-message">검색 결과가 없습니다.</p>;
  }

  return (
    <ul style={{ textAlign: 'left', paddingLeft: '0' }}>
      {results.map((item) => (
        <li key={item.id} style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '4px' }}>{item.title}</h3>
          <p style={{ margin: 0 }}>{item.content}</p>
        </li>
      ))}
    </ul>
  );
}


export default SearchResult;