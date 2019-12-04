<template>
  <div>
     <form @submit.prevent="addCar">
  <div class="form-group">
    <label>Brand</label>
    <input type="text" class="form-control"  placeholder="Brand" v-model="form.brand">
    <label>Model</label>
    <input type="text" class="form-control"  placeholder="Model" v-model="form.model">
    <label>Year</label>
    <input type="text" class="form-control"  placeholder="Year" v-model="form.year">
    <label>Max speed</label>
    <input type="number" class="form-control"  placeholder="Max speed(km/h)" v-model="form.maxSpeed">
    <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" v-model="form.isAutomatic">
    <label class="form-check-label">Automatic</label>
    </div>  
    </div>
  <div class="form-group">
    <label>Engine</label>
    <select class="form-control" v-model="form.engine">
      <option>Electric</option>
      <option>Hybrid</option>
      <option>Petrol</option>
      <option>Diesel</option>
      <option>Petrol</option>
    </select>
  </div>
  <div class="form-group">
    <label>Number of doors</label>
    <input type="number" class="form-control" v-model="form.numberOfDoors">
  </div>
    <button  class="btn btn-primary"> Submit </button>
</form>
  </div>
</template>

<script>
import { carService } from '../services/cars-service'
export default {
    data() {
        return {
            form: {
                brand: "",
                model: "",
                year: "",
                maxSpeed: "",
                isAutomatic: false,
                engine: "",
                numberOfDoors : ""
            },
            
            car: {}
        }
    },

    methods: {
        addCar() {
            carService.add(this.form)
            .then(() => this.$router.push('/cars'))
        }
    }
}
</script>

<style>

</style>