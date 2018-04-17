<template>
  <div class="column">
    <img src="/static/images/flower.jpg"/>
    <h1>Follow the Red Bird. Or anyone else.</h1>
    <h2>Make friends in high places.</h2>
    <form v-on:submit.prevent="register">
      <p>1. Choose a user name (this is how you will be known by others on Red Bird).</p>
      <input class="narrow" v-model="username" placeholder="User Name">
      <p>2. Create an account.</p>
      <input class="wide" v-model="name" placeholder="First and Last Name"><br/>
      <input class="narrow" v-model="email" placeholder="Email Address">
      <input class="narrow" type="password" v-model="password" placeholder="Password">
      <button class="alternate" type="submit">Register</button>
    </form>
    <p class="error">{{registerError}}</p>
  </div>
</template>

<script>
 export default {
     name: 'HomePage',
     data () {
	 return {
	     imagePath: '/static/images/flower.jpg'
	 }
     }
 }
</script>

<style scoped>
 body {
     padding: 0px;
     margin: 0px;
 }
 .hero {
     text-align: center;
 }
 h1 {
     font-size: 2.5em;
     letter-spacing: .2rem;
     color: #999;
     margin-bottom: 2px;
 }
 img {
     width: 100%;
 }
</style>
