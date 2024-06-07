'use client'
import React, { act, useEffect, useState } from 'react'
import styled from '@/components/idea/Idea.module.scss';
import FileUpload from './FileUpload';

type Props = { 
  activeIndex: number; 
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const RegisterComponents = ({activeIndex, setActiveIndex}: Props) => {
  const isBrowser = () => typeof window !== 'undefined';
  const [repreFiles, setRepreFiles] = useState<File[]>([]);
  const [detailFiles, setDetailFiles] = useState<File[]>([]);
  const [attachFiles, setAttachFiles] = useState<File[]>([]);

  useEffect(() => {
    console.log("repreFiles :: ", repreFiles);
  }, [repreFiles]);
  useEffect(() => {
    console.log("detailFiles :: ", detailFiles);
  }, [detailFiles]);
  useEffect(() => {
    console.log("attachFiles :: ", attachFiles);
  }, [attachFiles]);    
  const handleChangeNextStep = () => {
    setActiveIndex(activeIndex+1); 
    if(!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });   
  }
  const onSubmit = () => {
    console.log("최종 업로드");
  }
  const tempSave = () => {
    console.log("임시 저장 현재 인덱스 :: ", activeIndex);
  }
  const preview = () => {
    console.log("미리보기");
  }
  const Step1 = () => {
    return (
      <>
      <div className={`${styled.section} ${styled.idea}`}>
        <div className={styled.sectionTitle}>
          <span>1</span> 아이디어 입력
        </div>        
        <div className={styled.form}>
          <div className={styled.label}>아이디어명</div>
          <input type="text" placeholder='아이디어명을 입력하세요' />
        </div>
        <div className={styled.form}>
          <div className={styled.label}>아이디어 설명</div>
          <textarea placeholder='아이디어 설명을 입력하세요' />
        </div>        
        <div className={styled.form}>
          <div className={`${styled.label} ${styled.hasDesc}`}>대표 이미지</div>
          <div className={styled.desc}>아이디어 리스트에 노출되는 대표 이미지를 업로드합니다.<br/>10장의 JPEG, JPG, PNG 파일을 업로드할 수 있습니다.</div>
          <FileUpload 
            uploadData={repreFiles}
            setUploadData={setRepreFiles} 
            // setReadyUpload={}
            extList={["jpeg","jpg","png"]}
            limitCnt={10}
            type={"image"}
            id={"representative"}
          />
        </div>
        <div className={styled.form}>
          <div className={`${styled.label} ${styled.hasDesc}`}>아이디어 상세 이미지</div>
          <div className={styled.desc}>투자자에게 투자대상으로 선정받기 위해서는 아이디어의 상세한 설명과 표현이 중요합니다.</div>
          <FileUpload 
            uploadData={detailFiles}
            setUploadData={setDetailFiles} 
            // setReadyUpload={}
            extList={["jpeg","jpg","png"]}
            limitCnt={10}
            type={"image"}
            id={"detail"}
          />          
        </div> 
        <div className={`${styled.form} ${styled.select}`}>
          <div className={styled.left}>
            <div className={styled.label}>산업군 선택</div>
            <div className={styled.desc}>(1개만 선택 가능)</div>
          </div>
          <select>
            <option>산업군을 선택하세요</option>
          </select>
        </div>     
        <div className={styled.form}>
          <div className={`${styled.label} ${styled.hasDesc}`}>아이디어 첨부파일</div>
          <div className={styled.desc}>아이디어를 표현한 기획서, 사업계획서 등의 문서를 선택하여 업로드 합니다.</div>
          <FileUpload 
            uploadData={attachFiles}
            setUploadData={setAttachFiles} 
            // setReadyUpload={}
            extList={[]}
            limitCnt={10}
            type={"etc"}
            id={"attach"}
          />             
        </div>           
      </div>
      <div className={styled.btnWrap}>
        <div className={`${styled.btn} ${styled.white}`} onClick={tempSave}>임시저장</div>
        <div className={styled.btn} onClick={handleChangeNextStep}>다음</div>
      </div>
      </>
    )
  }
  const Step2 = () => {
    return (
      <>
      <div className={`${styled.section} ${styled.price}`}>
        <div className={styled.sectionTitle}>
          <span>2-1</span> 상품가격결정
        </div>       
        <div className={styled.sectionDesc}>
          예비창업자님의 아이디어 투자를 위해서는 해당 아이디어의 사업화과정을 포함한 소비자 가격 결정과 가격을 기반으로 한 매출계획이 수립되어야 합니다.<br/>본 매출계획은 간단한 입력만으로 자동화될 수 있게 설계되어 있으며, 각 항목 별 설명을 쉽게 확인할 수 있습니다.
        </div>
      </div>
      <div className={`${styled.section} ${styled.price}`}>
        <div className={styled.sectionTitle}>
          <span>2-2</span> 매출계획 수립
        </div> 
        <div className={styled.sectionDesc}>
          예비창업자님의 아이디어 투자를 위해서는 해당 아이디어의 사업화과정을 포함한 소비자 가격 결정과 가격을 기반으로 한 매출계획이 수립되어야 합니다.<br/>본 매출계획은 간단한 입력만으로 자동화될 수 있게 설계되어 있으며, 각 항목 별 설명을 쉽게 확인할 수 있습니다.          
        </div>              
      </div>
      <div className={styled.btnWrap}>
        <div className={`${styled.btn} ${styled.white}`} onClick={tempSave}>임시저장</div>
        <div className={styled.btn} onClick={handleChangeNextStep}>다음</div>
      </div>      
      </>
    )
  }
  const Step3 = () => {
    return (
      <>
      <div className={`${styled.section} ${styled.goal}`}>
        <div className={styled.sectionTitle}>
          <span>3-1</span> 기업가치평가
        </div>                    
        <div className={styled.sectionDesc}>
          예비창업자님의 아이디어 투자를 위해서는 해당 아이디어의 사업화과정을 포함한 소비자 가격 결정과 가격을 기반으로 한 매출계획이 수립되어야 합니다.<br/>본 매출계획은 간단한 입력만으로 자동화될 수 있게 설계되어 있으며, 각 항목 별 설명을 쉽게 확인할 수 있습니다.
        </div>        
      </div>
      <div className={`${styled.section} ${styled.goal}`}>  
        <div className={styled.sectionTitle}>
          <span>3-2</span> 투자목표 설정
        </div>                  
        <div className={styled.sectionDesc}>
          예비창업자님의 아이디어 투자를 위해서는 해당 아이디어의 사업화과정을 포함한 소비자 가격 결정과 가격을 기반으로 한 매출계획이 수립되어야 합니다.<br/>본 매출계획은 간단한 입력만으로 자동화될 수 있게 설계되어 있으며, 각 항목 별 설명을 쉽게 확인할 수 있습니다.
        </div>        
      </div>   
      <div className={styled.btnWrap}>
        <div className={`${styled.btn} ${styled.white}`} onClick={tempSave}>임시저장</div>
        <div className={styled.btn} onClick={handleChangeNextStep}>다음</div>
      </div>         
      </>

    )
  }
  const Step4 = () => {
    return (
      <>
      <div className={`${styled.section} ${styled.final}`}>
        <div className={`${styled.sectionTitle} ${styled.final}`}>
          <span>1</span> 아이디어 입력
        </div>    
      </div>
      <div className={`${styled.section} ${styled.final}`}>
        <div className={`${styled.sectionTitle} ${styled.final}`}>
          <span>2-1</span> 상품가격결정
        </div> 
      </div>
      <div className={`${styled.section} ${styled.final}`}>
        <div className={`${styled.sectionTitle} ${styled.final}`}>
          <span>2-2</span> 매출계획 수립
        </div> 
      </div>
      <div className={`${styled.section} ${styled.final}`}>
        <div className={`${styled.sectionTitle} ${styled.final}`}>
          <span>3-1</span> 기업가치평가
        </div>      
      </div>      
      <div className={`${styled.section} ${styled.final}`}>      
        <div className={`${styled.sectionTitle} ${styled.final}`}>
          <span>3-2</span> 투자목표 설정
        </div>         
      </div>
      <div className={styled.btnWrap}>
        <div className={`${styled.btn} ${styled.white}`} onClick={tempSave}>임시저장</div>
        <div className={`${styled.btn} ${styled.white}`} onClick={preview}>미리보기</div>
        <div className={styled.btn} onClick={onSubmit}>최종 업로드</div>
      </div>      
      </>
    )
  }
  const renderComponents = () => {
    switch (activeIndex) {
      case 0: 
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Step4 />;
      default:
        return <Step1 />;
    }
  }
  return (
    <div className={styled.sectionContents}>
      {renderComponents()}
    </div>    
  )
}

export default RegisterComponents