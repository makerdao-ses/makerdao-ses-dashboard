import React from 'react';
import styled from '@emotion/styled';
import { useThemeContext } from '../../../../core/context/ThemeContext';

export const TransparencyEmptyTable = () => {
  const isLight = useThemeContext().themeMode === 'light';
  return (
    <Wrapper >
      <Container isLight={isLight}>
        <Row>
          <CellBlock
            style={{
              marginRight: '111px',
            }}
          />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
        </Row>
        <Line />
        {new Array(3).fill('').map((_, i) => (
          <Row style={{ marginBottom: i === 2 ? '17px' : '30px' }}>
            <Row style={{
              gap: '0',
              maxWidth: '238px'
            }}>
              <CellBlock
                style={{
                  borderRadius: '50%',
                  maxWidth: '42px',
                  height: '42px',
                  marginRight: '5px',
                }}
              />
              <div
                style={{
                  marginRight: '20px',
                  maxWidth: '126px',
                  width: '100%',
                }}
              >
                <CellBlock
                  style={{
                    height: '22px',
                    marginBottom: '6px',
                    marginRight: '0',
                  }}
                />
                <CellBlock
                  style={{
                    height: '16px',
                    marginRight: '0',
                  }}
                />
              </div>
            </Row>
            <CellBlock />
            <CellBlock />
            <CellBlock />
            <CellBlock />
            <CellBlock
              style={{
                maxWidth: '262px',
              }}
            />
          </Row>
        ))}
        <Row>
          <CellBlock
            style={{
              marginRight: '111px',
            }}
          />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock
            style={{
              maxWidth: '262px',
            }}
          />
        </Row>
      </Container>
      <Title>No Data Provided</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  height: '329px',
  width: '100%',
  marginBottom: '64px',
  alignSelf: 'center',
});

const Title = styled.div({
  fontFamily: 'FT Base',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '38px',
  textAlign: 'center',
  letterSpacing: '0.4px',
  color: '#9FAFB9',
  zIndex: 1,
});

const Container = styled.div<{ isLight: boolean }>(({ isLight }) => ({
  display: 'block',
  position: 'absolute',
  width: '100%',
  top: 0,
  left: 0,
  padding: '16px 0px 13px 16px',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: isLight ? 'radial-gradient(white, rgba(255,255,255,0.9), rgba(255,255,255,0.9), rgba(255,255,255,0.6), rgba(255,255,255,0.1))' : 'radial-gradient(#10191F, rgb(16,25,31,100%), rgb(16,25,31,80%), rgb(16,25,31,50%),rgb(16,25,31,20%))',
    backgroundRepeat: 'no-repeat',
  },
}));

const Row = styled.div({
  display: 'flex',
  flex: 1,
});

const Line = styled.div({
  height: '1px',
  width: '100%',
  margin: '14px -16px',
  background: '#D4D9E1',
});

const CellBlock = styled.div({
  width: '100%',
  flex: 1,
  maxWidth: '126px',
  height: '32px',
  background: 'rgba(45, 193, 177, 0.2)',
  borderRadius: '6px',
  marginRight: '32px',
});
// #2DC1B1
