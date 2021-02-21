<template>
  <div ref="echart" style="width: 600px; height: 400px"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'Echart',
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: []
        };
      }
    },
    isAxisChart: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption;
    }
  },
  watch: {
    chartData: {
      handler: function() {
        // console.log(this.chartData);
        this.initChart();
      },
      deep: true
    }
  },
  data() {
    return {
      echart: null,
      axisOption: {
        xAxis: [
          {
            type: 'category',
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      },
      normalOption: {
        series: []
      }
    };
  },
  methods: {
    /*init() {
      this.echart = echarts.init(this.$refs.echart);
      this.echart.setOption(this.axisOption);
    },*/
    initChart() {
      this.initChartData();
      if (this.echart) {
        this.echart.setOption(this.options);
      } else {
        this.echart = echarts.init(this.$refs.echart);
        this.echart.setOption(this.options);
      }
    },
    initChartData() {
      if (this.isAxisChart) {
        this.axisOption.xAxis = this.chartData.xData;
        this.axisOption.series = this.chartData.series;
      } else {
        console.log('没有坐标轴的图表占坑');
      }
    }
  }
};
</script>

<style lang="scss"></style>
