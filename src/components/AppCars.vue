<template>
  <div class="container">
    <ul class="list-group" v-for="car in cars" :key="car.id">
      <li class="list-group-item"> 
        {{car.brand}} {{car.model}}
        <button class="btn btn-secondary" @click="deleteCar(car.id)"> Delete </button>
        <button class="btn btn-primary" @click="navigateToView(car.id)"> View </button>
      </li>
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
    carService.getAll()
    .then(r => this.cars = r.data)
  },

  methods: {
    deleteCar(id) {
        carService.delete(id)
        .then(this.cars = this.cars.filter(car => car.id !== id))
      }
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

button {
  float:right
}
</style>
