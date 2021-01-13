import React, { useState, useEffect } from "react";
import { useSpring, animated, interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";
import styled from "styled-components";
import window from "global";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  box-shadow: 0px 0px 25px -8px rgba(53, 53, 53, 0.82);
  overflow: hidden;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

const PageDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: center;
  font-size: 37px;
  font-weight: bold;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
`;

const StyledSVG = styled.svg`
  position: absolute;
  height: 100%;
  width: 10px; //it makes the liquid swipe occuping less size, consequently making the UI under more accessable to interact.
`;

const PageContainer = styled.div`
  //it was creating a layer that was over the buttons.
`;

const StyledButton = styled(animated.button)`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-family: "Oswald", sans-serif;
  background: transparent;
  color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  &::focus {
    outline: 0;
  }
`;

const height = window.innerHeight;
const width = window.innerWidth;
let w = width;
if (width <= 500) {
  w = width;
}

const getPath = (y, x, width) => {
  const anchorDistance = 200 + x * 0.5;
  const curviness = anchorDistance - 60;
  return `M0, 
      ${height} 
      H0V0h${width}v 
      ${y - anchorDistance} 
      c0, 
      ${curviness} 
      , 
     ${x} 
      , 
      ${curviness} 
      , 
     ${x} 
      , 
      ${anchorDistance} 
      S${width}, 
      ${y} 
      ,${width}, 
      ${y + anchorDistance * 2}
      V
      ${height}
      z`;
};

const Page = ({ children, theme, index, setActive, gone = false }) => {
  const [isGone, setGone] = useState(gone);
  const [isMove, setMove] = useState(false);
  // const { contentL1, contentL2, contentL3, src } = data;
  const [{ posX, posY }, setPos] = useSpring(() => ({
    posX: -50,
    posY: height * 0.72 - 20,
    config: {
      mass: 3,
    },
  }));
  const [{ d }, setDvalue] = useSpring(() => ({
    d: gone ? getPath(0, 0, w) : getPath(height * 0.72, 0, 0),
    config: {
      mass: 3,
    },
    onRest: () => {
      if (isGone) {
        setDvalue(getPath(0, 0, w));
      }
    },
  }));
  useEffect(() => {
    if (!gone) {
      setDvalue({
        d: getPath(height * 0.72, 48, 5),
      });
      setTimeout(() => {
        setPos({
          posX: 7,
        });
      }, 100);
    }
  }, [gone]);

  const bind = useDrag(({ down, movement: [mx], xy: [, my], vxvy: [vx] }) => {
    if (!isGone) {
      if (down && isMove) {
        setDvalue({
          d: getPath(my, mx + 60, 10),
        });
        setPos({
          posX: mx + 20,
          posY: my - 20,
        });
        if (mx > width / 2 || vx > 3) {
          setDvalue({
            d: getPath(my, -50, w),
          });
          setGone(true);
          setTimeout(() => {
            setDvalue({
              d: getPath(my, 0, w),
            });
            setActive(index);
          }, 240);
        }
      } else {
        setDvalue({
          d: getPath(height * 0.72, 48, 5),
        });
        setPos({
          posX: 7,
          posY: height * 0.72 - 20,
        });
      }
    }
  });
  return (
    <PageContainer id={`pageContainer${index}`} {...bind()}>
      <StyledSVG version="1.1" id="blob" xmlns="http://www.w3.org/2000/svg">
        <clipPath id={`clipping${index}`}>
          <animated.path id={`blob-path${index}`} d={d} />
        </clipPath>
      </StyledSVG>
      <PageDiv
        style={{
          clipPath: `url(#clipping${index})`,
          WebkitClipPath: `url(#clipping${index})`,
        }}
      >
        {children}
      </PageDiv>
      <StyledButton
        id={`button${index}`}
        color={theme}
        onMouseDown={() => {
          setMove(true);
        }}
        onMouseUp={() => {
          setMove(false);
        }}
        onTouchStart={() => {
          setMove(true);
        }}
        onTouchEnd={() => {
          setMove(false);
        }}
        style={{
          opacity: posX.interpolate({
            range: [0, 100],
            output: [1, 0],
          }),
          transform: interpolate(
            [
              posX.interpolate((x) => `translateX(${x}px)`),
              posY.interpolate((y) => `translateY(${y}px)`),
            ],
            (translateX, translateY) => `${translateX} ${translateY}`
          ),
        }}
      >
        {">"}
      </StyledButton>
    </PageContainer>
  );
};

export const LiquidSwipe = ({ components, colors }) => {
  const sizeOfSwipe = components.length;
  var keyMap = {};
  for (var i = 0; i < sizeOfSwipe - 1; i++) {
    keyMap[i] = i + 1;
  }
  keyMap[sizeOfSwipe - 1] = 0;

  const [isActive, setActive] = useState(0);
  const [elm, setElm] = useState([
    <Page
      key={0}
      index={0}
      setActive={setActive}
      gone={true}
      theme={colors[sizeOfSwipe - 1]}
    >
      {components[0]}
    </Page>,
  ]);

  useEffect(() => {
    const key = keyMap[isActive];
    if (elm.length === sizeOfSwipe - 1) {
      let skey = key - 1;
      if (key === 0) skey = sizeOfSwipe - 1;
      setTimeout(() => {
        setElm([
          ...elm.slice(1, sizeOfSwipe),
          <Page
            key={key}
            index={key}
            setActive={setActive}
            theme={colors[skey]}
          >
            {components[key]}
          </Page>,
        ]);
      }, 600);
    } else {
      setElm([
        ...elm,
        <Page
          key={key}
          index={key}
          setActive={setActive}
          theme={colors[key - 1]}
        >
          {components[key]}
        </Page>,
      ]);
    }
  }, [isActive]);
  return (
    <>
      <Container>{elm}</Container>
    </>
  );
};
