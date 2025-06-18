1. chart.js / react-chartjs-2 라이브러리 사용

-   설치 방법 : npm install chart.js react-chartjs-2
-   react-chartjs-2는 Chart.js의 기능을 React 컴포넌트 형태로 쉽게 사용할 수 있도록 해주는 "래퍼(wrapper)" 라이브러리
-   react-chartjs-2 라이브러리는 chart.js를 의존하기에 둘다 설치해야한다.
-   차트 별 타입스크립트를 위한 타입 정의도 라이브러리 내에 잘 되어있다.
-   차트 위에 데이터를 띄우고싶으면 chartjs-plugin-datalabels 라는 플러그인을 설치하여 활용하면 된다. (npm install chartjs-plugin-datalabels)

2. dnd-kit 라이브러리 사용

-   설치 방법 : npm install @dnd-kit/core (npm install @dnd-kit/sortable @dnd-kit/utilities)
-   @dnd-kit/core말고도 @dnd-kit/sortable, @dnd-kit/utilities도 추가 설치 필요
-   @dnd-kit/sortable는 정렬 가능한 리스트를 만들기 위해 필요하고 @dnd-kit/utilities는 부드러운 애니메이션과 스타일링을 위해서 필요하다
-   storybook에서 다양한 예시 제공
-   세로 리스트 dnd 예시(https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/story/presets-sortable-vertical--drag-handle)
-   그리드 dnd 예시(https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/story/presets-sortable-grid--basic-setup)
