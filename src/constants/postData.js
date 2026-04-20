const postData = [
  {
    id: 1,
    title: "리액트 마스터가 되는 법",
    content: "오늘은 리액트의 Props와 Map에 대해 배워보았습니다. 별 거 없네요.",
    author: {
      name: "영진",
      role: "멋사 14기 운영진",
      profileImg: "/public/profile.png",
    },
    tags: ["React", "JavaScript", "Frontend"],
    likes: 12,
    createdAt: "2026-04-05",
  },
  {
    id: 2,
    title: "외대 근처 맛집 탐방기",
    content: "공부하다 배고플 땐 역시 여기가 최고죠. 메뉴 추천 들어갑니다.",
    author: {
      name: "아기사자A",
      role: "14기 아기사자",
      profileImg: "/public/profile.png",
    },
    tags: ["일상", "맛집", "외대"],
    likes: 45,
    createdAt: "2026-04-04",
  },
  {
    id: 3,
    title: "나만 알고 싶은 코딩 꿀팁",
    content:
      "구글링 잘하는 법부터 환경 설정까지, 제가 정리한 노트를 공유합니다.",
    author: {
      name: "코딩왕",
      role: "14기 아기사자",
      profileImg: "/public/profile.png",
    },
    tags: ["Tips", "Coding", "VSCode"],
    likes: 8,
    createdAt: "2026-04-01",
  },
];

export default postData;
