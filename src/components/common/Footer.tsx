import React from 'react'
import styled from '@/components/common/Footer.module.scss';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styled.footer}>
      <div className={styled.footerChild} />
      <div className={styled.pdcA111Container}>
        <p className={styled.pdcA111}>
          <span className={styled.span37}>시리즈제로</span>
          <span className={styled.span38}>｜</span>
          <span className={styled.span37}>대표이사 고태현</span>
          <span className={styled.span38}>｜</span>
          <span className={styled.span37}>사업자등록번호 258-87-01370</span>
          <span className={styled.span38}>｜</span>
          <span className={styled.span37}>
            통신판매업신고번호 2021-성남분당-1003
          </span>
          <span className={styled.span38}>｜</span>
          <span>경기 성남시 분당구 판교로 202 PDC A동 111호</span>
        </p>
        <p className={styled.pdcA111}>
          <span>이메일 상담 info@series0.kr</span>
          <span className={styled.span38}>｜</span>
          <span className={styled.span37}>유선 상담 1661-9099</span>
        </p>
        <p className={styled.p}>© Series0 Co., Ltd.</p>
      </div>
      <div className={styled.footer1}>
        <div className={styled.contactForGlobal}>정책 · 약관</div>
        <div className={styled.contactForGlobal}>개인정보처리방침</div>
      </div>
      <div className={styled.footer2}>
        <div className={styled.contactForGlobal}>제휴문의</div>
        <div className={styled.contactForGlobal}>공지사항</div>
        <div className={styled.contactForGlobal}>인재채용</div>
      </div>
      <div className={styled.div87}>
        <p className={styled.p}>
          일부 상품의 경우 시리즈제로는 통신판매중개자이며 통신판매 당사자가
          아닙니다.
        </p>
        <p className={styled.p}>
          해당되는 상품의 경우 상품, 상품정보, 거래에 관한 의무와 책임은
          스타트업에게 있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기
          바랍니다.
        </p>
      </div>
      <div className={styled.series0Logo1}>
        <img className={styled.logoaIcon} alt="" src="/logoa1.svg" />
      </div>
      <div className={styled.footerParent}>
        <div className={styled.footer3}>
          <div className={styled.contactForGlobal}>시리즈제로 고객센터</div>
          <div className={styled.contactForGlobal}>{`채팅 상담하기 >`}</div>
          <div className={styled.contactForGlobal}>{`문의 등록하기 >`}</div>
          <div
            className={styled.contactForGlobal}
          >{`도움말 센터 바로가기 >`}</div>
          <div
            className={styled.contactForGlobal}
          >{`Contact for Global >`}</div>
        </div>
        <div className={styled.div92}>
          <p className={styled.p}>상담 가능 시간</p>
          <p className={styled.p}>
            평일 오전 9시 ~ 오후 6시 (주말, 공휴일 제외)
          </p>
        </div>
      </div>
      <div className={styled.linkImgFacebookSvgParent}>
        <img
          className={styled.linkImgFacebookSvg}
          alt=""
          src="/link--img--facebook--svg.svg"
        />
        <img
          className={styled.linkImgBlogSvg}
          alt=""
          src="/link--img--blog--svg.svg"
        />
        <img
          className={styled.linkImgYoutubeSvg}
          alt=""
          src="/link--img--youtube--svg.svg"
        />
        <img
          className={styled.linkImgInstagramSvg}
          alt=""
          src="/link--img--instagram--svg.svg"
        />
      </div>
    </div>
  )
}

export default Footer