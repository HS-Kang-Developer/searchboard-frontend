export async function fetchSearchResults(query) {
  console.log("검색어:", query); // 사용 예시
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'OpenSearch 소개', content: '...' },
        { id: 2, title: 'Laravel 인증', content: '...' }
      ]);
    }, 500);
  });
}
