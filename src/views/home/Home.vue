<template>
  <div>
    <echart :chart-data="echartData.demo"></echart>
  </div>
</template>

<script>
import Echart from '../../components/Echart';
export default {
  name: 'Home',
  components: {
    Echart
  },
  data() {
    return {
      echartData: {
        demo: {
          xData: [],
          series: []
        }
      }
    };
  },
  methods: {
    getAverageByBrand() {
      this.getRequest('/echart/average').then(resp => {
        if (resp) {
          // console.log(resp);
          let keyArray = Object.keys(resp[0]);
          // console.log(keyArray);
          keyArray.forEach(key => {
            if (key === 'brand') {
              this.echartData.demo.xData.push({
                data: resp.map(item => item[key])
              });
            } else if (key === 'actualscore') {
              this.echartData.demo.series.push({
                name: key,
                data: resp.map(item => item[key]),
                type: 'bar'
              });
            }
          });
          // console.log(this.echartData.demo.xData);
          // console.log(this.echartData.demo.series);
        }
      });
    }
  },
  mounted() {
    this.getAverageByBrand();
  }
};
</script>

<style lang="scss"></style>
