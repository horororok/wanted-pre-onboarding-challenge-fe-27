const API_URL = "https://localhost:8000";

// getTodos
// GET /todos
// Headers
// Authorization: login token
// 응답 예시
// {
//   "data": [
//     {
//       "title": "hi",
//       "content": "hello",
//       "id": "z3FGrcRL55qDCFnP4KRtn",
//       "createdAt": "2022-07-24T14:15:55.537Z",
//       "updatedAt": "2022-07-24T14:15:55.537Z"
//     },
//     {
//       "title": "hi",
//       "content": "hello",
//       "id": "z3FGrcRL55qDCFnP4KRtn",
//       "createdAt": "2022-07-24T14:15:55.537Z",
//       "updatedAt": "2022-07-24T14:15:55.537Z"
//     }
//   ]
// }
export const getTodos = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/todos`, {
    headers: {
      Authorization: token,
    },
  });
  const data = await response.json();
  return data;
};

// getTodoById
// GET /todos/:id
// Headers
// Authorization: login token
// 응답 예시
// {
//   "data": {
//     "title": "hi",
//     "content": "hello",
//     "id": "z3FGrcRL55qDCFnP4KRtn",
//     "createdAt": "2022-07-24T14:15:55.537Z",
//     "updatedAt": "2022-07-24T14:15:55.537Z"
//   }
// }
export const getTodoById = async (id) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/todos/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  const data = await response.json();
  return data;
};

// createTodo
// POST /todos
// Parameter
// title: string
// content: string
// Headers
// Authorization: login token
// 응답 예시
// {
//   "data": {
//     "title": "hi",
//     "content": "hello",
//     "id": "z3FGrcRL55qDCFnP4KRtn",
//     "createdAt": "2022-07-24T14:15:55.537Z",
//     "updatedAt": "2022-07-24T14:15:55.537Z"
//   }
// }
export const createTodo = async (title, content) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });
  const data = await response.json();
  return data;
};

// updateTodo
// PUT /todos/:id
// Parameter
// title: string
// content: string
// Headers
// Authorization: login token
// 응답 예시
// {
//   "data": {
//     "title": "제목 변경",
//     "content": "내용 변경",
//     "id": "RMfi3XyOKoI5zd0A_bsPL",
//     "createdAt": "2022-07-24T14:25:48.627Z",
//     "updatedAt": "2022-07-24T14:25:48.627Z"
//   }
// }
export const updateTodo = async (id, title, content) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: "PUT",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, content }),
  });
  const data = await response.json();
  return data;
};

// deleteTodo
// DELETE /todos/:id
// Headers
// Authorization: login token
// 응답 예시
// {
//   "data": null
// }
export const deleteTodo = async (id) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
  const data = await response.json();
  return data;
};
