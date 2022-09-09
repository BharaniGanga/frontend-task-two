<template>
  <div class="success">
    <h2 class="msg">Your are successfully registered</h2>
    <router-link class="link" :to="{ name: 'loginComponent' }">
      Back
    </router-link>
  </div>
</template>

<script>
export default {
  name: "successPage",
};
</script>

<style scoped>
.success {
  height: 100vh;
}
.msg {
  margin: auto;
  width: 60%;
  padding: 70px;
}
.link {
  color: white;
}
</style>
