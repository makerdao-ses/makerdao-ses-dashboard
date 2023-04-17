import styled from '@emotion/styled';
import { CircleAvatar } from '@ses/components/CircleAvatar/CircleAvatar';
import ArrowLink from '@ses/components/svg/ArrowLink';
import ClipBoard from '@ses/components/svg/ClipBoard';
import ButtonLink from '@ses/containers/RecognizedDelegates/components/ButtonLink';
import { useThemeContext } from '@ses/core/context/ThemeContext';
import { usLocalizedNumber } from '@ses/core/utils/humanization';
import { percentageRespectTo } from '@ses/core/utils/math';
import lightTheme from '@ses/styles/theme/light';
import React from 'react';
import { DelegateSocialLinks } from '../DelegateExpenseBreakdown/DelegateSocialLink';
import DelegateBarPercentTotal from './DelegateBarPercentTotal';
import GenericDelegateCard from './GenericDelegateCard';
import type { DelegateDataCard } from '@ses/core/utils/typesHelpers';

interface Props {
  delegateCard: DelegateDataCard;
  totalDai: number;
}

const DelegateExpenseBreakdownCard: React.FC<Props> = ({ delegateCard, totalDai }) => {
  const percent = percentageRespectTo(delegateCard.numberDai, totalDai);
  const humanizeTotal = usLocalizedNumber(totalDai);
  const { isLight } = useThemeContext();
  return (
    <ExtendedGenericDelegate>
      <ContainerAvatarDescription>
        <AvatarSection>
          <WalletAvatar>
            <CircleAvatarExtended
              isLight={isLight}
              width="48px"
              height="48px"
              name={delegateCard.walletName || 'Wallet'}
              image={delegateCard.imageUrl}
            />
            <NameAddressColumn>
              <Name>{delegateCard.walletName}</Name>
              <ClipBoardRow>
                <Address>{delegateCard.address}</Address>
                <ClipBoardContainer>
                  <ClipBoard />
                </ClipBoardContainer>
              </ClipBoardRow>
            </NameAddressColumn>
          </WalletAvatar>
          <WalletLink>
            <ArrowLink fill={isLight ? '#447AFB' : '#626472'} href={delegateCard.address} />
          </WalletLink>
        </AvatarSection>
        <DescriptionSection>
          <ContainerBar>
            <PercentTitle>% of Total</PercentTitle>
            <PercentBarContainer>
              <ContainerBarDelegate>
                <DelegateBarPercentTotal numberDai={delegateCard.numberDai} totalDai={totalDai} />
              </ContainerBarDelegate>
              <PercentNumber>{Math.trunc(percent || 0)}%</PercentNumber>
            </PercentBarContainer>
          </ContainerBar>
          <ContainerTotal>
            <TotalTitle>Total DAI Comp</TotalTitle>
            <Total>
              {humanizeTotal}
              <span>DAI</span>
            </Total>
          </ContainerTotal>
        </DescriptionSection>
      </ContainerAvatarDescription>

      <SocialIconsSection>
        {delegateCard.links && (
          <LinkContainer>
            <DelegateSocialLinks links={delegateCard.links} fillDark="#ADAFD4" />
          </LinkContainer>
        )}
        <ContainerButton>
          <ButtonLink iconName="arrowLink" label="Profile" href="" />
        </ContainerButton>
      </SocialIconsSection>
    </ExtendedGenericDelegate>
  );
};

export default DelegateExpenseBreakdownCard;
const ExtendedGenericDelegate = styled(GenericDelegateCard)({
  padding: '8px',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  [lightTheme.breakpoints.up('table_834')]: {
    padding: '16px',
    height: 138,
  },
});

const AvatarSection = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 24,
  [lightTheme.breakpoints.up('table_834')]: {
    flex: 1,
    marginBottom: 25,
  },
});

const WalletAvatar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const NameAddressColumn = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 8,
});

const Name = styled.div({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '17px',
  color: '#231536',
});

const Address = styled.div({
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '15px',
  color: '#447AFB',
});

const WalletLink = styled.div({
  marginRight: 4,
  marginTop: 5,
  [lightTheme.breakpoints.up('table_834')]: {
    display: 'none',
  },
});

const DescriptionSection = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 24,
  marginLeft: 8,
  marginRight: 8,
  marginTop: 1,
  [lightTheme.breakpoints.up('table_834')]: {
    flex: 1,
    marginRight: 0,
  },
});
const ContainerBar = styled.div({
  display: 'flex',
  flexDirection: 'column',
  [lightTheme.breakpoints.up('table_834')]: {
    flex: 1,
    marginLeft: -18,
  },
});

const PercentTitle = styled.div({
  fontWeight: 400,
  fontSize: '11px',
  lineHeight: '13px',
  color: '#708390',
  marginBottom: 8,
  [lightTheme.breakpoints.up('table_834')]: {
    marginBottom: 16,
  },
});

const ContainerTotal = styled.div({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: 1,
  [lightTheme.breakpoints.up('table_834')]: {
    textAlign: 'end',
  },
});

const TotalTitle = styled.div({
  fontWeight: 400,
  fontSize: '11px',
  lineHeight: '13px',
  color: '#708390',
  textAlign: 'end',
});
const Total = styled.div({
  display: 'flex',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '17px',
  textTransform: 'uppercase',
  fontFeatureSettings: "'tnum' on, 'lnum' on",
  color: '#231536',
  marginTop: 8,
  '& > span': {
    fontWeight: 600,
    color: '#9FAFB9',
    marginLeft: 4,
  },
  [lightTheme.breakpoints.up('table_834')]: {
    marginTop: 16,
    fontSize: '16px',
    lineHeight: '18px',
    '& > span': {
      fontWeight: 600,
      color: '#9FAFB9',
      marginLeft: 8,
    },
  },
});

const PercentBarContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: -1,
});

const PercentNumber = styled.div({
  width: 34,
  height: 15,
  alignItems: 'center',
  fontWeight: 300,
  fontSize: '12px',
  lineHeight: '15px',

  textAlign: 'right',
  textTransform: 'uppercase',
  fontFeatureSettings: "'tnum' on, 'lnum' on",
  color: '#231536',
  marginTop: 1,
});

const SocialIconsSection = styled.div({
  display: 'flex',
  flexDirection: 'row',
  margin: '0 auto',
  [lightTheme.breakpoints.up('table_834')]: {
    justifyContent: 'space-between',
    margin: 'unset',
  },
});

const ContainerBarDelegate = styled.div({
  marginRight: 4,
  width: 140,
});

const CircleAvatarExtended = styled(CircleAvatar)<{ isLight?: boolean }>(({ isLight }) => ({
  boxShadow: isLight ? '2px 4px 7px rgba(26, 171, 155, 0.25)' : '2px 4px 7px rgba(26, 171, 155, 0.25)',
}));

const ClipBoardRow = styled.div({
  display: 'flex',
  marginTop: 4,
  flexDirection: 'row',
  alignItems: 'center',
});

const ClipBoardContainer = styled.div({
  marginLeft: 16,
  display: 'flex',
  alignItems: 'center',
  [lightTheme.breakpoints.up('table_834')]: {
    marginLeft: 2,
  },
});

const ContainerButton = styled.div({
  display: 'none',
  [lightTheme.breakpoints.up('table_834')]: {
    display: 'flex',
    width: 107,
  },
});

const ContainerAvatarDescription = styled.div({
  display: 'flex',
  flexDirection: 'column',
  [lightTheme.breakpoints.up('table_834')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const LinkContainer = styled.div({
  [lightTheme.breakpoints.up('table_834')]: {
    marginLeft: 8,
  },
});
