<template>
  <div class="form">
    <div class="back-button" @click="$router.go(-1)"></div>
    <span class="title">{{ $t("generic.signup") }}</span>
    <div class="input-box">
      <input
        type="text"
        class="input-field"
        :placeholder="$t('signup.name')"
        maxlength="25"
      />
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
    </div>
    <button type="submit" class="signup-button" @click="signup()">
      {{ $t("generic.signup") }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class SignUp extends Vue {
  private signup() {
    this.$router.push({ name: "Main" });
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
  }

  .signup-button {
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
}
</style>
