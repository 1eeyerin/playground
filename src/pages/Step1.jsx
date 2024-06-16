import CodeWrapper from "../components/CodeWrapper";
import SectionTitle from "../components/SectionTitle";

const Step1 = () => {
  return (
    <div>
      <SectionTitle>marquee</SectionTitle>
      <CodeWrapper>
        <marquee>test</marquee>
      </CodeWrapper>
      <CodeWrapper>
        <marquee direction="right" bgcolor="pink">
          test
        </marquee>
      </CodeWrapper>
      <CodeWrapper>
        <marquee scrollamount="2" direction="right">
          test
        </marquee>
      </CodeWrapper>
      <CodeWrapper>
        <marquee direction="right" behavior="alternate">
          test
        </marquee>
      </CodeWrapper>
    </div>
  );
};

export default Step1;
