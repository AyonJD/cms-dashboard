import { merge } from 'lodash';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
//
import BaseOptionChart from './BaseOptionChart';

// ----------------------------------------------------------------------

const CHART_DATA = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ChartPie() {
    const chartOptions = merge(BaseOptionChart(), {
      labels: [
        'Myelography',
        'Electromyography',
        'CT scan',
        'Blood test',
        'Ultrasound',
        'Complete blood count',
        'Electrocardiography',
        'Angiogram',
      ],
      legend: {
        position: 'right',
        offsetX: -20,
        offsetY: 64,
        itemMargin: { vertical: 8 },
      },
      stroke: { show: false },
      dataLabels: { enabled: true, dropShadow: { enabled: false } },
      plotOptions: {
        pie: { donut: { labels: { show: false } } },
      },
    })

    return <ReactApexChart type="pie" series={CHART_DATA} options={chartOptions} width={400} />;
}