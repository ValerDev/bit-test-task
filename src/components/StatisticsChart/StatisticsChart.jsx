import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import am4lang_ru_RU from '@amcharts/amcharts4/lang/ru_RU';
import { useAppSelector } from '../../hooks/storeHooks';

am4core.useTheme(am4themes_dark);

export const StatisticsChart = () => {
  const { selectedUser } = useAppSelector(state => state.usersSlice);
  const { data } = selectedUser;

  useEffect(() => {
    const chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.language.locale = am4lang_ru_RU;
    chart.data = data;

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;
    dateAxis.groupData = true;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minGridDistance = 30;
    valueAxis.renderer.opposite = true;

    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'value';
    series.stroke = am4core.color('#1C64F2');
    series.strokeWidth = 2;
    series.tensionX = 0.8;

    const fillSeries = chart.series.push(new am4charts.LineSeries());
    fillSeries.dataFields.dateX = 'date';
    fillSeries.dataFields.valueY = 'value';
    fillSeries.strokeWidth = 0;
    fillSeries.fillOpacity = 0.2;
    fillSeries.fill = am4core.color('#1C64F2');
    fillSeries.propertyFields.stroke = 'none';
    fillSeries.propertyFields.fill = 'fill';

    chart.legend = new am4charts.Legend();
    chart.legend.position = 'bottom';

    chart.legend.labels.template.text = `[font-size: 12px]${selectedUser?.email || ''}[/]`;

    chart.scrollbarX = new am4charts.XYChartScrollbar();
    chart.scrollbarX.series.push(series);
    chart.scrollbarX.align = 'center';
    chart.scrollbarX.valign = 'bottom';
    chart.scrollbarX.width = am4core.percent(100);
    chart.scrollbarX.height = 10;

    chart.scrollbarX.background.fill = am4core.color('#616D8D');

    chart.zoomOutButton = new am4core.ZoomOutButton();
    chart.zoomOutButton.align = 'right';
    chart.zoomOutButton.valign = 'bottom';

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;

    dateAxis.cursorTooltipEnabled = false;
    chart.cursor.behavior = 'zoomX';

    chart.logo.disabled = true;

    return () => {
      chart.dispose();
    };
  }, [selectedUser.email, data]);

  return <div id="chartdiv" style={{ width: '100%', height: '350px' }} />;
};
