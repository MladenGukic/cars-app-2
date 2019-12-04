<template>
  <div>
     <form @submit.prevent="onSubmit">
  <div class="form-group">
    <label>Brand</label>
    <input type="text" class="form-control"  placeholder="Brand" v-model="carForm.brand">
    <label>Model</label>
    <input type="text" class="form-control"  placeholder="Model" v-model="carForm.model">
    <label>Year</label>
    <input type="text" class="form-control"  placeholder="Year" v-model="carForm.year">
    <label>Max speed</label>
    <input type="number" class="form-control"  placeholder="Max speed(km/h)" v-model="carForm.maxSpeed">
    <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" v-model="carForm.isAutomatic">
    <label class="form-check-label">Automatic</label>
    </div>  
    </div>
  <div class="form-group">
    <label>Engine</label>
    <select class="form-control" v-model="carForm.engine">
      <option>Electric</option>
      <option>Hybrid</option>
      <option>Petrol</option>
      <option>Diesel</option>
      <option>Petrol</option>
    </select>
  </div>
  <div class="form-group">
    <label>Number of doors</label>
    <input type="number" class="form-control" v-model="carForm.numberOfDoors">
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

    created() {
        // console.log('test')
        if(this.$route.params.id) {
            carService.get(parseInt(this.$route.params.id))
            .then(response => {
            this.car = response.data
            })
        }
    },

    computed: {
        carForm() {
            return !this.$route.params.id ? this.form : this.car     
        }
    },

    methods: {
        addCar() {
            carService.add(this.form)
            .then(() => this.$router.push('/cars'))
        },

        editCar() {
            carService.edit(this.carForm.id, this.carForm)
            .then(() => this.$router.push('/cars'))
        },

        onSubmit() {
            if(this.carForm.id) {
                this.editCar()
            } else {
                this.addCar()
            }
        }
    }
}
</script>

<style>

</style>