<template>
  <div class="app">
    <p>{{ jobs[0].location }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import Job from './types/Job';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const jobs = ref<Job[]>([
      { title: 'farm president', location: 'lon lon range', salary: 30000, id: '1' },
      { title: 'farm lookup', location: 'lon lon range', salary: 4556, id: '2' },
      { title: 'farm worker', location: 'lon lon range', salary: 6500, id: '3' },
      { title: 'farm manager', location: 'lon lon range', salary: 11100, id: '4' },
    ])

    return { jobs }
  },
  methods: {
    
  }
 });
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
