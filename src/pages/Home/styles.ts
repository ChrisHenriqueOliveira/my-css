import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;

  h1 {
    font: 32px Roboto, sans-serif;
    font-weight: 700;
    color: #000;
  }
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  margin: 24px auto;

  width: 1280px;
  height: 750px;
  padding: 16px;

  display: flex;

  background-color: #fff;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);

  animation: ${appearFromTop} 1s;

  .config-side {
    /* background-color: green; */
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .preview-side {
    /* background-color: blue; */
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h2 {
      width: 400px;
      margin-bottom: 24px;
      font: 24px Roboto, sans-serif;
      font-weight: 500;
      color: #000;
    }
  }
`;

export const SquarePreview = styled.div`
  height: 400px;
  width: 400px;
  background-color: #bec8ff;
  margin-bottom: 32px;
`;

export const CodePreview = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  height: 200px;
  width: 400px;
  background-color: #f0f2fd;
  border: 1px solid #000;
  border-radius: 8px;

  .header {
    display: flex;
    justify-content: space-between;
    color: #000;

    h2 {
      width: 100%;
      margin-bottom: 8px;
      font: 24px Roboto, sans-serif;
      font-weight: 500;
    }

    svg {
      height: 25px;
      width: 25px;
    }
  }

  p {
    white-space: pre;
    color: #000;
    line-height: 24px;
  }
`;
