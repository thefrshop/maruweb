export const Menuset = [
    {
        title: "MaruMedia",
        id: "marumedia",
        menu: [
            {
                linkto: { pathname: "/intro" },
                tag: "회사소개",
            },
            {
                linkto: { pathname: "/organization" },
                tag: "조직도",
            },
            {
                linkto: { pathname: "/location" },
                tag: "찾아 오시는길",
            },
        ],
    },
    {
        title: "Production",
        id: "production",
        menu: [
            {
                linkto: { pathname: "/process" },
                tag: "제작 과정",
            },
            {
                linkto: { pathname: "/productionqna" },
                tag: "제작 문의",
                //auth_email: true,
            },
        ],
    },
    {
        title: "Portfolio",
        id: "portfolio",
        menu: [
            {
                SLink: "PortfolioView",
                linkto: { pathname: "/portfolio/sample" },
                tag: "샘플 영상",
            },
            {
                linkto: { pathname: "/portfolio/production" },
                tag: "제작 영상",
            },
            {
                linkto: { pathname: "/portfolio/concept" },
                tag: "콘셉트 영상",
            },
        ],
    },
    {
        title: "Notice",
        id: "board",
        menu: [
            {
                linkto: { pathname: "/board/notice" },
                tag: "공지사항",
            },
            {
                linkto: { pathname: "/board/faq" },
                tag: "FAQ",
            },
        ],
    },
    {
        title: "Admin",
        id: "admin",
        // 이 메뉴 부분에 사이트 각 메뉴 부분에 대한 데이터를 수정할 수 있는 페이지를 추가
        // 조건: Admin 메뉴는 관리자에게만 활성화 되도록 구현해야 함

        level: "Admin",
        menu: [
            {
                linkto: { pathname: "" },
                tag: "1",
            },
            {
                linkto: { pathname: "" },
                tag: "2",
            },
        ],
    },
];
