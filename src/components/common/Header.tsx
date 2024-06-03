import React from 'react'
import styled from '@/components/common/Header.module.scss';

type Props = {}

const Header = (props: Props) => {
  return (
    <div className={styled.header}>
      <div className={styled.series0Logo}>
        <img className={styled.logoaIcon} alt="" src="/logoa.svg" />
      </div>
      <div className={styled.frameParent}>
        <div className={styled.wrapper}>
          <div className={styled.div}>투자받기</div>
        </div>
        <div className={styled.wrapper}>
          <div className={styled.div}>전문가 자문</div>
        </div>
        <div className={styled.wrapper}>
          <div className={styled.div}>표절 신고</div>
        </div>
        <div className={styled.wrapper}>
          <div className={styled.div}>더보기</div>
        </div>
      </div>
      <div className={styled.headerInner}>
        <div className={styled.parent}>
          <div className={styled.div4}>아이디어 찾기</div>
          <img
            className={styled.imgSearchSvg}
            alt=""
            src="/img--search--svg.svg"
          />
        </div>
      </div>
      <div className={styled.frameParent}>
        <div className={styled.wrapper}>
          <div className={styled.div5}>로그인</div>
        </div>
        <div className={styled.wrapper}>
          <div className={styled.div5}>회원가입</div>
        </div>
      </div>
      <div className={styled.wrapper3}>
        <div className={styled.div5}>아이디어 만들기</div>
      </div>
    </div>
  )
}

export default Header