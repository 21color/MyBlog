import AWSImg from '@/assets/skills/aws-2.svg';
import Emotion from '@/assets/skills/emotion.png';
import GithubAction from '@/assets/skills/github-icon.svg';
import NextJs from '@/assets/skills/next-js.svg';
import ReactQuery from '@/assets/skills/react-query-logo.png';
import ReactSvg from '@/assets/skills/react.svg';
import Sass from '@/assets/skills/sass.svg';
import StoryBook from '@/assets/skills/storybook-icon.svg';
import TypeScriptSvg from '@/assets/skills/Typescript_logo_2020.svg';
import ViteSvg from '@/assets/skills/vite.svg';
import VueSvg from '@/assets/skills/vue-svgrepo-com.svg';
import ZustandImg from '@/assets/skills/zustand.png';
import { borderRadius } from '@/styles/keyFrames';
import styled from '@emotion/styled';
import { forwardRef, useState } from 'react';
import { IntroduceProps } from './Introduce';

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

const keyBoardKeyList: KeyBoardKeyList = {
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

interface MySkillDescription {
  title: string;
  description: string;
}

const mySkillDescriptionList: MySkillDescription[] = [
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

export const MySkills = forwardRef<HTMLDivElement, IntroduceProps>((props, ref) => {
  const [activeSkill, setActiveSkill] = useState('');

  const isShowSkill = activeSkill !== '';

  const { active } = props;

  return (
    <Container active={active} ref={ref}>
      <IntroSkills>
        <h1>키보드의 키를 눌러보세요.</h1>
        <p>저는 이런것들을 할 수 있답니다.</p>
      </IntroSkills>

      <MySkillItem></MySkillItem>

      <Desk openSkill={isShowSkill}>
        {mySkillDescriptionList.map((skill, index) => {
          if (activeSkill !== skill.title) return null;
          return (
            <SkillDescription key={index}>
              <h1>{skill.title}</h1>
              <p>{skill.description}</p>
            </SkillDescription>
          );
        })}
      </Desk>
      <MySkillKeyBoard openSkill={isShowSkill}>
        <MySkillKeyBoardInner>
          <LineTop>
            <LineTopKey className="esc">
              <span className="fa-solid fa-arrow-right"></span>
            </LineTopKey>

            {keyBoardKeyList.lineTop.map((key, index) => (
              <LineTopKey className={key === '' ? 'hidden' : ''} key={index}>
                <span>{key}</span>
              </LineTopKey>
            ))}
          </LineTop>
          <LineMain>
            {keyBoardKeyList.lineMain.map((key, index) => (
              <LineMainKey
                active={activeSkill !== '' && activeSkill === key.key}
                key={index}
                className={
                  key.key === 'CLICK SKILL KEY' ? 'spaceBar' : key.key === 'RESET' ? 'enter' : ''
                }
                onClick={() => {
                  if (!key.event) return;
                  if (key.key === 'RESET') {
                    setActiveSkill('');
                  } else {
                    setActiveSkill(key.key);
                  }
                }}>
                {key.src ? <img src={key.src} alt={key.key} /> : <span>{key.key}</span>}
              </LineMainKey>
            ))}
          </LineMain>
        </MySkillKeyBoardInner>
      </MySkillKeyBoard>
    </Container>
  );
});

const Container = styled.div<{ active: boolean }>`
  display: flex;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.5s;
  opacity: ${(props) => (props.active ? 1 : 0)};
  width: 144rem;
  height: 72rem;
  padding-top: 15rem;
  padding-bottom: 15rem;
  position: relative;
  margin-bottom: 5rem;
`;

const Desk = styled.div<{ openSkill: boolean }>`
  position: absolute;

  transition: 0.5s;
  width: ${(props) => (props.openSkill ? '43rem' : '90rem')};
  transform: ${(props) => (props.openSkill ? 'translate(44rem, -9rem)' : 'translate(-9rem)')};
  height: ${(props) => (props.openSkill ? '43rem' : '60rem;')};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #fc9e5b 0%, #ffff8c 100%);
  animation: ${borderRadius} 5s linear infinite reverse;
`;

const MySkillKeyBoard = styled.div<{ openSkill: boolean }>`
  transition: 0.5s;
  width: 60%;
  height: 70%;

  transform: ${(props) =>
    props.openSkill
      ? 'translate(-20rem, -2.3rem) rotate(0deg)'
      : 'translate(0rem, -2.3rem) rotate(7deg);'};

  border-radius: 2rem;
  border-bottom: 0.1rem solid #c5b4fb;

  box-shadow: 0rem 3rem 8rem #c681738f;
  background-image: linear-gradient(135deg, #c8b7ff 10%, #caa7a2 100%);
`;

const MySkillKeyBoardInner = styled.div`
  padding: 1rem;
  align-items: center;
  width: 90%;
  border-radius: 1rem;
  display: flex;

  flex-direction: column;

  justify-content: space-between;

  box-shadow: 0rem 2rem 6rem #736abb;
  position: relative;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  height: 85%;
  background-image: linear-gradient(120deg, #c8b7ff 10%, #9d8bdd 100%);
`;

const LineMain = styled.div`
  width: 100%;
  display: flex;
  transform: translateY(-1rem);
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  height: 65%;
`;

const LineTop = styled.div`
  width: 95%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const LineTopKey = styled.div`
  transition: 0.5s;
  box-shadow:
    inset -1rem 1rem 3rem white,
    0.5rem 1rem 3rem #836ba1cb;
  border-radius: 1rem;
  width: 8rem;
  height: 8rem;
  margin: 0.5rem;
  background: whitesmoke;
  text-align: center;
  line-height: 8rem;

  span {
    font-family: 'Pretendard-Regular';
    font-size: 2rem;
    color: #6c65a0;
  }

  &.esc {
    background: #fbacd3;
    width: 10rem;
    box-shadow: 0.5rem 1rem 3rem #836ba1cb;
    font-size: 2rem;
    color: #6c65a0;
  }

  &.hidden {
    visibility: hidden;
    width: 2rem;
  }
`;

const LineMainKey = styled.div<{ active: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  text-align: center;
  width: 8rem;
  height: 8rem;
  background: whitesmoke;
  border-radius: 1rem;
  margin: 0.5rem;
  box-shadow: ${(props) =>
    props.active
      ? '0.5rem 1rem 3rem #baf0e4cb'
      : 'inset -1rem 1rem 3rem white, 0.5rem 1rem 3rem #836ba1cb'};

  font-size: 2rem;
  font-family: 'Pretendard-Regular';
  color: #6c65a0;

  img {
    width: 6rem;
  }

  &:hover {
    box-shadow: 0.5rem 1rem 3rem #baf0e4cb;
  }

  &.spaceBar {
    width: 35rem;
    height: 8rem;
    background: whitesmoke;
    box-shadow: 0.5rem 1rem 3rem #836ba1cb;
  }

  &.enter {
    width: 20rem;
    background: #ffd452;
    -webkit-box-shadow: 0.5rem 1rem 3rem #836ba1cb;
    box-shadow: 0.5rem 1rem 3rem #836ba1cb;
    letter-spacing: 1rem;
    color: white;
    text-shadow: 0rem 0rem 2rem #f0ab65;
  }
`;

const SkillDescription = styled.div`
  width: 30rem;
  height: 30rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  letter-spacing: 0.7rem;
  overflow-wrap: wrap;
  justify-content: space-evenly;
  text-align: left;

  h1 {
    display: inline-block;
    font-size: 3.5rem;
    color: white;
    font-family: 'GowunDodum-Regular';
    letter-spacing: 0.7rem;
  }
  p {
    font-size: 1.8rem;
    text-shadow: -1rem 1rem 3rem #e38b4c;
    color: white;
    font-family: 'GowunDodum-Regular';
  }
`;

const MySkillItem = styled.div`
  width: 15rem;
  position: absolute;
  height: 15rem;
  -webkit-transform: translate(50rem, -30rem) rotate(-30deg);
  transform: translate(50rem, -30rem) rotate(-30deg);
  background: #4cf9df;
  background: radial-gradient(circle, #b8ff99 0%, #83fee1 100%);
  border-radius: 5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const IntroSkills = styled.div`
  position: absolute;
  opacity: 1;

  transform: translate(-22rem, -45rem);
  transition: 1s;
  line-height: 2rem;
  padding: 2rem;
  letter-spacing: 0.5rem;

  h1 {
    margin: 0.5rem;
    text-indent: 2rem;
    font-size: 2.5rem;
    padding: 1rem;
  }

  p {
    display: inline-block;
    font-size: 1.8rem;
    letter-spacing: 0.3rem;
    margin: 0.5rem;
  }

  &::before {
    font-size: 2rem;
    content: '\f10d';
    color: #ffbe92;
    position: absolute;
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
  }

  &::after {
    font-size: 2rem;
    content: '\f10e';
    color: #ffbe92;
    position: absolute;
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
  }
`;
