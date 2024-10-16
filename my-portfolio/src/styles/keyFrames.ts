import { keyframes } from '@emotion/react';

export const imageSize = keyframes`
  0% {
    background-position: left;
  }
  50% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
`;

export const scrollPlz = keyframes`
  0% {
    
            transform: translate(50rem, 30rem);
  }
  50% {
    
            transform: translate(50rem, 27rem);
  }
  100% {
    
            transform: translate(50rem, 30rem);
  }
`;

export const mouseClickFocus = keyframes`
  0% {
    box-shadow: inset -0.5rem -1rem 3rem rgba(240, 244, 255, 0.664);
  }
  25% {
    background: rgba(255, 255, 240, 0.559);
    box-shadow: 
    inset -0.5rem -1rem 3rem rgba(240, 244, 255, 0.764),
    2rem -3rem 6rem rgba(174, 234, 240, 0.732);
  }
  50% {
    box-shadow: inset -0.5rem -1rem 3rem rgba(240, 244, 255, 0.664);
  }
  75% {
    background: rgba(255, 255, 240, 0.559);
    box-shadow: 
    inset -0.5rem -1rem 3rem rgba(240, 244, 255, 0.764),
    2rem -3rem 6rem rgba(174, 234, 240, 0.732);
  }
  100% {
    box-shadow: inset -0.5rem -1rem 3rem rgba(240, 244, 255, 0.664);
  }
`;

export const focusDoor = keyframes`
  0% {
    
            box-shadow: .5rem -1rem 3rem #546989c1;
  }
  25% {
    
            box-shadow: 2rem -2rem 6rem rgba(253, 240, 153, 0.856);
  }
  50% {
    
            box-shadow: .5rem -1rem 3rem #546989c1;
  }
  75% {
    
            box-shadow: 2rem -2rem 6rem rgba(153, 253, 250, 0.856);
  }
  100% {
    
            box-shadow: .5rem -1rem 3rem #546989c1;
  }
`;

export const dutationBall = keyframes`

0% {
    ate(-40rem, -5rem);
            transform: translate(-40rem, -5rem);
    border-radius: 2rem;
  }
  25% {
    
            transform: translate(5rem, 0rem);
    border-radius: 10rem;
  }
  50% {
    
            transform: translate(-50rem, 10rem);
    border-radius: 50%;
  }
  100% {
    
            transform: translate(-40rem, -5rem);
    border-radius: 2rem;
  }
`;

export const slame = keyframes`
  0% {
    border-radius: 50% 50% 50% 70%/50% 50% 70% 60%;
  }
  25% {
    border-radius: 80% 30% 50% 50%/50%;
  }
  50% {
    border-radius: 40% 40% 50% 40%/30% 50% 50% 50%;
  }
  100% {
    border-radius: 50% 50% 50% 70%/50% 50% 70% 60%;
  }
`;

export const upDownIcon = keyframes`
  0% {
    margin-top: .5rem;
  }
  50% {
    margin-top: 0rem;
  }
  100% {
    margin-top: .5rem;
  }
`;

export const borderRadius = keyframes`
  0% {
    border-radius: 60rem 40rem 40rem 30rem;
  }
  25% {
    border-radius: 15rem 25rem 20rem 30rem;
  }
  50% {
    border-radius: 30rem 40rem 50rem 20rem;
  }
  100% {
    border-radius: 60rem 40rem 40rem 30rem;
  }
`;

export const door = keyframes`
  0% {
    
            transform: translate(-10rem);
  }
  50% {
    
            transform: translate(-5rem);
  }
  100% {
    
            transform: translate(-10rem);
  }
`;

export const scrollPlz2 = keyframes`
  0% {
    
            transform: translate(-5rem, 23rem);
  }
  50% {
    
            transform: translate(-5rem, 21rem);
  }
  100% {
    
            transform: translate(-5rem, 23rem);
  }
`;

export const headMoving = keyframes`
  0% {
            transform: rotate(-2deg);
  }
  50% {

            transform: rotate(0deg);
  }
  100% {
  
            transform: rotate(-2deg);
  }
`;

export const eyeHoleMoving = keyframes`
  0% {
    border-top: 1rem solid #fdcabc;
  }
  20% {
    border-top: 0.8rem solid #fdcabc;
  }
  50% {
    border-top: 1.5rem solid #fdcabc;
  }
  70% {
    border-top: 0.8rem solid #fdcabc;
  }
  100% {
    border-top: 1rem solid #fdcabc;
  }
`;

export const eyeMoving = keyframes`
0% {

          transform: translate(0.5rem, 0.7rem) rotate(-10deg);
}
25% {

          transform: translate(0rem, 0.7rem) rotate(-10deg);
}
50% {
          transform: translate(1rem, 0.7rem) rotate(-10deg);
}
`;

export const armWorking = keyframes`
0% {
          transform: translate(15rem, 18rem);
}
50% {

          transform: translate(15rem, 21rem);
}
100% {
          transform: translate(15rem, 18rem);
}
`;

export const mouseMoving = keyframes`
  0% {
            transform: translate(1rem, 23rem) rotate(15deg);
  }
  50% {
            transform: translate(1rem, 20rem) rotate(-5deg);
  }
  100% {
            transform: translate(1rem, 23rem) rotate(10deg);
  }
`;

export const keyPadNock = keyframes`
0% {
  background: #d4d8ff;
          box-shadow: -0.1rem -0.3rem 0.3rem #b694e6;
}
50% {
  background: white;
          box-shadow: 0.1rem 0.3rem 0.3rem #b694e6;
}
100% {
  background: #d4d8ff;
          box-shadow: -0.1rem -0.3rem 0.3rem #b694e6;
}
`;

export const balling = keyframes`
  0% {
  }
  25% {
            transform: translate(100rem, 0rem) rotate(90deg);
  }
  50% {
            transform: translate(100rem, 50rem) rotate(0deg);
    background: #bfffac;
  }
  100% {
            transform: rotate(-2rem, 50rem) rotate(180deg);
  }
`;

export const rotating = keyframes`
0% {
          transform: rotate(-15deg);
}
50% {
  
          transform: rotate(5deg);
}
100% {
  
          transform: rotate(-15deg);
}
`;

export const toggleAnimation = keyframes`
  0% {
    margin-bottom: 0rem;
  }
  50% {
    margin-bottom: 1rem;
  }
  100% {
    margin-bottom: 0rem;
  }
`;
