import styled, { keyframes } from "styled-components";

function Home() {
  return (
    <HomeWrapper>
      <FullScreenImageWrapper>
      </FullScreenImageWrapper>
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  overflow: hidden;
`;

const FullScreenImageWrapper = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;