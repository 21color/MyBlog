import DsImg from '@/assets/ds.png';
import AWSImg from '@/assets/skills/aws-2.svg';
import Emotion from '@/assets/skills/emotion.png';
import GithubAction from '@/assets/skills/github-icon.svg';
import JavaScriptImg from '@/assets/skills/JavaScript_logo_2.svg';
import NextJs from '@/assets/skills/next-js.svg';
import ReactQuery from '@/assets/skills/react-query-logo.png';
import ReactSvg from '@/assets/skills/react.svg';
import Sass from '@/assets/skills/sass.svg';
import StoryBook from '@/assets/skills/storybook-icon.svg';
import Tailwind from '@/assets/skills/tailwind.svg';
import TypeScriptSvg from '@/assets/skills/Typescript_logo_2020.svg';
import ViteSvg from '@/assets/skills/vite.svg';
import VueSvg from '@/assets/skills/vue-svgrepo-com.svg';
import ZustandImg from '@/assets/skills/zustand.png';

import CartUpsell from '@/assets/1.png';
import CRMImg from '@/assets/2.png';
import Ect from '@/assets/3.png';

type Skill = {
  title: string;
  src: string;
};
interface IProject {
  title: string;
  description: string;
  skills: Skill[];
  Contribution: number;
  github?: string;
  img?: string;
  demo: string;
}

interface MySkillDescription {
  title: string;
  description: string;
}

type LineKeyBoardKey = string[];
type MainKeyBoardKey = {
  key: string;
  src?: string;
  event: boolean;
};

interface KeyBoardKeyList {
  lineTop: LineKeyBoardKey;
  lineMain: MainKeyBoardKey[];
}

export const keyBoardKeyList: KeyBoardKeyList = {
  lineTop: ['M', 'Y', '', 'S', 'K', 'I', 'L', 'L'],
  lineMain: [
    { key: 'H', event: false },
    { key: 'React', src: ReactSvg, event: true },
    { key: 'TypeScript', src: TypeScriptSvg, event: true },
    { key: 'Emotion', src: Emotion, event: true },
    { key: 'Vue', src: VueSvg, event: true },
    { key: 'SCSS', src: Sass, event: true },
    { key: 'StoryBook', src: StoryBook, event: true },
    { key: '', event: false },
    { key: 'A', event: false },
    { key: 'Next', src: NextJs, event: true },
    { key: 'ReactQuery', src: ReactQuery, event: true },
    { key: 'Vite', src: ViteSvg, event: true },
    { key: 'Zustand', src: ZustandImg, event: true },
    { key: 'AWS', src: AWSImg, event: true },
    { key: 'GithubAction', src: GithubAction, event: true },
    { key: '', event: false },
    { key: 'N', event: false },
    { key: 'A', event: false },
    { key: 'CLICK SKILL KEY', event: false },
    { key: 'RESET', event: true },
  ],
};

export const mySkillDescriptionList: MySkillDescription[] = [
  {
    title: 'React',
    description:
      '컴포넌트 기반 구조와 상태 관리를 통해 효율적이고 직관적인 UI 구현이 가능합니다. 다양한 프로젝트에서 사용자와의 상호작용을 구현하며, 재사용 가능한 컴포넌트를 설계할 수 있습니다.',
  },
  {
    title: 'TypeScript',
    description:
      '정적 타입을 지원하여 코드의 안정성을 높이고, 타입 추론을 통해 코드 작성 시 오류를 사전에 방지할 수 있습니다. 대규모 프로젝트에서도 일관된 코드 작성이 가능하며, 코드 리팩토링 및 유지보수를 효율적으로 처리할 수 있습니다.',
  },
  {
    title: 'Emotion',
    description:
      'CSS-in-JS 방식의 스타일링 라이브러리로, JavaScript 내에서 스타일을 정의하고 동적으로 상태에 따라 변경할 수 있습니다. 스타일 컴포넌트의 가독성을 높이고, TypeScript와의 호환성 덕분에 개발 효율성을 극대화할 수 있습니다.',
  },
  {
    title: 'Vue',
    description:
      'Vue.js를 활용하여 컴포넌트 기반의 유연하고 반응형 UI를 설계할 수 있습니다. Vuex를 통해 상태 관리를 효율적으로 처리하고, 다양한 프로젝트에서 복잡한 사용자 인터페이스를 구현할 수 있습니다.',
  },
  {
    title: 'SCSS',
    description:
      'SCSS를 사용하여 유지보수와 확장성이 뛰어난 스타일을 작성할 수 있습니다. 중첩 구조와 믹스인, 변수 등을 활용하여 스타일 일관성을 유지하고, 복잡한 스타일도 쉽게 관리할 수 있도록 설계합니다.',
  },
  {
    title: 'StoryBook',
    description:
      'Storybook을 통해 UI 컴포넌트를 독립적으로 개발하고 테스트할 수 있습니다. 디자인 시스템과 UI 컴포넌트의 재사용성을 극대화하여 개발 효율성을 높이고, 팀원들과의 협업을 원활하게 진행합니다.',
  },
  {
    title: 'Next',
    description:
      'Next.js를 사용해 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 효과적으로 구현하며, 페이지 로딩 속도를 최적화하고 SEO를 향상시킵니다. 다양한 프로젝트에서 최적화된 웹 애플리케이션을 개발할 수 있습니다.',
  },
  {
    title: 'ReactQuery',
    description:
      'React Query를 사용하여 비동기 데이터 상태 관리를 쉽게 처리하고, 데이터 캐싱 및 리액티브 데이터 패칭 전략을 통해 API 호출을 최적화합니다. 다양한 애플리케이션에서 데이터 페칭 로직을 간소화하고, 성능을 개선하는 데 기여했습니다.',
  },
  {
    title: 'Vite',
    description:
      'Vite를 통해 빠른 개발 환경을 구축하고, 모듈 번들링 최적화 및 HMR(Hot Module Replacement)을 활용해 개발 생산성을 극대화합니다. 다양한 프로젝트에서 Vite 기반의 개발 환경을 설정하고, 효율적인 빌드 프로세스를 관리해왔습니다.',
  },
  {
    title: 'Zustand',
    description:
      'Zustand를 사용하여 가볍고 직관적인 전역 상태 관리를 구현할 수 있습니다. React 애플리케이션에서 간편한 상태 관리를 통해 복잡성을 줄이고, 상태 및 액션 관리의 명확한 분리를 통해 코드의 가독성과 유지보수성을 향상시켰습니다.',
  },
  {
    title: 'AWS',
    description:
      'AWS S3와 CloudFront를 사용하여 정적 웹사이트를 배포하고, 글로벌 캐싱을 통해 성능을 최적화할 수 있습니다. CloudFront를 통한 CDN 설정으로 사용자 경험을 개선하고, S3 버킷 정책을 활용한 보안 설정 경험도 보유하고 있습니다.',
  },
  {
    title: 'GithubAction',
    description:
      'GitHub Actions를 활용하여 CI/CD 파이프라인을 구축하고, 자동화된 테스트 및 배포 환경을 구성해 왔습니다. 워크플로우 파일을 작성하고, 다양한 이벤트 기반 작업을 자동화하여 코드 품질을 유지하고, 배포 속도를 개선했습니다.',
  },
];

