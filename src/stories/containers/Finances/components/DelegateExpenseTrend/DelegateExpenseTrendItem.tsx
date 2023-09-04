import styled from '@emotion/styled';
import CircleAvatarWithIcon from '@ses/components/CircleAvatar/CircleAvatarWithIcon';

import ArrowNavigationForCards from '@ses/components/svg/ArrowNavigationForCards';
import MultiUsers from '@ses/components/svg/MultiUsers';
import MultiUsersMobile from '@ses/components/svg/MultiUsersMobile';
import ActorLastModified from '@ses/containers/Actors/components/ActorLastModified/ActorLastModified';
import GenericDelegateCard from '@ses/containers/RecognizedDelegates/components/GenericDelegateCard';
import ExpenseReportStatusIndicator from '@ses/containers/TransparencyReport/components/ExpenseReportStatusIndicator/ExpenseReportStatusIndicator';
import { useThemeContext } from '@ses/core/context/ThemeContext';

import { BudgetStatus } from '@ses/core/models/interfaces/types';
import { capitalizeSentence } from '@ses/core/utils/string';
import lightTheme from '@ses/styles/theme/light';

import { DateTime } from 'luxon';
import React from 'react';

import { getExpenseMonthWithData, getShowCTA, getStatus, isCoreUnit } from '../../utils/utils';
import ViewButton from '../ViewButton/ViewButton';
import type { MomentDataItem } from '../../utils/types';
import type { WithIsLight } from '@ses/core/utils/typesHelpers';

interface Props {
  handleLinkToPage: (href: string) => void;
  link?: string;
  isMobile: boolean;
  expenseReport: MomentDataItem;
  now?: DateTime;
}

const DelegateExpenseTrendItem: React.FC<Props> = ({
  handleLinkToPage,
  link,
  isMobile,
  expenseReport,
  now = DateTime.now(),
}) => {
  const { isLight } = useThemeContext();
  const getDateExpenseModified = getExpenseMonthWithData(expenseReport);
  const lasModified = capitalizeSentence(
    getDateExpenseModified?.toRelative({
      base: now,
      unit: 'days',
    }) ?? ''
  );

  const handleLink = () => {
    handleLinkToPage(expenseReport.shortCode);
  };
  const isCoreUnitElement = isCoreUnit(expenseReport);

  return (
    <ExtendedGenericDelegate isLight={isLight}>
      <ContainerInside>
        <ContainerDesk>
          <ContainerMobile>
            <ActorLabel isLight={isLight}>Ecosystem Actor</ActorLabel>
            <ContainerIconName>
              <CircleAvatarWithIconStyled
                isCoreUnit={isCoreUnitElement}
                name="Image Core Unit or Delegate"
                width={isMobile ? '42px' : '34px'}
                height={isMobile ? '42px' : '34px'}
                icon={isMobile ? <MultiUsersMobile /> : <MultiUsers />}
                image={expenseReport.image}
              />
              <ContainerStatus>
                <TitleCode>
                  <Code isLight={isLight}>{expenseReport.shortCode}</Code>
                  <Title isLight={isLight}>{expenseReport.name}</Title>
                </TitleCode>
                <StatusMobile>
                  <ExpenseReportStatusIndicatorMobile
                    budgetStatus={getStatus(expenseReport.budgetStatements) || BudgetStatus.Draft}
                    showCTA={getShowCTA()}
                  />
                </StatusMobile>
              </ContainerStatus>
            </ContainerIconName>

            <ArrowMobile isLight={isLight}>
              <ArrowNavigationForCards width={32} height={32} />
            </ArrowMobile>
          </ContainerMobile>

          <ReportingMonth>
            <LabelDescription isLight={isLight}>Reporting Month</LabelDescription>
            <Date isLight={isLight}>{expenseReport.reportMonth?.toFormat('LLLL yyyy')}</Date>
          </ReportingMonth>
          <TotalActualsTable>
            <LabelDescription isLight={isLight}>Total Actuals</LabelDescription>
            <TotalNumber isLight={isLight}>{`${
              expenseReport.totalActuals.toLocaleString('es-US') || '0'
            } DAI`}</TotalNumber>
          </TotalActualsTable>
          <ContainerStatusTable>
            <StatusTable>
              <LabelStatus isLight={isLight}>Status</LabelStatus>
              <ExpenseReportStatusIndicatorTable
                budgetStatus={getStatus(expenseReport.budgetStatements)}
                showCTA={getShowCTA()}
              />
            </StatusTable>
            <ContainerArrow isLight={isLight}>
              <ArrowNavigationForCards width={32} height={32} />
            </ContainerArrow>
          </ContainerStatusTable>
          <LastModifiedDesk>
            <LabelLastModifiedText isLight={isLight}>{lasModified}</LabelLastModifiedText>
          </LastModifiedDesk>
          <ViewContainer>
            <ViewButton title="View" handleOnclick={handleLink} />
          </ViewContainer>
        </ContainerDesk>
        <Divider isLight={isLight} />
        <ContainerCardMobile>
          <ContainerReportingMobile>
            <ReportingMobile>
              <LabelTagMobile isLight={isLight}>Reporting Month</LabelTagMobile>
              <Date isLight={isLight}>{expenseReport.reportMonth?.toFormat('LLLL yyyy')}</Date>
            </ReportingMobile>
          </ContainerReportingMobile>

          <TotalContainerMobile>
            <Total isLight={isLight}>Total Actuals</Total>
            <TotalNumber isLight={isLight}>
              {`${expenseReport.totalActuals.toLocaleString('es-US') || '0'} DAI`}
            </TotalNumber>
          </TotalContainerMobile>
        </ContainerCardMobile>
      </ContainerInside>

      <FooterMobile>
        <ActorLastModified href={link || '#'} date={expenseReport.reportMonth} />
      </FooterMobile>
    </ExtendedGenericDelegate>
  );
};

