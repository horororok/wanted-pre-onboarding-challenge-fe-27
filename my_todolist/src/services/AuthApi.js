const API_URL = "https://localhost:8000";

// login
// POST users/login
// Parameter
// email: string
// password: string
// 응답 예시
// {
//   "message": "성공적으로 로그인 했습니다",
//   "token": "eyJhbGciOiJIUzI1NiJ9.YXNkZkBhc2RmYXNkZi5jb20.h-oLZnV0pCeNKa_AM3ilQzerD2Uj7bKUn1xDft5DzOk"
// }
export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  return data;
};

// signUp
// POST users/create
// Parameter
// email: string
// password: string
// 응답 예시
// {
//   "message": "계정이 성공적으로 생성되었습니다",
//   "token": "eyJhbGciOiJIUzI1NiJ9.YXNkZkBhc2RmYXNkZi5jb20.h-oLZnV0pCeNKa_AM3ilQzerD2Uj7bKUn1xDft5DzOk"
// }
export const signUp = async (email, password) => {
  const response = await fetch(`${API_URL}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  return data;
};
