import React from "react";
import styled from "@/components/main/MainComponent.module.scss";
import CategoryItem from "./CategoryItem";

type Props = {};

const IdeaList = (props: Props) => {
  const categoryData = [
    { id: 1, categoryNm: "전체", class: "all" },
    { id: 2, categoryNm: "BEST 투자", class: "best" },
    { id: 3, categoryNm: "농림업", class: "agriculture" },
    { id: 4, categoryNm: "광업", class: "mining" },
    { id: 5, categoryNm: "제조업", class: "manufacturing" },
    { id: 6, categoryNm: "음식료/담배", class: "food" },
    { id: 7, categoryNm: "섬유/의류", class: "apparel" },
    { id: 8, categoryNm: "종이/목재", class: "wood" },
    { id: 9, categoryNm: "출판/매체복제", class: "publishing" },
    { id: 10, categoryNm: "화학", class: "chemicals" },
    { id: 11, categoryNm: "자약", class: "herbal" },
    { id: 12, categoryNm: "비금속", class: "nonmetals" },
    { id: 13, categoryNm: "금속", class: "metals" },
    { id: 14, categoryNm: "기계장비", class: "mechanical" },
    { id: 15, categoryNm: "일반전기전자", class: "electrical" },
    { id: 16, categoryNm: "의료/정밀기계", class: "medical" },
  ];
  return (
    <div className={`${styled.wrapper} ${styled.ideaList}`}>
      <div className={styled.swiperWrap}>swiper 들어갈 곳</div>
      <div className={styled.categoryWrap}>
        {categoryData?.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <CategoryItem data={item} />
            </React.Fragment>
          );
        })}
      </div>
      <div className={styled.listWrap}>
        {/* 카테고리에 따라 url 변경하고 데이터 가져와서 뿌릴건지? */}
        목록 들어갈 곳
      </div>
    </div>
  );
};

export default IdeaList;
