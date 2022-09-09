<template>
  <div class="Login">
    <div>
      <h1>LOGIN</h1>
      <form id="login-form" method="post">
        <div class="text-field">
          <input
            type="text"
            name="username"
            v-model="username"
            placeholder="Username"
          /><br />
          <br />
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="Password"
          />
          <br />
          <br />
          <input
            type="button"
            value="Login"
            id="loginBTN"
            @click="validate()"
          /><br />
          <br />
        </div>
      </form>
      <router-link class="link" :to="{ name: 'registerPage' }">
        Not Registered?
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginComponent",
  data() {
    return {
      url: "https://react-tasks-nodejs-api.herokuapp.com/user/login",
        username: "",
        password: "",
    };
  },
  /* created() {
    this.getApi();
  }, */
  methods: {
    getApi() {
      this.axios
        .post(this.url, {
          login_id: this.username,
          password: this.password,
        })
        .then((response) => {
            this.$router.push({ path: "/loginSuccess"
          });
          console.log(response.data);
        });
    },
    validate() {
      if (this.username && this.password) {
        this.getApi();
      }
    },
  },
};
</script>

<style scoped>
input[type="text"],
input[type="password"] {
  width: 20%;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: aqua;
}

input[type="button"] {
  width: 20%;
  background-color: #a5d022;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.Login {
  height: 100vh;
  padding: 70px;
}
.link {
  color: white;
}
</style>