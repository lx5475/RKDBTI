import { MyCharacterResult } from "@services/models/MyCharacterResult";
import { StatisticsResult } from "@services/models/StatisticsResult";
import { media, size } from "@styles/size";
import styled from "styled-components";
import Image from "next/image";
import { AutoHeightImageWrapper, BaseImageWrapper } from "./BaseImageWrapper";

const Number = styled.h2<{
  mainColor: string;
}>`
  position: absolute;
  left: 20px;
  bottom: 0px;
  font-size: 80px;
  margin: 0;
  font-family: "Limelight";
  text-shadow: -6px -1px 0 #000, 2px -1px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
  color: ${({ mainColor }) => mainColor};
`;
const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${size.content_padding}px;
  border: 3px solid black;
  position: relative;
`;

const Ment = styled.div`
  font-family: "ChosunKm", serif;
  font-size: 28px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
  ${media.phone} {
    font-size: 22px;
  }
`;

const Subname = styled.div`
  font-family: "ChosunBg", sans-serif;
  margin-top: 20px;
  font-size: 20px;
  ${media.phone} {
    font-size: 16px;
    margin-top: 10px;
  }
`;

const Name = styled.h1`
  font-family: "ChosunBg", sans-serif;
  font-weight: 100;
  margin: 0;
`;

const ResultImageWrapper = styled(AutoHeightImageWrapper)`
  width: 80%;
  z-index: -10;
`;

const Statistics = styled.div`
  padding: 10px;
  border-top: 2px solid black;
  font-weight: bold;
  width: 100%;
  text-align: right;
  background-image: linear-gradient(0deg, #ffffff 50%, #c7c7c7 50%);
  background-size: 2px 2px;
`;

const Description = styled.div`
  font-weight: bold;
  margin: 20px 0;
  white-space: pre-wrap;
  font-size: 18px;
  ${media.phone} {
    font-size: 16px;
  }
`;

type Props = {
  data?: StatisticsResult;
  result: MyCharacterResult;
};

export const Result = ({ result, data }: Props) => {
  return (
    <>
      <ResultWrapper>
        <Number mainColor={result.main_color}>
          {result.unique_id.toString().padStart(2, "0")}
        </Number>
        <Ment>{`"${result.ment}"`}</Ment>
        <Subname>{result.subname}</Subname>
        <Name>{result.name}</Name>
        <ResultImageWrapper>
          <Image
            src="https://imgfiles-cdn.plaync.com/file/LoveBeat/download/20181024125815-4steztEhe2CVtxPq8tp50-v4"
            layout="fill"
            objectFit="contain" 
            alt={result.name}
          />
        </ResultImageWrapper>
        {data && (
          <Statistics>?????? ???????????? {data.percentage.toFixed(1)}%??? ??????!</Statistics>
        )}
      </ResultWrapper>
      <Description>{result.description}</Description>
    </>
  );
};
