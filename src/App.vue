<template>
  <div id="app">
    <p>Mouse position:</p>
    <p>({{ x }}, {{ y }})</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      x: 0,
      y: 0
    };
  },
  methods: {
    update(event) {
      this.x = event.pageX;
      this.y = event.pageY;
    }
  },
  created() {
    window.addEventListener("mousemove", this.update);
  },
  destroyed() {
    window.removeEventListener("mousemove", this.update);
  }
};
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