export default DelegateExpenseTrendItem;

const ExtendedGenericDelegate = styled(GenericDelegateCard)<WithIsLight>(({ isLight }) => ({
  background: isLight ? '#FFFFFF' : '#10191F',
  boxShadow: isLight
    ? '0px 20px 40px rgba(219, 227, 237, 0.4), 0px 1px 3px rgba(190, 190, 190, 0.25)'
    : '0px 20px 40px -40px rgba(7, 22, 40, 0.4), 0px 1px 3px rgba(30, 23, 23, 0.25)',

  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  flex: 1,

  [lightTheme.breakpoints.up('table_834')]: {
    padding: 0,
    flexDirection: 'column',
  },
}));

const CircleAvatarWithIconStyled = styled(CircleAvatarWithIcon)<{ isCoreUnit: boolean }>(({ isCoreUnit }) => ({
  marginTop: 4,
  '& div svg path': {
    fill: isCoreUnit ? '#1AAB9B' : '#447AFB',
  },
  '& div svg rect': {
    stroke: isCoreUnit ? '#6EDBD0' : '#85A9FF',
  },
  '& div svg path:nth-of-type(3)': {
    fill: '#fff',
  },
  '& div svg path:nth-of-type(4)': {
    fill: '#fff',
  },
  [lightTheme.breakpoints.up('table_834')]: {
    marginTop: 0,
  },
}));

const ContainerInside = styled.div({
  padding: '16px 16px 8px',

  [lightTheme.breakpoints.up('table_834')]: {
    padding: '6px 8px 16px 16px',
    flexDirection: 'row',
  },
  [lightTheme.breakpoints.up('desktop_1194')]: {
    padding: '16px',
  },
});

const ContainerIconName = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: 8,
  height: 51,

  [lightTheme.breakpoints.up('table_834')]: {
    height: 'unset',
    alignItems: 'center',
  },
  [lightTheme.breakpoints.up('desktop_1194')]: {
    gap: 16,
  },
});

