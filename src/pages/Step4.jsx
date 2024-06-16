import styled from "styled-components";
import { useRef, useState } from "react";
import SectionCode from "../components/SectionCode";
import SectionTitle from "../components/SectionTitle";

const Step4 = () => {
  const layoutRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: "100%",
  });

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    setDimensions({
      width: `${e.clientX}px`,
    });
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <SectionTitle>Responsive Layout</SectionTitle>
      <StContainer ref={layoutRef} style={{ width: dimensions.width }}>
        <StLayout>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus a
          officia eligendi iste similique aperiam repudiandae architecto saepe
          ex minus! Tempora accusamus id quibusdam voluptate aliquid, velit nemo
          ab ipsa?
        </StLayout>
        <ResizeHandle onMouseDown={handleMouseDown} />
      </StContainer>
      <SectionCode>
        {`width: min(100% - 15px, 840px);
margin-inline: auto;`}
      </SectionCode>
    </>
  );
};

const StContainer = styled.div`
  border: 1px solid #000;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;

const StLayout = styled.div`
  border: 1px solid #666666;
  width: min(100% - 15px, 840px);
  margin-inline: auto;
`;

const ResizeHandle = styled.div`
  width: 10px;
  height: 10px;
  background: #000;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: se-resize;
`;

export default Step4;
