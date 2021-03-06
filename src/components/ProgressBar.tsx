import { size } from "@styles/size";
import styled from "styled-components";

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  font-weight: bold;
  font-size: 14px;
  padding: 10px ${size.content_padding}px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1px;
  background: white;
  border-top: 1px solid #eee;
  width: calc(100% - 2px);
  max-width: calc(500px - 2px);

  @media (min-height: ${size.container_height}px) {
    bottom: calc(50% - ${size.container_height / 2}px + 1px);
  }
`;

const ProgressBackground = styled.div`
  height: 5px;
  background: #eee;
  border: 1px solid black;
  flex: 1;
  margin-right: 10px;
`;

const ProgressForeground = styled.div`
  height: 100%;
  background: #222;
`;

type Props = {
  current: number;
  total: number;
};

export const ProgressBar = ({ current, total }: Props) => {
  const progress = (current / total) * 100;

  return (
    <ProgressBarWrapper>
      <ProgressBackground>
        <ProgressForeground
          style={{ width: `${progress}%`, transition: "all 200ms" }}
        ></ProgressForeground>
      </ProgressBackground>
      {current} / {total}쪽
    </ProgressBarWrapper>
  );
};
