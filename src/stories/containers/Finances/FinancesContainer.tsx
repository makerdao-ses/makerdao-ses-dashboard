import styled from '@emotion/styled';
import Container from '@ses/components/Container/Container';
import PageContainer from '@ses/components/Container/PageContainer';
import { SEOHead } from '@ses/components/SEOHead/SEOHead';
import { useFlagsActive } from '@ses/core/hooks/useFlagsActive';
import { toAbsoluteURL } from '@ses/core/utils/urls';
import lightTheme from '@ses/styles/theme/light';
import React from 'react';
import BreakdownChartSection from './components/BreakdownChartSection/BreakdownChartSection';
import ConditionalWrapper from './components/ConditionalWrapper/ConditionalWrapper';
import OverviewCardMobile from './components/OverviewCardMobile/OverviewCardMobile';
import BreadcrumbYearNavigation from './components/SectionPages/BreadcrumbYearNavigation';
import BreakdownTable from './components/SectionPages/BreakdownTable/BreakdownTable';
import CardChartOverview from './components/SectionPages/CardChartOverview/CardChartOverview';
import CardsNavigation from './components/SectionPages/CardsNavigation/CardsNavigation';
import DelegateExpenseTrendFinances from './components/SectionPages/DelegateExpenseTrendFinances/DelegateExpenseTrendFinances';
import MakerDAOExpenseMetricsFinances from './components/SectionPages/MakerDAOExpenseMetrics/MakerDAOExpenseMetrics';
import ReservesWaterFallChartSection from './components/SectionPages/ReservesWaterFallChartSection/ReservesWaterFallChartSection';
import { useFinances } from './useFinances';
import type { Budget } from '@ses/core/models/interfaces/budget';
import type { WithIsLight } from '@ses/core/utils/typesHelpers';

interface Props {
  budgets: Budget[];
  yearsRange: string[];
  initialYear: string;
}

