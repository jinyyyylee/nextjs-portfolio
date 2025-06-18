Node Version : 22.16.0

#### 프로젝트 소개

```
프론트팀에서 react 기술 스택 도입을 시도하면서 기존 vue 기반 프로젝트에서 사용했던 라이브러리들을 react 기반으로 조사하고,
react 라이브러리의 프레임워크인 next.js 환경 boilertemplate를 구성하고 가이드를 정리하기 위해 제작하게 되었습니다.
```

#### Next.js

##### 📂 폴더 라우팅

Next.js 13버전 이후 app 폴더가 등장하면서 app 폴더 내부에 폴더를 생성하면 해당 폴더 이름으로 라우터가 생성됩니다.
이를 통해서 백엔드와 통신하는 api route와 프론트단 page route로 구조를 나누어 풀스택으로 개발도 가능합니다.

- api route

  1. api 폴더 내부에 하위 폴더를 생성한 뒤, 하위 폴더에 route 스크립트 파일을 생성
  2. 클라이언트에서 해당 라우트에 요청할 때의 메소드 이름으로 비동기 함수 생성
  3. NextResponse, NextRequest 타입을 통해서 req 받은 값을 활용하여 로직 처리한 결과값 json 형태로 반환하는 형태

- page route
  1. app 폴더 내부에 최상위에 위치하는 page 컴포넌트로 메인 페이지 라우팅
  2. 서브 페이지 폴더에 page 컴포넌트 파일을 생성하면 서브 페이지 라우팅

##### 📌 page 동적 라우팅

next.js에서는 동적 라우팅 기능을 제공하여 이를 쉽게 구현할 수 있었습니다.

예시) /shop 페이지에서 상품을 클릭할 시, 하위 폴더인 /shop/[동적 라우팅] 경로로 제품 id값을 보내주면
동적 라우팅 폴더 페이지 컴포넌트에서 해당 id 값으로 필터링하여 상세 페이지를 출력할 수 있습니다.

#### 📂 디렉토리 구조

```
📦 src
├── 📁 app
│   ├── 📁 api
│   │   └── 📁 route
│   │       └── 📄 route.ts
│   ├── 📁 guide
│   │   ├── 📁 wsChoi      └── 📄 page.tsx
│   │   ├── 📁 hgLee      └── 📄 page.tsx
│   │   ├── 📁 jyLee       └── 📄 page.tsx
│   │   ├── 📁 mhLim       └── 📄 page.tsx
│   │   ├── 📁 hbPark      └── 📄 page.tsx
│   │   ├── 📁 ygPark      └── 📄 page.tsx
│   │   ├── 📁 ebYook      └── 📄 page.tsx
│   │   └── 📄 page.tsx
│   ├── 🖼️ favicon.ico
│   ├── 🎨 globals.scss
│   ├── 🧩 layout.tsx
│   ├── 🎨 page.module.scss
│   └── 📄 page.tsx
├── 📁 assets
│   ├── 📁 images
│   │   └── 📁 svgs
│   │       └── 🖼️ home.svg
│   └── 📁 scss
│       ├── 📁 guide      └── 🎨 index.scss
│       ├── 📁 lxp
│       ├── 🎨 common.scss
│       └── 🎨 variables.scss
├── 📁 components
│   ├── 📁 common
│   ├── 📁 guide
│   │   ├── 📁 wsChoi      └── 📄 Container.tsx
│   │   ├── 📁 hgLee      └── 📄 Container.tsx
│   │   ├── 📁 jyLee       └── 📄 Container.tsx
│   │   ├── 📁 mhLim       └── 📄 Container.tsx
│   │   ├── 📁 hbPark      └── 📄 Container.tsx
│   │   ├── 📁 ygPark      └── 📄 Container.tsx
│   │   ├── 📁 ebYook      └── 📄 Container.tsx
│   │   └── 📄 Container.tsx
│   ├── 📁 layout          └── 📄 Header.tsx
│   └── 📁 main            └── 📄 Container.tsx
├── 📁 store
│   ├── 🪝 hook.ts
│   ├── 🧩 Provider.tsx
│   ├── 🧠 store.ts
│   └── 🪄 tabMenuToggle.ts
├── 📁 types
│   └── 🧾 global.d.ts
└── 📁 utils
    └── 📁 hooks
        └── 🪝 useToast.tsx
```
