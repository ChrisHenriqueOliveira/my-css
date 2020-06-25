import React, { useState, useEffect, useCallback } from 'react';

import Slider from '@material-ui/core/Slider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IoIosCopy } from 'react-icons/io';

import {
  Container,
  Content,
  AnimationContainer,
  SquarePreview,
  CodePreview,
} from './styles';
import Menu from '../../components/Menu';

const Dashboard: React.FC = () => {
  const [allBordersValue, setAllBordersValue] = useState<number>(50);

  const [leftTopBorder, setLeftTopBorder] = useState<number>(50);
  const [rightTopBorder, setRightTopBorder] = useState<number>(50);
  const [rightBottomBorder, setRightBottomBorder] = useState<number>(50);
  const [leftBottomBorder, setLeftBottomBorder] = useState<number>(50);

  const [borderWidth, setBorderWidth] = useState<number>(2);
  const [borderStyle, setBorderStyle] = useState<string>('solid');
  const [borderColor, setBorderColor] = useState<string>('#000');

  const [bordersValue, setBordersValue] = useState(`
    border-radius: ${leftTopBorder}px ${rightTopBorder}px ${rightBottomBorder}px ${leftBottomBorder}px;
    -moz-border-radius: ${leftTopBorder}px ${rightTopBorder}px ${rightBottomBorder}px ${leftBottomBorder}px;
    -webkit-border-radius: ${leftTopBorder}px ${rightTopBorder}px ${rightBottomBorder}px ${leftBottomBorder}px;
    border: ${borderWidth}px ${borderStyle} ${borderColor};`);

  useEffect(() => {
    setBordersValue(`
    border-radius: ${leftTopBorder}px ${rightTopBorder}px ${rightBottomBorder}px ${leftBottomBorder}px;
    -moz-border-radius: ${leftTopBorder}px ${rightTopBorder}px ${rightBottomBorder}px ${leftBottomBorder}px;
    -webkit-border-radius: ${leftTopBorder}px ${rightTopBorder}px ${rightBottomBorder}px ${leftBottomBorder}px;
    border: ${borderWidth}px ${borderStyle} ${borderColor};`);
  }, [
    borderColor,
    borderStyle,
    borderWidth,
    leftBottomBorder,
    leftTopBorder,
    rightBottomBorder,
    rightTopBorder,
  ]);

  const handleAllBordersChanged = useCallback(
    (event: any, newValue: number | number[]) => {
      setAllBordersValue(newValue as number);

      setLeftTopBorder(newValue as number);
      setRightTopBorder(newValue as number);
      setLeftBottomBorder(newValue as number);
      setRightBottomBorder(newValue as number);
    },
    [],
  );

  const handleLeftTopBorderChanged = useCallback(
    (event: any, newValue: number | number[]) => {
      setLeftTopBorder(newValue as number);
    },
    [],
  );

  const handleRightTopBorderChanged = useCallback(
    (event: any, newValue: number | number[]) => {
      setRightTopBorder(newValue as number);
    },
    [],
  );

  const handleLeftBottomBorderChanged = useCallback(
    (event: any, newValue: number | number[]) => {
      setLeftBottomBorder(newValue as number);
    },
    [],
  );

  const handleRightBottomBorderChanged = useCallback(
    (event: any, newValue: number | number[]) => {
      setRightBottomBorder(newValue as number);
    },
    [],
  );

  const handleWidthBorderChanged = useCallback(
    (event: any, newValue: number | number[]) => {
      setBorderWidth(newValue as number);
    },
    [],
  );

  return (
    <Container>
      <Content>
        <Menu />
        <h1>CSS Border generator</h1>
        <AnimationContainer>
          <div className="config-side">
            <Slider
              value={allBordersValue}
              max={200}
              onChange={handleAllBordersChanged}
              aria-labelledby="continuous-slider"
            />
            <Slider
              value={leftTopBorder}
              max={200}
              onChange={handleLeftTopBorderChanged}
              aria-labelledby="continuous-slider"
            />
            <Slider
              value={rightTopBorder}
              max={200}
              onChange={handleRightTopBorderChanged}
              aria-labelledby="continuous-slider"
            />
            <Slider
              value={leftBottomBorder}
              max={200}
              onChange={handleLeftBottomBorderChanged}
              aria-labelledby="continuous-slider"
            />
            <Slider
              value={rightBottomBorder}
              max={200}
              onChange={handleRightBottomBorderChanged}
              aria-labelledby="continuous-slider"
            />
            <Slider
              value={borderWidth}
              max={200}
              onChange={handleWidthBorderChanged}
              aria-labelledby="continuous-slider"
            />
          </div>
          <div className="preview-side">
            <h2>Result Preview</h2>
            <SquarePreview />

            <CodePreview>
              <div className="header">
                <h2>Code Result</h2>
                <IoIosCopy />
              </div>
              <p>{bordersValue}</p>
            </CodePreview>
          </div>
        </AnimationContainer>
      </Content>
      <ToastContainer />
    </Container>
  );
};

export default Dashboard;
