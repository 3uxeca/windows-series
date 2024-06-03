import React from "react";
import styled from "@/components/main/Main.module.scss";
import MainComponent from "./MainComponent";
import IdeaList from "./IdeaList";

type Props = {};

const MainPageComponent = (props: Props) => {
  return (
    <>
      <div className={styled.group}>
        <div className={styled.contactForGlobal}>
          <p className={styled.p}>
            <span className={styled.span}>당신만의 창업의 문을 열다!</span>
            <span>창업준비단계에 있는 예비창업자와</span>
          </p>
          <p className={styled.p}>투자자의 연결을 지원하는 종합창업플랫폼</p>
          <div className={styled.icon}></div>
        </div>
      </div>
      <MainComponent />
    </>
  );
};

export default MainPageComponent;
