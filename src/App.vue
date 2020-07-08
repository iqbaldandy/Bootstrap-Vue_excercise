<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

  
    
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: {
    items:[],
   item:['NEW VALUE','NEW VALUE_2'],
   
  },
  created(){
  	this.items.push(this.item);
  },
  methods: 
  {
    add()
    {
      this.item = ['</br><input type="text"/>','<input type="text"/></br>'];
      this.items.push(this.item);
    }
  }
}
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
