import {useEffect, useRef} from 'react'
import * as echarts from 'echarts'

function Bar({title, xData, yData,style}) {
    const domRef = useRef()
    const chartInit = () => {
    const myChart = echarts.init(domRef.current)
    // Drawing chart
      myChart.setOption({
        title: {
            text: title
        },
        tooltip: {},
        xAxis: {
            data: xData
        },
        yAxis: {},
        series: [
            {
                name: 'sales',
                type: 'bar',
                data: yData
            }
        ]
      })
    }
    useEffect(() => {
        chartInit()
    })
    return <div>
        {/* 挂载一个真实节点 */}
        <div ref = {domRef} style = {style}></div>
    </div>
}

export default Bar