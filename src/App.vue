<template>
  <div class="app">
    <select v-model="order">
      <option value="default">Select sort</option>
      <option value="title-low">Title: Lower first</option>
      <option value="title-low">Title: Higher first</option>
      <option value="location-low">Location: Lower first</option>
      <option value="location-low">Location: Higher first</option>
      <option value="salary-low">Salary: Lower first</option>
      <option value="salary-high">Salary: Higher first</option>
    </select>
    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive, ref, toRefs } from 'vue';
import JobList from './components/JobsList.vue'
import Job from './types/Job';
import OrderTerm from './types/OrderTerm';

export default defineComponent({
  name: 'App',
  components: {
    JobList
  },
  setup() {
    const jobs = ref<Job[]>([
      { title: 'farm president', location: 'lon lon range', salary: 30000, id: '1' },
      { title: 'farm lookup', location: 'lon lon range', salary: 4556, id: '2' },
      { title: 'farm worker', location: 'lon lon range', salary: 6500, id: '3' },
      { title: 'farm manager', location: 'lon lon range', salary: 11100, id: '4' },
    ])
    const order = ref<OrderTerm>('default')

    /* const handleClick = (term: OrderTerm) => {
      throw new Error();
    } */

    return { jobs, order }
  },
  methods: {
    
  }
 });
</script>

<style>
#app {
  
}
</style>
