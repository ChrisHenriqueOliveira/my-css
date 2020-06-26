import React, { useState, useEffect, useCallback } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SketchPicker } from 'react-color';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore (because I am with problems to install the @types of react-copy)
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { IoIosCopy } from 'react-icons/io';

import {
  Container,
  Content,
  AnimationContainer,
  SliderBar,
  SquarePreview,
  CodePreview,
  Divider,
  ColorPickers,
} from './styles';
import Menu from '../../components/Menu';

const Dashboard: React.FC = () => {
  const [codeCopied, setCodeCopied] = useState(false);

  const [allBordersValue, setAllBordersValue] = useState<number>(50);

  const [leftTopBorder, setLeftTopBorder] = useState<number>(50);
  const [rightTopBorder, setRightTopBorder] = useState<number>(50);
  const [rightBottomBorder, setRightBottomBorder] = useState<number>(50);
  const [leftBottomBorder, setLeftBottomBorder] = useState<number>(50);

  const [borderWidth, setBorderWidth] = useState<number>(10);
  const [borderStyle, setBorderStyle] = useState<string>('solid');
  const [borderColor, setBorderColor] = useState<string>('#bec8ff');
  const [backgroundColor, setBackgroundColor] = useState<string>('#bec8ff');

  const [bordersValue, setBordersValue] = useState(`
    border-radius: ${leftTopBorder}px ${rightTopBorder}px ${rightBottomBorder}px ${leftBottomBorder}px;
    -moz-border-radius: ${leftTopBorder}px ${rightTopBorder}px ${rightBottomBorder}px ${leftBottomBorder}px;
    -webkit-border-radius: ${leftTopBorder}px ${rightTopBorder}px ${rightBottomBorder}px ${leftBottomBorder}px;
    border: ${borderWidth}px ${borderStyle} ${borderColor};
    background-color: ${backgroundColor};`);

  useEffect(() => {
    setCodeCopied(false);
    setBordersValue(`
    border-radius: ${leftTopBorder}px ${rightTopBorder}px ${rightBottomBorder}px ${leftBottomBorder}px;
    -moz-border-radius: ${leftTopBorder}px ${rightTopBorder}px ${rightBottomBorder}px ${leftBottomBorder}px;
    -webkit-border-radius: ${leftTopBorder}px ${rightTopBorder}px ${rightBottomBorder}px ${leftBottomBorder}px;
    border: ${borderWidth}px ${borderStyle} ${borderColor};
    background-color: ${backgroundColor};`);
  }, [
    backgroundColor,
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
            <h1>Configurações</h1>

            <h2>Todas as bordas </h2>
            <SliderBar
              value={allBordersValue}
              valueLabelDisplay="auto"
              max={200}
              onChange={handleAllBordersChanged}
              aria-labelledby="continuous-slider"
            />
            <Divider />

            <h2>Superior esquerda </h2>

            <SliderBar
              value={leftTopBorder}
              valueLabelDisplay="auto"
              max={200}
              onChange={handleLeftTopBorderChanged}
              aria-labelledby="continuous-slider"
            />
            <h2>Superior direita </h2>

            <SliderBar
              value={rightTopBorder}
              valueLabelDisplay="auto"
              max={200}
              onChange={handleRightTopBorderChanged}
              aria-labelledby="continuous-slider"
            />
            <h2>Inferior esquerda </h2>

            <SliderBar
              value={leftBottomBorder}
              valueLabelDisplay="auto"
              max={200}
              onChange={handleLeftBottomBorderChanged}
              aria-labelledby="continuous-slider"
            />
            <h2>Inferior direita </h2>

            <SliderBar
              value={rightBottomBorder}
              valueLabelDisplay="auto"
              max={200}
              onChange={handleRightBottomBorderChanged}
              aria-labelledby="continuous-slider"
            />
            <Divider />

            <h2>Espessura da borda</h2>

            <SliderBar
              value={borderWidth}
              valueLabelDisplay="auto"
              max={200}
              onChange={handleWidthBorderChanged}
              aria-labelledby="continuous-slider"
            />
            <Divider />

            <h2>Estilo</h2>
            <select
              name="border-style"
              value={borderStyle}
              onChange={e => setBorderStyle(e.currentTarget.value)}
            >
              <option value="solid">Solid</option>
              <option value="dotted">Dotted</option>
              <option value="dashed">Dashed</option>
              <option value="double">Double</option>
              <option value="groove">Groove</option>
              <option value="ridge">Ridge</option>
              <option value="inset">Inset</option>
              <option value="outset">Outset</option>
              <option value="inherit">Inherit</option>
              <option value="hidden">Hidden</option>
              <option value="none">None</option>
            </select>

            <ColorPickers>
              <div>
                <h2>Cor da borda</h2>
                <SketchPicker
                  color={borderColor}
                  onChangeComplete={color => setBorderColor(color.hex)}
                />
              </div>
              <div>
                <h2>Cor do fundo</h2>
                <SketchPicker
                  color={backgroundColor}
                  onChangeComplete={color => setBackgroundColor(color.hex)}
                />
              </div>
            </ColorPickers>
          </div>
          <div className="preview-side">
            <h2>Preview do resultado</h2>

            <SquarePreview />

            <CodePreview>
              <div className="header">
                <h2>Código</h2>
                {codeCopied && <p>Copiado!</p>}
                <CopyToClipboard
                  text={bordersValue}
                  onCopy={() => setCodeCopied(true)}
                >
                  <IoIosCopy />
                </CopyToClipboard>
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
