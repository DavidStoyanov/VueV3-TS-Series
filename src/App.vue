<template>
  <div class="app">
    <p>{{ name }}</p>
    <button @click="changeName('Gel')">change name</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
  /* 
    let state = reactive({
      name: 'Link',
      age: 25 as string | number
    })
    return { ...toRefs(state) }
  */

  const name = ref('Link')
  const age = ref<string | number>(25)
  return { name, age }
  
  },
  methods: {
    changeName(name: string) {
      this.name = name
    }
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
