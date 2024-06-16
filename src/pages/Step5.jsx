import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import SectionCode from "../components/SectionCode";

const Step5 = () => {
  return (
    <div>
      <SectionTitle>background-clip: text</SectionTitle>
      <StWord>Yerin</StWord>
      <SectionCode>{`  background-image: url(imgUrl);
  color: transparent;
  background-clip: text;`}</SectionCode>
    </div>
  );
};

const StWord = styled.strong`
  font-size: 180px;
  font-weight: 700;
  background-image: url("https://i.imgur.com/RRtrvGb.gif");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  color: transparent;
  background-clip: text;
`;

export default Step5;
