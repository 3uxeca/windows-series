import React from "react";
import styled from "@/components/main/MainComponent.module.scss";

type Props = {
  title: string;
  desc: string;
};

const SectionTitle = ({ title, desc }: Props) => {
  return (
    <div className={styled.sectionTitle}>
      <div className={styled.desc}>{desc}</div>
      <div className={styled.title}>{title}</div>
    </div>
  );
};

export default SectionTitle;
