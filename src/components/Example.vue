<template>
 <section id="main">
    <div class="container">
      <h1>Webpack message: {{message}}</h1>
      <img src="/assets/img/pontus-wellgraf-16_bFHg8Ouc-unsplash.jpg" alt="">
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      message: null
    }
  },
  created(){
    this.message = this.$store.getters.getMessage
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: green;
}
</style>