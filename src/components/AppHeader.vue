<template>
<nav>
<label for="show-menu" class="show-menu">Show Menu</label>
<input type="checkbox" id="show-menu" role="button">
    <ul id="menu">
  <li><router-link to="/">Home</router-link></li>
  <li><router-link to="/profile">Blue Spruce</router-link></li>
   <li><router-link to="/columbine">Columbine</router-link></li>
    <li><router-link to="/lily">Lily</router-link></li>
   <li><router-link to="/todo">Comments</router-link></li>
</ul>
</nav>
</template>

<script>
 export default {
     name: 'AppHeader'
 }
</script>

<style scoped>
 /*Strip the ul of padding and list styling*/
 .clear {
     float: clear;
 }
 nav {
     display: grid;
     float: right;
 }
 ul {
     list-style-type:none;
     margin:0;
     padding:0;
 }

 /*Create a horizontal list with spacing*/
 li {
     display:inline-block;
     float: left;
     margin-right: 1px;
 }
 /*Style for menu links*/
 li a {
     color: pink;
     display:block;
     margin-right: 20px;
     height: 50px;
     text-align: center;
     line-height: 50px;
     text-decoration: none;
 }
 /*Active color*/
 li a.active {
 }
 /*Hover state for top level links*/
 li:hover a {
     color: black;
     border-bottom: solid 5px black;
 }
 /*Style 'show menu' label button and hide it by default*/
 .show-menu {
     text-decoration: none;
     color: #fff;
     background: #FF5035;
     text-align: center;
     padding: 10px 0;
     display: none;
 }
 /*Hide checkbox*/
 input[type=checkbox]{
     display: none;
 }
 /*Show menu when invisible checkbox is checked*/
 input[type=checkbox]:checked ~ #menu{
     display: block;
 }
</style>
