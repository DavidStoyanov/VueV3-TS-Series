<template>
  <div class="app">
    <select v-model="order">
      <option value="default">Select sort</option>
      <option value="title-low">Title: Lower first</option>
      <option value="title-high">Title: Higher first</option>
      <option value="location-low">Location: Lower first</option>
      <option value="location-high">Location: Higher first</option>
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

    return { jobs, order }
  },
  methods: {
    
  }
 });
</script>

<style>
* {
  font-size: 1.10rem;
}

select {
  background: rgba(222, 240, 219, 0.5);
  padding: 0.3rem 1rem;
  margin: 1rem 0 0 1rem;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 0.3rem;
}

</style>