export const DevFolio: IProject[] = [
  {
    title: '구매 상품 추천',
    Contribution: 100,
    skills: [
      {
        title: 'React',
        src: ReactSvg,
      },
      {
        title: 'TypeScript',
        src: TypeScriptSvg,
      },
      {
        title: 'Emotion',
        src: Emotion,
      },
      {
        title: 'Vite',
        src: ViteSvg,
      },
      {
        title: 'react-query',
        src: ReactQuery,
      },
      {
        title: 'AWS',
        src: AWSImg,
      },
      {
        title: 'github-action',
        src: GithubAction,
      },
    ],
    img: CartUpsell,
    description:
      '장바구니 기능을 강화하기 위해 장바구니에 물건을 담은 회원에게 추가 구매를 유도하는 상품 추천 기능입니다.',
    demo: 'https://www.notion.so/106402af5750801fa24edda446514065?pvs=4',
  },
  {
    title: '고객 행동 관리 (CRM)',
    Contribution: 100,
    skills: [
      {
        title: 'React',
        src: ReactSvg,
      },
      {
        title: 'TypeScript',
        src: TypeScriptSvg,
      },
      {
        title: 'Emotion',
        src: Emotion,
      },
      {
        title: 'Vite',
        src: ViteSvg,
      },
      {
        title: 'react-query',
        src: ReactQuery,
      },
      {
        title: 'AWS',
        src: AWSImg,
      },
      {
        title: 'github-action',
        src: GithubAction,
      },
    ],
    img: CRMImg,
    description:
      '운영자는 특정 행동 조건을 설정하여 회원을 필터링하고, 필터링된 회원들을 대상으로 SMS, 알림톡 발송 등의 액션을 하여 원하는 대상 회원들에게 구매 전환 등의 행동을 유도할 수 있는 기능입니다.',
    demo: 'https://www.notion.so/CRM-106402af57508010a0cef4f60b6aefaa?pvs=4',
  },
  {
    title: 'Design System',
    Contribution: 100,
    img: DsImg,
    skills: [
      {
        title: 'React',
        src: ReactSvg,
      },
      {
        title: 'TypeScript',
        src: TypeScriptSvg,
      },
      {
        title: 'Emotion',
        src: Emotion,
      },
      {
        title: 'StoryBook',
        src: StoryBook,
      },
    ],
    description:
      '다양한 프로젝트에서 사용되는 UI 컴포넌트를 Storybook을 활용하여 문서화하고, 재사용성을 높이기 위한 디자인 시스템을 구축했습니다. 지속적으로 업데이트 중입니다',
    demo: 'https://design-system-ccjidej8a-21colors-projects.vercel.app/',
  },

  {
    title: '그 외 프로젝트',
    Contribution: 100,
    img: Ect,
    skills: [
      {
        title: 'JavaScript',
        src: JavaScriptImg,
      },
      {
        title: 'Vue',
        src: VueSvg,
      },
      {
        title: 'Tailwind',
        src: Tailwind,
      },
    ],
    description: '그 외 다양한 프로젝트에서 프론트엔드 개발을 담당했습니다.',
    demo: 'https://www.notion.so/120402af575080499a5ac3824692dbdf?pvs=4',
  },
];
