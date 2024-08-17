import styled from '@emotion/styled';
import Mysvg from '@/assets/mysvg.svg?react';

export const Home = () => {

  const menus = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]


  return (
    <PortFolioSection>
      <MySvg />
      <DoorContainer>
        <Title>HANA's<br />Room</Title>
      </DoorContainer>
      <Introment /> 
      <SelectMenuBox>
        {menus.map((menu, index) => (
          <div key={index}>
            <a href={`#${menu.id}`}>{menu.name}</a>
          </div>
        ))}
      </SelectMenuBox>
    </PortFolioSection>
  )
}

const SelectMenuBox = styled.div`
-webkit-transition: 0.5s;
transition: 0.5s;
position: absolute;
-ms-flex-item-align: center;
    align-self: center;
width: 60rem;
height: 60rem;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
border-radius: 50%;
z-index: 10;
padding: 1rem;
visibility: hidden;
background: rgba(255, 255, 255, 0.206);
-webkit-backdrop-filter: blur(1rem);
        backdrop-filter: blur(1rem);
opacity: 0;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
-ms-flex-wrap: wrap;
    flex-wrap: wrap;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
-ms-flex-line-pack: center;
    align-content: center;
border: 0.1rem solid white;
`;

const Introment = styled.div``;

const Title = styled.h1`
background: linear-gradient(80deg, #ff7f43 0%, #fcdb7b 100%);
letter-spacing: 1rem;
font-family: "GmarketSansMedium";
background-clip: text;
-webkit-background-clip: text;
color: transparent;
-webkit-transform: translate(-40rem);
        transform: translate(-40rem);
padding: 5%;
font-size: 5rem;
-webkit-transition: 1s;
transition: 1s;
opacity: 0;
-ms-flex-item-align: stretch;
    -ms-grid-row-align: stretch;
    align-self: stretch;
position: absolute;
`;

const DoorContainer = styled.div`
width: 100%;
height: 72rem;
padding-bottom: 20rem;
position: relative;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
flex-direction: row;
align-items: center;
flex-wrap: wrap;

justify-content: center;
`;

const MySvg = styled(Mysvg)`
  stroke-dasharray: 300;
  fill: none;
  stroke-width: 1.5;
  stroke-miterlimit: 10;
  position: absolute;
  height: 100%;
  -webkit-transition: 0.5s;
  transition: 0.5s;

  .st0 {
    stroke-dasharray: 300;
    fill: none;
    stroke-width: 1.5;
    stroke-miterlimit: 10;
    position: absolute;
    height: 100%;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  .stop1 {
    -webkit-transition: 0.5s;
    transition: 0.5s;
    stop-color: #48f5c4;
  }
  
  .stop2 {
    -webkit-transition: 0.5s;
    transition: 0.5s;
    stop-color: #fff375;
  }
  
  .stop3 {
    -webkit-transition: 0.5s;
    transition: 0.5s;
    stop-color: #ffa9a4;
  }
  
  .stop4 {
    -webkit-transition: 0.5s;
    transition: 0.5s;
    stop-color: #8a7bff;
  }
`;

const PortFolioSection = styled.section`
    font-family: "GowunDodum-Regular";
    height: 100vh;
    overflow: hidden;
    width: 100%;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    color: #4D4637;
    background: ivory;
    scroll-behavior: smooth;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    text-rendering: optimizeSpeed;
    background-size: cover;
    background-repeat: no-repeat;
`;