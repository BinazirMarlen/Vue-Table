<template>
  <header>
      <h1>{{title}}</h1>
  </header>
</template>

<script>

export default {
 name: 'Header',
 props:{
     title: String,
 }
}
</script>
s
<style>

header{
    width: 100%;
    color: #fff;
    background:rgb(11, 11, 54);
    display: flex;
    justify-content: start;
    font-size: 14px;
}
h1{
    margin-left: 15px;
}
</style>