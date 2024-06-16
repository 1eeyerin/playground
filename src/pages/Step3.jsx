import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import SectionCode from "../components/SectionCode";

const IMAGE_URL =
  "https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png";

const Step3 = () => {
  return (
    <div>
      <SectionTitle>drop shadow</SectionTitle>
      <StImg1 src={IMAGE_URL} alt="" />
      <SectionCode>{`box-shadow: 1px 1px 10px yellow;`}</SectionCode>
      <StImg2 src={IMAGE_URL} alt="" />
      <SectionCode>{`filter: drop-shadow(1px 1px 10px yellow);`}</SectionCode>
    </div>
  );
};

const StImg1 = styled.img`
  width: 100px;
  height: 100px;
  box-shadow: 1px 1px 10px yellow;
`;

const StImg2 = styled.img`
  width: 100px;
  height: 100px;
  filter: drop-shadow(1px 1px 10px yellow);
`;

export default Step3;
