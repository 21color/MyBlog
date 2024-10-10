interface IProject {
  title: string;
  description: string;
  github?: string;
  demo: string;
}

export const DevFolio: IProject[] = [
  {
    title: '장바구니 추천상품 리스트',
    description:
      '장바구니 기능을 강화하기 위해, 장바구니에 물건을 담은 회원에게 추가 구매를 유도하는 상품 추천 기능',
    demo: '',
  },
  {
    title: '고객 행동 관리 (CRM)',
    description:
      '운영자는 특정 행동 조건을 설정하여 회원을 필터링하고, 필터링된 회원들을 대상으로 SMS, 알림톡 발송 등의 액션을 하여 원하는 대상 회원들에게 구매 전환 등의 행동을 유도할 수 있는 기능',
    demo: '',
  },
  {
    title: 'imweb 메인 페이지 리뉴얼',
    description: 'imweb 메인 페이지 리뉴얼 작업',
    demo: 'https://imweb.me/',
  },
  {
    title: 'PG 서비스 개발',
    description: 'PG 서비스 연동 개발',
    demo: '',
  },
];
