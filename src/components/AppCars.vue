<template>
  <div class="container">
    <ul class="list-group" v-for="car in cars" :key="car.id">
      <li class="list-group-item"> {{car.brand}} {{car.model}}</li>
    </ul>
  </div>
</template>

<script>
import {carService} from '../services/cars-service'
export default {
  data() {
    return {
      cars: []
    }
  },

  created() {
    carService.getCars()
    .then(r => this.cars = r.data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