const TitleCode = styled.div({
  display: 'flex',
  fontFamily: 'Inter, sans-serif',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4,
  [lightTheme.breakpoints.up('desktop_1194')]: {
    width: 256,
  },
});

const Code = styled.div<WithIsLight>(({ isLight }) => ({
  color: isLight ? '#9FAFB9' : '#546978',
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: 800,
  lineHeight: 'normal',
  letterSpacing: '0.3px',
  textTransform: 'uppercase',
}));
const Title = styled.div<WithIsLight>(({ isLight }) => ({
  color: isLight ? '#231536' : '#FFF',
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  width: 175,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  [lightTheme.breakpoints.between('table_834', 'desktop_1194')]: {
    width: 175,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  [lightTheme.breakpoints.up('desktop_1194')]: {
    width: 224,
  },
}));

const Date = styled.div<WithIsLight>(({ isLight }) => ({
  color: isLight ? '#231536' : '#EDEFFF',
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
}));

const Divider = styled.div<WithIsLight>(({ isLight }) => ({
  fontSize: 11,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  borderBottom: `1px solid ${isLight ? '#D4D9E1' : '#405361'}`,
  opacity: 0.5,
  marginTop: 16,
  marginBottom: 16,
  [lightTheme.breakpoints.up('table_834')]: {
    display: 'none',
  },
}));

const TotalContainerMobile = styled.div({
  display: 'flex',
  flexDirection: 'column',

  gap: 8,
  [lightTheme.breakpoints.up('table_834')]: {
    display: 'none',
  },
});

const Total = styled.div<WithIsLight>(({ isLight }) => ({
  color: isLight ? '#708390' : '#EDEFFF',
  fontSize: 11,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
}));

const TotalNumber = styled.div<WithIsLight>(({ isLight }) => ({
  color: isLight ? '#231536' : '#EDEFFF',
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
}));

const FooterMobile = styled.div({
  display: 'flex',
  width: '100%',
  '& > div': {
    flex: 1,
  },
  '& > a': {
    flex: 1,
  },
  [lightTheme.breakpoints.up('desktop_1194')]: {
    display: 'none',
  },
});

const ActorLabel = styled.div<WithIsLight>(({ isLight }) => ({
  display: 'none',
  [lightTheme.breakpoints.between('table_834', 'desktop_1194')]: {
    display: 'flex',
    marginBottom: 8,
    color: isLight ? '#9FAFB9' : '#D2D4EF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    width: '100%',
  },
}));

const ReportingMonth = styled.div({
  display: 'none',
  [lightTheme.breakpoints.between('table_834', 'desktop_1194')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: 19,
    marginLeft: -28,
  },
  [lightTheme.breakpoints.up('desktop_1194')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 0,

    marginLeft: -20,
    width: 120,
  },

  [lightTheme.breakpoints.up('desktop_1440')]: {
    marginLeft: -40,
  },
});

const TotalActualsTable = styled.div({
  display: 'none',
  [lightTheme.breakpoints.between('table_834', 'desktop_1194')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: 19,
    marginLeft: -6,
  },
  [lightTheme.breakpoints.up('desktop_1194')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 0,
    marginLeft: -2,
    width: 130,
  },
  [lightTheme.breakpoints.up('desktop_1440')]: {
    marginLeft: 20,
  },
});

const StatusTable = styled.div({
  display: 'none',
  [lightTheme.breakpoints.between('table_834', 'desktop_1194')]: {
    display: 'flex',
    flexDirection: 'column',
    '& > div:nth-last-of-type(1)': {
      marginLeft: 0,
    },
    height: 63,

    gap: 14,
  },
  [lightTheme.breakpoints.up('desktop_1194')]: {
    display: 'flex',

    flexDirection: 'column',
    justifyContent: 'center',
    gap: 0,
    '& div:nth-of-type(2)': {
      marginLeft: 0,
    },
    width: 150,
    marginLeft: 0,
  },
  [lightTheme.breakpoints.up('desktop_1440')]: {
    marginLeft: 10,
    '& div:nth-of-type(2)': {
      marginLeft: 0,
    },
  },
});

const LabelDescription = styled.div<WithIsLight>(({ isLight }) => ({
  display: 'none',
  [lightTheme.breakpoints.between('table_834', 'desktop_1194')]: {
    display: 'flex',
    color: isLight ? '#9FAFB9' : '#D2D4EF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
}));
const LabelStatus = styled.div<WithIsLight>(({ isLight }) => ({
  display: 'none',
  [lightTheme.breakpoints.between('table_834', 'desktop_1194')]: {
    display: 'flex',
    color: isLight ? '#9FAFB9' : '#D2D4EF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
}));

const LastModifiedDesk = styled.div({
  display: 'none',
  [lightTheme.breakpoints.up('desktop_1194')]: {
    display: 'flex',

    width: 160,
  },
  [lightTheme.breakpoints.up('desktop_1440')]: {
    paddingLeft: 20,
  },
});

const ViewContainer = styled.div({
  display: 'none',
  [lightTheme.breakpoints.up('desktop_1194')]: {
    display: 'flex',
    marginTop: 2,
  },
});

const ContainerDesk = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  [lightTheme.breakpoints.up('desktop_1194')]: {
    height: 38,
  },
});

const LabelLastModifiedText = styled.div<WithIsLight>(({ isLight }) => ({
  color: isLight ? '#231536' : '#EDEFFF',
  display: 'flex',
  alignItems: 'center',
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
}));

const ContainerArrow = styled.div<WithIsLight>(({ isLight }) => ({
  display: 'none',
  [lightTheme.breakpoints.between('table_834', 'desktop_1194')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isLight ? '#F9FAFF' : 'red',
    borderRadius: '0px 6px 6px 0px',
    width: 48,
    height: 63,
    boxShadow: isLight ? '0px 2px 3px 0px #DEE1F4' : 'red',
  },
}));

const ArrowMobile = styled.div<WithIsLight>(({ isLight }) => ({
  display: 'flex',
  width: 32,
  height: 32,
  backgroundColor: isLight ? '#F0F2FA' : 'red',
  boxShadow: isLight ? '0px 2px 3px 0px #DEE1F4' : 'red',
  marginTop: 2,
  borderRadius: 6,
  [lightTheme.breakpoints.up('table_834')]: {
    display: 'none',
  },
}));

const ContainerMobile = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',

  alignItems: 'center',
  [lightTheme.breakpoints.up('table_834')]: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 'unset',
  },
});

const ContainerCardMobile = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 16,

  paddingLeft: 32,
  paddingRight: 32,
  [lightTheme.breakpoints.up('table_834')]: {
    display: 'none',
  },
});

const ContainerReportingMobile = styled.div({
  gap: 16,
  display: 'flex',
  flexDirection: 'column',
});

const LabelTagMobile = styled.div<WithIsLight>(({ isLight }) => ({
  display: 'flex',
  color: isLight ? '#9FAFB9' : '#D2D4EF',
  fontSize: 11,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
}));

const ExpenseReportStatusIndicatorMobile = styled(ExpenseReportStatusIndicator)({
  marginTop: 0,
});
const ExpenseReportStatusIndicatorTable = styled(ExpenseReportStatusIndicator)({
  marginTop: 0,
  [lightTheme.breakpoints.up('table_834')]: {
    '& > div': {
      marginLeft: 0,
    },
  },
});

const StatusMobile = styled.div({
  display: 'flex',
  [lightTheme.breakpoints.up('table_834')]: {
    display: 'none',
  },
});

const ContainerStatus = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});
const ContainerStatusTable = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: 22,
  alignItems: 'center',
  marginLeft: -2,
});
const ReportingMobile = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});