const FinancesContainer: React.FC<Props> = ({ budgets, yearsRange, initialYear }) => {
  const [isEnabled] = useFlagsActive();
  const {
    cardOverViewSectionData,
    handleChangeYears,
    year,
    cardsToShow,
    breakdownTable,
    loadMoreCards,
    handleLoadMoreCards,
    makerDAOExpensesMetrics,
    breakdownChartSectionData,
    expenseReportSection,
    trailingAddress,
    reserveChart,
  } = useFinances(budgets, initialYear);

  return (
    <PageContainer>
      <SEOHead
        title="MakerDAO | Finances"
        description="MakerDAO Finances page provides a structured overview of MakerDAO's budgets, from high-level finances to detailed legacy and endgame allocations "
        image={{
          src: toAbsoluteURL('/assets/img/social-385x200.png'),
          width: 385,
          height: 200,
        }}
        twitterImage={toAbsoluteURL('/assets/img/social-1200x630.png')}
      />
      <BreadcrumbYearNavigation
        trailingAddress={trailingAddress}
        years={yearsRange}
        handleChange={handleChangeYears}
        selectedValue={year}
        trailingAddressDesk={trailingAddress}
        title="Finances"
        hasIcon={false}
      />

      <Container>
        <ContainerTitle isLight={breakdownChartSectionData.isLight}>MakerDAO Finances</ContainerTitle>
        <ContainerSections>
          <WrapperDesk>
            <CardChartOverview
              filters={cardOverViewSectionData.filters}
              filterSelected={cardOverViewSectionData.filterSelected}
              handleSelectFilter={cardOverViewSectionData.handleSelectFilter}
              actuals={cardOverViewSectionData.actuals}
              budgetCap={cardOverViewSectionData.budgetCap}
              prediction={cardOverViewSectionData.prediction}
              doughnutSeriesData={cardOverViewSectionData.doughnutSeriesData}
              isCoreThirdLevel={false}
              changeAlignment={cardOverViewSectionData.changeAlignment}
              showSwiper={cardOverViewSectionData.showSwiper}
              numberSliderPerLevel={3}
            />
          </WrapperDesk>
          <WrapperMobile>
            <OverviewCardMobile
              actuals={cardOverViewSectionData.actuals}
              budgetCap={cardOverViewSectionData.budgetCap}
              prediction={cardOverViewSectionData.prediction}
            />
          </WrapperMobile>
          <CardsNavigation
            cardsNavigationInformation={cardsToShow}
            handleLoadMoreCards={handleLoadMoreCards}
            loadMoreCards={loadMoreCards}
          />
        </ContainerSections>

        {isEnabled('FEATURE_FINANCES_BREAKDOWN_CHART_SECTION') && (
          <BreakdownChartSection
            year={year}
            selectedMetric={breakdownChartSectionData.selectedBreakdownMetric}
            selectedGranularity={breakdownChartSectionData.selectedBreakdownGranularity}
            onMetricChange={breakdownChartSectionData.handleBreakdownMetricChange}
            onGranularityChange={breakdownChartSectionData.handleBreakdownGranularityChange}
            isDisabled={breakdownChartSectionData.isDisabled}
            handleResetFilter={breakdownChartSectionData.handleResetFilterBreakDownChart}
            budgets={budgets}
            budgetsAnalyticsMonthly={breakdownChartSectionData.budgetsAnalyticsMonthly}
            budgetsAnalyticsQuarterly={breakdownChartSectionData.budgetsAnalyticsQuarterly}
            series={breakdownChartSectionData.series}
            handleToggleSeries={breakdownChartSectionData.handleToggleSeries}
            refBreakDownChart={breakdownChartSectionData.refBreakDownChart}
          />
        )}
      </Container>

      <ConditionalWrapper period={breakdownTable.periodFilter}>
        <BreakdownTable
          handleResetMetrics={breakdownTable.defaultMetricsWithAllSelected}
          activeItems={breakdownTable.activeMetrics}
          handleChange={breakdownTable.handlePeriodChange}
          handleResetFilter={breakdownTable.handleResetMetrics}
          handleSelectChange={breakdownTable.handleSelectChangeMetrics}
          metrics={breakdownTable.selectMetrics}
          periodicSelectionFilter={breakdownTable.periodicSelectionFilter}
          selectedValue={breakdownTable.periodFilter}
          year={year}
          maxItems={breakdownTable.maxItems}
          minItems={breakdownTable.minItems}
          allowSelectAll={breakdownTable.allowSelectAll}
          popupContainerHeight={breakdownTable.popupContainerHeight}
          breakdownTable={breakdownTable.tableBody ?? []}
          isLoading={breakdownTable.isLoading}
          headerTable={breakdownTable.tableHeader ?? []}
        />
      </ConditionalWrapper>
      <Container>
        {isEnabled('FEATURE_FINANCES_MAKERDAO_EXPENSE_METRICS_SECTION') && (
          <MakerDAOExpenseMetricsFinances
            handleGranularityChange={makerDAOExpensesMetrics.handleGranularityChange}
            selectedGranularity={makerDAOExpensesMetrics.selectedGranularity}
            series={makerDAOExpensesMetrics.series}
            handleToggleSeries={makerDAOExpensesMetrics.handleToggleSeries}
            isLoading={makerDAOExpensesMetrics.isLoading}
            year={year}
          />
        )}
        {isEnabled('FEATURE_FINANCES_MAKERDAO_EXPENSE_RESERVE_SECTION') && (
          <ContainerReservesWaterFallChart>
            <ReservesWaterFallChartSection
              title={'MakerDAO Finances'}
              legends={reserveChart.legendItems}
              series={reserveChart.series}
              selectedGranularity={reserveChart.selectedGranularity}
              year={year}
              activeItems={reserveChart.activeElements}
              handleSelectChangeItem={reserveChart.handleSelectChange}
              items={reserveChart.items}
              popupContainerHeight={reserveChart.popupContainerHeight}
              handleGranularityChange={reserveChart.handleGranularityChange}
              handleResetFilter={reserveChart.handleResetFilter}
            />
          </ContainerReservesWaterFallChart>
        )}
        <ContainerLastReport>
          <DelegateExpenseTrendFinances
            selectedMetric={expenseReportSection.selectedMetric}
            onMetricChange={expenseReportSection.onMetricChange}
            selectedStatuses={expenseReportSection.selectedStatuses}
            onStatusSelectChange={expenseReportSection.onStatusSelectChange}
            handleResetFilter={expenseReportSection.handleResetFilter}
            statusesItems={expenseReportSection.statusesItems}
            columns={expenseReportSection.headersExpenseReport}
            expenseReport={expenseReportSection.reportExpenseItems}
            sortClick={expenseReportSection.onSortClick}
            handleLoadMore={expenseReportSection.handleLoadMore}
            showAllItems={expenseReportSection.showAllItems}
            allItemsCount={expenseReportSection.expenseItemsCount}
          />
        </ContainerLastReport>
      </Container>
    </PageContainer>
  );
};

export default FinancesContainer;

const ContainerTitle = styled.div<WithIsLight>(({ isLight }) => ({
  fontFamily: 'Inter, sans-serif',
  fontSize: 20,
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  letterSpacing: '0.4px',
  color: isLight ? '#231536' : '#D2D4EF',
  marginTop: 24,
  marginBottom: 24,
  [lightTheme.breakpoints.up('tablet_768')]: {
    fontSize: 32,
    marginTop: 32,
    marginBottom: 64,
  },
}));

const ContainerSections = styled.div({
  gap: 16,
  display: 'flex',
  flexDirection: 'column',
  [lightTheme.breakpoints.up('tablet_768')]: {
    gap: 64,
  },
});

const WrapperDesk = styled.div({
  display: 'none',
  [lightTheme.breakpoints.up('tablet_768')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: 64,
  },
});

const ContainerLastReport = styled.div({
  marginTop: 40,
  [lightTheme.breakpoints.up('tablet_768')]: {
    marginTop: 64,
  },
});
const WrapperMobile = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  [lightTheme.breakpoints.up('tablet_768')]: {
    display: 'none',
  },
});

const ContainerReservesWaterFallChart = styled.div({
  marginTop: 40,
  [lightTheme.breakpoints.up('tablet_768')]: {
    marginTop: 64,
  },
});
