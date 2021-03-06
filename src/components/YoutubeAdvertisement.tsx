import styled from "styled-components";
import { SectionTitle } from "./SectionTitle";
import Link from "next/link"
import { media, size } from "@styles/size";
import Image from "next/image";

const Wrapper = styled.div`
    border: 3px solid black;
    padding: ${size.content_padding}px;
`

const AdWrapper = styled.div`
  display: flex;
`;

const SubTitle = styled.div`
  text-align: center;
  font-family: "ChosunBg", serif;
  font-size: 20px;
`;

const Title = styled(SubTitle)`
  margin: 0;
  font-size: 30px;
`;

const Ad = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    flex: 1;
    text-align: center;
    margin-top: 20px;
    padding 10px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 16px;
    b {
        font-size: 18px;
    }
    cursor: pointer;
    &:hover {
        background: #eee;
        transition: all 0.3s;
    }
    ${media.phone} {
        font-size: 12px;
        b {
            font-size: 16px;
        }
    }
`

const CircleImageWrapper = styled.div`
    img {
        border-radius: 50%;
        width: 90%;
    }
    margin-bottom: 14px;
`

type Props = {
  subtitle: string;
  title: string;
  youtubeUrl: string;
  twitchUrl: string;
};

export const YoutubeAdvertisement = ({ title, subtitle, youtubeUrl, twitchUrl }: Props) => {
  return (
    <>
      <SectionTitle>{`π μ κΈ°...μ΄κ²λ λ΄μ£Όμ§ μμλ?`}</SectionTitle>
      <Wrapper>
        <SubTitle>{subtitle}</SubTitle>
        <Title>{title}</Title>
        <AdWrapper>
            <Link href={youtubeUrl}>
                <Ad>
                    <CircleImageWrapper>
                        <Image
                          src="https://via.placeholder.com/120x120.png" 
                          width={120}
                          height={120}
                          alt="youtube railkim"
                        />
                    </CircleImageWrapper>
                    {`μ μμ§λ κ΄κΈ°μ νμ `}
                    <b>μ νλΈ μ±λ λ°λ‘κ°κΈ°</b>
                </Ad>
            </Link>
            <Link href={twitchUrl}>
                <Ad>
                    <CircleImageWrapper>
                      <Image
                          src="https://via.placeholder.com/120x120.png" 
                          width={120}
                          height={120}
                          alt="youtube railkim"
                      />
                    </CircleImageWrapper>
                    {`λ€μ ν μ€νμΏ  μΉκ΅¬`}
                    <b>νΈμμΉ μλ°© μ~λͺ© 5μ</b>
                </Ad>
            </Link>
        </AdWrapper>
      </Wrapper>
    </>
  );
};
