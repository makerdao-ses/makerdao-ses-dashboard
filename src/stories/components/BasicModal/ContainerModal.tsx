import styled from '@emotion/styled';
import { useThemeContext } from '@ses/core/context/ThemeContext';
import React from 'react';
import { Close } from '../svg/close';
import CategoryItem from './CategoryItem/CategoryItem';
import CheckBoxDescription from './ChekBoxDescription/ChekBoxDescription';
import type { WithIsLight } from '@ses/core/utils/typesHelpers';

interface Props {
  headCountCategories: string[];
  noHeadCountCategories: string[];
}

const ContainerModal: React.FC<Props> = ({ headCountCategories, noHeadCountCategories }) => {
  const { isLight } = useThemeContext();

  return (
    <Container isLight={isLight}>
      <Header isLight={isLight}>
        <ContainerTitle>
          <Title isLight={isLight}>Canonical Expense Categories</Title>
          <Close />
        </ContainerTitle>
        <ContainerDescription>
          <Description isLight={isLight}>
            Canonical Expense Categories in MakerDAO are standardized classifications of expenses tailored for managing
            MakerDAO's operational costs.
          </Description>
          <CheckBoxDescription />
        </ContainerDescription>
      </Header>
      <InsideModal>
        <HeadCount isLight={isLight}>Headcount Expense Categories</HeadCount>
        <Line isLight={isLight} />
        <HeadCountList>
          {headCountCategories?.map((item) => (
            <CategoryItem category={item} />
          ))}
        </HeadCountList>
        <NoHeadCount isLight={isLight}>Non-Headcount Expense Categories </NoHeadCount>
        <Line isLight={isLight} />
        <ContainerTowColumns>
          <ContainerPar>
            {noHeadCountCategories
              ?.filter((_, index) => index % 2 === 0)
              .map((item) => (
                <CategoryItem category={item} />
              ))}
          </ContainerPar>
          <ContainerOdd>
            {noHeadCountCategories
              ?.filter((_, index) => index % 2 !== 0)
              .map((item) => (
                <CategoryItem category={item} />
              ))}
          </ContainerOdd>
        </ContainerTowColumns>
      </InsideModal>
    </Container>
  );
};
export default ContainerModal;

const Container = styled.div<WithIsLight>(({ isLight }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 32,
  background: isLight ? '#FFFFFF' : 'red',
  boxShadow: isLight ? '0px 20px 40px rgba(219, 227, 237, 0.4), 0px 1px 3px rgba(190, 190, 190, 0.25)' : 'red',
  borderRadius: '16px',
}));
const Header = styled.div<WithIsLight>(({ isLight }) => ({
  paddingLeft: 40,
  paddingRight: 40,
  paddingTop: 24,
  paddingBottom: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  background: isLight ? '#FFFFFF' : 'white',
  boxShadow: isLight ? '0px 20px 40px rgba(219, 227, 237, 0.4), 0px 1px 3px rgba(190, 190, 190, 0.25)' : 'red',
}));

const InsideModal = styled.div({
  paddingLeft: 40,
  paddingRight: 40,
});
const ContainerTitle = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 29,
});
const Title = styled.div<WithIsLight>(({ isLight }) => ({
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: 24,
  lineHeight: '29px',
  letterSpacing: '0.4px',
  color: isLight ? '#231536' : 'red',
}));

const Description = styled.div<WithIsLight>(({ isLight }) => ({
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '22px',
  color: isLight ? '#231536' : 'red',
  width: 725,
}));

const ContainerDescription = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
});

const HeadCount = styled.div<WithIsLight>(({ isLight }) => ({
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: 20,
  lineHeight: '24px',
  letterSpacing: '0.4px',
  color: isLight ? '#231536' : 'red',
  marginTop: 32,
}));

const Line = styled.div<WithIsLight>(({ isLight }) => ({
  borderBottom: isLight ? '1px solid #D4D9E1' : 'red',
  marginTop: 15,
  marginBottom: 24,
}));

const HeadCountList = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
});

const NoHeadCount = styled(HeadCount)<WithIsLight>({
  marginTop: 64,
});

const ContainerTowColumns = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
});

const ContainerPar = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: 32,
});

const ContainerOdd = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  flex: 1,
  gap: 32,
});
