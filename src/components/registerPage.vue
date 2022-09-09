<template>
  <div class="register">
    <h3>Register</h3>
    <h5>Create your company accounts</h5>
    <form class="forms" >
      <br />
      <br />
      <input
        type="text"
        name="Full Name"
        v-model="name"
        placeholder="Full Name*"
        size="15"
        required
      />
      <br />
      <br />
      <input
        type="text"
        name="User Name"
        v-model="username"
        placeholder="User Name*"
        size="15"
        required
      />
      <br />
      <br />
      <input
        type="text"
        name="Country"
        v-model="country"
        placeholder="Country*"
        size="15"
        required
      />
      <br />
      <br />
      <input
        type="tel"
        name="Mobile Number"
        v-model="phone"
        pattern="[7-9]{1}[0-9]{9}"
        placeholder="Mobile Number*"
        size="10"
        required
      />
      <br />
      <br />
      <input
        type="email"
        id="email"
        v-model="email"
        placeholder="Email*"
        name="Email"
        required
      />
      <br />
      <br />
      <input
        type="Password"
        id="pass"
        v-model="password"
        name="Password"
        placeholder="Password*"
        required
      />
      <br />
      <br />
      <input
        type="text"
        name="Referral ID"
        v-model="referal"
        placeholder="Referral ID"
      />
      <br />
      <br />
      <input type="submit" value="Register" @click="navigateTo()" /> <br />
      <br />
    </form>
  </div>
</template>

<script>
export default {
  name: "registerPage",
  data() {
    return {
      url: "https://react-tasks-nodejs-api.herokuapp.com/user/register",
      name: "",
      username: "",
      email: "",
      password: "",
      phone: "",
      country: "",
      referal: "",
    };
  },
  methods: {
    navigateTo() {
      if (this.name && this.username && this.phone && this.password && this.country && this.email) {
        this.$router.push({ path: "/successPage" });
        console.log(this.url);
      }
    },
  },
};
</script>

<style scoped>
input[type="text"],
input[type="tel"],
input[type="email"],
input[type="password"] {
  width: 30%;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: rgb(109, 170, 170);
}
.forms {
  background-color: rgb(85, 69, 98);
}

input[type="submit"] {
  width: 30%;
  background-color: #a5d022;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
.register {
  border-radius: 10px;
  padding: 70px;

  background-color: rgb(104, 83, 123);
}
</style>
