<template>
  <div class="form">
    <div class="back-button" @click="goBack"></div>
    <span class="title">{{ $t("generic.login") }}</span>
    <div class="input-box">
      <input
        type="text"
        class="input-field"
        :placeholder="$t('generic.email')"
        maxlength="25"
      />
      <input
        type="password"
        class="input-field"
        :placeholder="$t('generic.password')"
        maxlength="25"
      />
      <div class="checkbox-box">
        <input type="checkbox" id="remember-checkbox" v-model="checkedNames" />
        <label for="remember-checkbox">{{ $t("login.remember") }}</label>
      </div>
    </div>
    <button type="submit" class="login-button" @click="login">
      {{ $t("generic.login") }}
    </button>
    <div class="signup-box">
      <span class="no-account">{{ $t("login.noAcount") }}</span>
      <div class="signup-button" @click="signup">
        {{ $t("generic.signup") }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

@Component({
  components: {},
})
export default class Home extends Vue {
  private goBack() {
    this.$router.push({ name: "Home" });
  }
  private login() {
    this.$router.push({ name: "Main" });
  }
  private signup() {
    this.$router.push({ name: "SignUp" });
  }
}
</script>

<style lang="scss" scoped>
$main_bg_color: #ecf6ff;
$main_text_color: #515f79;
$gradient: linear-gradient(90deg, #657eea, #81c1fd);
$input_border: 1px solid #808080;

.form {
  height: 660px;
  width: 375px;
  display: flex;
  flex-direction: column;
  background-color: $main_bg_color;

  .back-button {
    width: 40px;
    height: 40px;
    background-image: url("../assets/icons/back.svg");
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 30px;
    margin-left: 35px;
    cursor: pointer;
  }

  .title {
    font-size: 28px;
    margin-top: 60px;
    color: $main_text_color;
  }

  .input-box {
    width: 300px;
    height: 170px;
    margin-top: 40px;
    margin-left: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .input-field {
      width: 280px;
      height: 30px;
      border: $input_border;
      border-radius: 4px;
      padding-left: 10px;
    }

    .checkbox-box {
      width: 255px;
      height: 25px;
      font-size: 14px;
      color: $main_text_color;
      display: flex;
      justify-content: left;
      align-items: center;

      #remember-checkbox {
        margin-right: 5px;
      }
    }
  }

  .login-button {
    width: 140px;
    height: 40px;
    font-size: 16px;
    color: #ffffff;
    background: $gradient;
    border-radius: 4px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 50px;
    margin-left: calc(50% - 70px);
  }

  .signup-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 25px;

    .no-account {
      color: #a3a2a2;
      margin-right: 10px;
    }

    .signup-button {
      cursor: pointer;
      color: $main_text_color;
    }
  }
}
</style>
