const authNavigations = {
  AUTH_HOME: 'AuthHome',
  LOGIN: 'Login',
  SIGNUP: 'Signup',
} as const;

const mainNavigations = {
  HOME: 'Home',
  BOARDHOME: 'BoardHome',
  BOARD: 'Board',
  EDITBOARD: 'EditBoard',
  MYPAGE: 'MyPage',
  EDITPERSONALINFO: 'EditPersonalInfo',
  VISITRECORD: 'VisitRecord',
} as const;

export {authNavigations, mainNavigations};
