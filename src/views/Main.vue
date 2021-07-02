<template>
  <div class="form">
    <header>
      <div class="menu-button"></div>
      <div class="total-income">
        <div class="income-title">{{ $t("generic.balance") }}</div>
        <div class="income-amount">14 000 ₴</div>
      </div>
      <div class="total-income">
        <div class="outcome-title">{{ $t("generic.budget") }}</div>
        <div class="outcome-amount">6 500 ₴</div>
      </div>
      <div class="view-form-of-currency"></div>
    </header>
    <div class="categories-list">
      <CustomUserCategory
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        :img="item.img"
        :balance="item.balance"
        :budget="item.budget"
        :id="19258"
      />
      <div class="category">
        <div class="new-category-icon" @click="addNewCategory"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CustomUserCategory from "@/components/CustomUserCategory.vue";
import { UserCategory } from "@/interfaces/userCategory.interface";

@Component({
  components: {
    CustomUserCategory,
  },
})
export default class Main extends Vue {
  private list: UserCategory[] = [
    {
      title: "Food",
      balance: 240,
      budget: 550,
    },
    {
      title: "Car",
      balance: 240,
      budget: 550,
    },
    {
      title: "Food",
      balance: 240,
      budget: 550,
    },
    {
      title: "Car",
      balance: 240,
      budget: 550,
    },
    {
      title: "Food",
      balance: 240,
      budget: 550,
    },
    {
      title: "Car",
      balance: 1100,
      budget: 2000,
    },
    {
      title: "Food",
      balance: 240,
      budget: 550,
    },
  ];
  private addNewCategory() {
    this.$router.push({ name: "NewCategory" });
  }
}
</script>

<style lang="scss" scoped>
$main_bg_color: #ecf6ff;
$main_text_color: #515f79;
$gradient: linear-gradient(90deg, #657eea, #81c1fd);

* {
  font-size: 13px;
}

.form {
  height: 660px;
  width: 375px;
  background-color: $main_bg_color;

  header {
    height: 80px;
    width: 375px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: $gradient;

    .menu-button {
      height: 35px;
      width: 35px;
      background-image: url("/");
      background-repeat: no-repeat;
      background-size: contain;
      cursor: pointer;
    }

    .total-income,
    .total-outcome {
      height: 35px;
      width: 70px;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .income-title {
        font-size: 16px;
      }

      .outcome-title {
        font-size: 16px;
      }
    }

    .view-form-of-currency {
      height: 35px;
      width: 35px;
      background-image: url("/");
      background-repeat: no-repeat;
      background-size: contain;
      cursor: pointer;
      transform: rotate(90deg);
    }
  }

  .categories-list {
    color: $main_text_color;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    margin-top: 35px;

    .category {
      height: 120px;
      width: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }

    .new-category-icon {
      height: 60px;
      width: 60px;
      margin-bottom: 5px;
      border-radius: 50%;
      background-image: url("../assets/icons/new_category.svg");
      background-repeat: no-repeat;
      background-size: contain;
      cursor: pointer;
    }
  }
}
</style>
