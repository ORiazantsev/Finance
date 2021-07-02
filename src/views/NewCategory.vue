<template>
  <div class="form">
    <div class="back-button" @click="goBack"></div>
    <span class="title">{{ $t("newCategory.title") }}</span>
    <div class="input-box">
      <input
        type="text"
        class="input-field"
        :placeholder="$t('newCategory.nameOfCategory')"
        maxlength="25"
      />
      <input
        type="text"
        class="input-field"
        :placeholder="$t('generic.balance')"
        maxlength="25"
      />
      <input
        type="text"
        class="input-field"
        :placeholder="$t('generic.budget')"
        maxlength="25"
      />
    </div>
    <v-btn class="save-button" color="primary" @click="save">
      {{ $t("generic.save") }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {
  private goBack() {
    this.$router.push({ name: "Main" });
  }
  private save() {
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

  .save-button {
    width: 140px;
    height: 40px;
    font-size: 16px;
    color: #ffffff;
    background: $gradient;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 50px;
    margin-left: calc(50% - 70px);
  }
}
</style>
