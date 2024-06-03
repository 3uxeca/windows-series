"use client";
import React from "react";
import styled from "@/components/common/Gnb.module.scss";
import { useRouter } from "next/navigation";

type Props = {};

const Gnb = (props: Props) => {
  const router = useRouter();
  const moveMain = () => {
    router.push("/main");
  };
  return (
    <div className={styled.gnbContainer}>
      <div className={styled.gnbWrap}>
        <div className={styled.left}>
          <div className={styled.logo} onClick={moveMain}></div>
          <div className={styled.menuWrap}>
            <div className={styled.menuItem}>투자하기</div>
            <div className={styled.menuItem}>전문가 자문</div>
            <div className={styled.menuItem}>표절 신고</div>
            <div className={styled.menuItem}>더보기</div>
          </div>
          <div className={styled.searchWrap}>
            <input type="text" placeholder="아이디어 찾기" />
            <div className={styled.iconSearch}></div>
          </div>
        </div>
        <div className={styled.right}>
          <div className={styled.btnLogin}>로그인</div>
          <div className={styled.btnSignin}>회원가입</div>
        </div>
      </div>
    </div>
  );
};

export default Gnb;
