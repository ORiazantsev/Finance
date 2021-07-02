<template>
  <div class="home">
    <div class="form">
      <div class="welcome">{{ $t("home.welcome") }}</div>
      <div class="logo" @click="lang"></div>
      <div class="login" @click="login">{{ $t("generic.login") }}</div>
      <div class="signup" @click="signup">{{ $t("generic.signup") }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {
  private lang() {
    this.$i18n.locale = "ru";
  }
  private login() {
    this.$router.push({ name: "Login" });
  }
  private signup() {
    this.$router.push({ name: "Signup" });
  }
}
</script>

<style lang="scss" scoped>
$main_bg_color: #ecf6ff;
$main_text_color: #515f79;
$gradient: linear-gradient(90deg, #657eea, #81c1fd);

.form {
  height: 660px;
  width: 375px;
  display: flex;
  flex-direction: column;
  background-color: $main_bg_color;
  justify-content: center;
  align-items: center;

  .welcome {
    font-size: 28px;
    color: $main_text_color;
  }

  .logo {
    width: 135px;
    height: 135px;
    background-image: url("../assets/icons/logo.svg");
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 45px;
    margin-bottom: 50px;
  }

  .login {
    width: 140px;
    height: 40px;
    color: #ffffff;
    background: $gradient;
    font-size: 16px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .signup {
    width: 90px;
    height: 30px;
    color: $main_text_color;
    border-radius: 4px;
    margin-top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
