import { merge } from 'lodash'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import BaseOptionChart from './BaseOptionChart'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const CHART_DATA = [{ name: 'Peak Hours', data: [10, 12, 8, 20, 14, 8] }]

export default function ChartLine() {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const chartOptions = merge(BaseOptionChart(), {
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yaxis: {
      min: 8,
      max: 22,
      tickAmount: 15,
      labels: {
        formatter: function (value) {
          const hour = Math.floor(value)
          const period = hour >= 12 ? 'PM' : 'AM'
          const formattedHour = hour % 12 === 0 ? 12 : hour % 12
          const formattedMinute = '00'
          const formattedTime = `${formattedHour
            .toString()
            .padStart(2, '0')}:${formattedMinute} ${period}`
          return formattedTime
        },
      },
    },
  })

  return isBrowser ? (
    <ReactApexChart
      type="line"
      series={CHART_DATA}
      options={chartOptions}
      height={400}
    />
  ) : null
}
