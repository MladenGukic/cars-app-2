<template>
<div class="container">
<table class="table">
  <tbody>
    <tr>
      <th scope="row">Brand:</th>
      <td>{{car.brand}}</td>
    </tr>
    <tr>
      <th scope="row">Model:</th>
      <td>{{car.model}}</td>
    </tr>
    <tr>
      <th scope="row">Year:</th>
      <td>{{car.year}}</td>
    </tr>
    <tr>
      <th scope="row">Max Speed:</th>
      <td>{{car.maxSpeed}}km/h</td>
    </tr>
    <tr>
      <th scope="row">Automatic:</th>
      <td v-if="car.isAutomatic === 1">Yes</td>
      <td v-else>No</td>
    </tr>
    <tr>
      <th scope="row">Engine:</th>
      <td>{{car.engine}}</td>
    </tr>
    <tr>
      <th scope="row">Number of Doors:</th>
      <td>{{car.numberOfDoors}}</td>
    </tr>
  </tbody>
</table>
<button class="btn btn-primary"> Edit </button> 
</div>
</template>

<script>
import { carService } from '../services/cars-service'
export default {
    data() {
        return {
            car : {}
        }
    },

    created() {
        carService.get(this.$route.params.id)
        .then(r => this.car = r.data)
    }
}
</script>

<style>
button {
    float: right;
}
</style>