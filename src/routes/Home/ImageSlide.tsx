import React, { useState } from "react";
import styled from "styled-components";
import mainTokyo from "../../Images/HomePhoto/mainTokyo.jpg";
import mainSapporo from "../../Images/HomePhoto/mainSapporo.jpg";
import mainKyoto from "../../Images/HomePhoto/mainKyoto.jpg";
import mainOsaka from "../../Images/HomePhoto/mainOsaka.jpg";

import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

const ImageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;

const MainTitle = styled.h1`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10.5vw;
  color: white;
  font-family: "Montserrat", sans-serif;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
`;

const LeftButtonContainer = styled.div`
  position: absolute;
  width: 5%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  & svg {
    color: white;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const RightButtonContainer = styled.div`
  position: absolute;
  width: 5%;
  height: 100vh;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  & svg {
    color: white;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

interface indexProps {
  currentIndex: number;
}

const DotContainer = styled("div")<indexProps>`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;

  & div:nth-child(${({ currentIndex }) => currentIndex + 1}) {
    background: white;
  }

  & div {
    width: 10px;
    height: 10px;
    border: 1px solid rgba(100, 100, 100, 0.2);
    border-radius: 100%;
    background: rgba(100, 100, 100, 0.2);
    margin: 0 5px;
  }
`;

export default function ImageSlide() {
  const [imageIndex, setImageIndex] = useState<number>(0);

  const image = [mainTokyo, mainSapporo, mainOsaka, mainKyoto];
  const name = ["TOKYO", "SAPPORO", "OSAKA", "KYOTO"];

  const imageLeftSlide = () => {
    if (imageIndex === 0) {
      setImageIndex(3);
    } else {
      setImageIndex((imageIndex) => imageIndex - 1);
    }
  };

  const imageRightSlide = () => {
    if (imageIndex === 3) {
      setImageIndex(0);
    } else {
      setImageIndex((imageIndex) => imageIndex + 1);
    }
  };

  return (
    <>
      <ImageContainer>
        <div style={{ position: "relative" }}>
          <img
            src={image[imageIndex]}
            alt="tokyo"
            style={{ width: "100vw", height: "100vh" }}
          />
          <MainTitle>{name[imageIndex]}</MainTitle>
          <DotContainer currentIndex={imageIndex}>
            <div />
            <div />
            <div />
            <div />
          </DotContainer>
        </div>
      </ImageContainer>
      <LeftButtonContainer onClick={imageLeftSlide}>
        <RiArrowLeftSLine size={50} />
      </LeftButtonContainer>
      <RightButtonContainer onClick={imageRightSlide}>
        <RiArrowRightSLine size={50} />
      </RightButtonContainer>
    </>
  );
}