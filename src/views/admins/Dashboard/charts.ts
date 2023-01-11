import { Pie, Bar, Column } from "@antv/g2plot"
import type { Ref } from "vue"

export const initChartA = (container: Ref, data: Record<string, unknown>[]): void => {
  const piePlot = new Pie(container.value, {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center"
      }
    },
    interactions: [{ type: "element-active" }]
  })

  piePlot.render() //render渲染函数渲染图表
}

export const initChartB = (container: Ref, data: Record<string, unknown>[]): void => {
  const piePlot = new Bar(container.value, {
    data: data.reverse(),
    isStack: true,
    xField: "value",
    yField: "year",
    seriesField: "type",
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle", // 'left', 'middle', 'right'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        { type: "interval-adjust-position" },
        // 数据标签防遮挡
        { type: "interval-hide-overlap" },
        // 数据标签文颜色自动调整
        { type: "adjust-color" }
      ]
    }
  })

  piePlot.render() //render渲染函数渲染图表
}

export const initChartC = (container: Ref, data: Record<string, unknown>[]): void => {
  const piePlot = new Column(container.value, {
    data,
    xField: "type",
    yField: "sales",
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle", // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: "#FFFFFF",
        opacity: 0.6
      }
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    },
    meta: {
      type: {
        alias: "类别"
      },
      sales: {
        alias: "销售额"
      }
    }
  })

  piePlot.render() //render渲染函数渲染图表
}
