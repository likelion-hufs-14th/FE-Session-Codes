// src/dummy/data.js

const data = [
    {
        id: 1,
        title: '리액트 라우터 처음 써봤다',
        description:
            'BrowserRouter 로 감싸고 Routes 안에 Route 넣으면 된다는 걸 오늘 배웠다. 생각보다 단순한 구조여서 놀랐다. 이제 SPA 가 뭔지 좀 알 것 같다.',
        createdAt: '2026-04-01',
        likeCount: 12,
        author: '김멋사',
    },
    {
        id: 2,
        title: 'useState 가 살짝 헷갈렸던 이유',
        description:
            'set 함수를 부른 직후에 값이 바로 안 바뀐다는 걸 모르고 한참 헤맸다. 리렌더링이 끝난 다음에야 새 값이 반영된다는 걸 알고 나니 이해가 됐다.',
        createdAt: '2026-04-02',
        likeCount: 8,
        author: '박사자',
    },
    {
        id: 3,
        title: 'CSS 정복기 (1편): Flexbox',
        description:
            'display: flex 만 알아도 웬만한 레이아웃은 다 짤 수 있다. justify-content, align-items 이 두 개가 핵심.',
        createdAt: '2026-04-03',
        likeCount: 15,
        author: '이멋쟁이',
    },
    {
        id: 4,
        title: '첫 컴포넌트를 만들고 든 생각',
        description:
            '함수 하나가 곧 컴포넌트라는 게 신기하다. JSX 라는 문법도 처음엔 어색했는데 이젠 좀 편하게 느껴진다.',
        createdAt: '2026-04-04',
        likeCount: 6,
        author: '최코딩',
    },
    {
        id: 5,
        title: 'props 가 일방통행이라는 게 충격',
        description:
            '부모에서 자식으로만 데이터가 흐른다. 자식이 부모 데이터를 바꾸려면 함수를 props 로 받아서 호출해야 한다는 패턴이 좀 어려웠다.',
        createdAt: '2026-04-05',
        likeCount: 11,
        author: '김멋사',
    },
    {
        id: 6,
        title: '14기 OT 후기',
        description: 'OT 에서 만난 사람들이 다들 너무 친절하다. 6개월 동안 같이 잘 해보고 싶다.',
        createdAt: '2026-04-06',
        likeCount: 22,
        author: '박사자',
    },
    {
        id: 7,
        title: 'JSX 가 HTML 이 아니라구요?',
        description:
            'class 가 className 이고 for 가 htmlFor 라는 사실을 모르고 한참 동안 콘솔 에러를 보며 절망했다. 이거 자바스크립트라는 점을 잊지 말자.',
        createdAt: '2026-04-07',
        likeCount: 9,
        author: '정리액',
    },
    {
        id: 8,
        title: '화살표 함수 진짜 너무 좋다',
        description: 'function 키워드 안 써도 되니까 코드가 짧아진다. map, filter 안에서 쓸 때 특히 깔끔하다.',
        createdAt: '2026-04-08',
        likeCount: 7,
        author: '이멋쟁이',
    },
    {
        id: 9,
        title: '6주차 과제 망한 썰',
        description:
            'useState 로 배열 다룰 때 push 로 직접 넣어버려서 화면이 안 바뀌는 문제. 결국 spread 연산자로 새 배열 만들어서 setter 부르니 됐다. 불변성 진짜 중요하다.',
        createdAt: '2026-04-09',
        likeCount: 18,
        author: '최코딩',
    },
    {
        id: 10,
        title: 'SPA 라는 단어를 처음 들어봤다',
        description:
            'Single Page Application. HTML 파일이 한 개라는 게 처음엔 이해가 안 됐는데, 자바스크립트가 화면을 다 바꾼다는 걸 알고 나니 이해가 됐다.',
        createdAt: '2026-04-10',
        likeCount: 14,
        author: '정리액',
    },
];

export default data;
