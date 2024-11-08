﻿# wanted-pre-onboarding-challenge-fe-27

# 🗓 Simple Todo List

간단한 할 일 관리 웹 애플리케이션입니다.

## 🌟 주요 기능

- 할 일 추가/수정/삭제

## 🔧 기술 스택

- React 18
- JavaScript
- Vite

## 📦 설치 방법

1. 저장소 클론
```bash
git clone https://github.com/horororok/wanted-pre-onboarding-challenge-fe-27.git
cd my_todolist
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

## 🎯 사용 방법

1. 상단의 입력창에 할 일을 입력하고 Enter 또는 추가 버튼을 클릭합니다.
2. 수정 아이콘을 클릭하여 할 일 내용을 수정할 수 있습니다.
3. 삭제 아이콘을 클릭하여 할 일을 제거할 수 있습니다.

## 📁 프로젝트 구조

```
src/
├── components/
│   └── Nav.jsx
├── pages/
│   ├── Todo.jsx
│   ├── AuthSignIn.jsx
│   ├── AuthSignUp.jsx
│   ├── Home.jsx
│   └── Main.jsx
├── services/
│   ├── AuthApi.js
│   └── TodosApi.js
├── App.jsx
└── main.jsx
```

## 💡 주요 컴포넌트


### Todo
할 일 목록을 표시하고 관리하는 메인 컴포넌트입니다.
개별 할 일 항목을 표시하고 수정/삭제 기능을 제공합니다.

### AuthSignIn
로그인 컴포넌트입니다.

### AuthSignUp
회원가입 컴포넌트입니다.

### Home
랜딩화면 컴포넌트입니다.

### Main
Nav와 나머지 컴포넌트들을 결합한 화면을 보여주는 컴포넌트입니다.

### Nav
내비게이션 버튼들이 위치한 컴포넌트입니다.

