export const Pages = {
  top: {
    displayName: "トップページ",
    path: "/",
  },
  project: {
    displayName: "企画一覧",
    path: "/project",
  },
  projectGroup: {
    displayName: "企画一覧",
    path: "/project/group",
  },
  projectDetail: {
    displayName: "企画一覧",
    path: (groupName: string): string => `/project/detail/${groupName}`,
  },
  access: {
    displayName: "アクセス",
    path: "/access",
  },
  greeting: {
    displayName: "ごあいさつ",
    path: "/greeting",
  },
  caution: {
    displayName: "諸注意",
    path: "/caution",
  },
  timetable: {
    displayName: "タイムテーブル",
    path: "/timetable",
  },
  timetableDetail: {
    displayName: "タイムテーブル",
    path: (day: string, place): string => `/timetable/${day}/${place}`,
  },
};

export const ToShowPages = [
  Pages.top,
  Pages.project,
  Pages.access,
  Pages.greeting,
  Pages.caution,
  Pages.timetable,
];
