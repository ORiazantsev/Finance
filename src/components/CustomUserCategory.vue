<template>
  <div class="category">
    <div class="category-title">{{ title }}</div>
    <div class="category-icon" @click="UpdateCategoryBalance"></div>
    <div class="category-balance">{{ balance }}</div>
    <div class="category-budget">{{ budget }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CustomUserCategory extends Vue {
  @Prop({ type: Number }) private id!: number;
  @Prop({ type: String, default: "" }) private title?: string;
  @Prop({ type: String, default: "" }) private img?: string;
  @Prop({ type: Number, default: "" }) private balance?: number;
  @Prop({ type: Number, default: "" }) private budget?: number;

  private UpdateCategoryBalance() {
    this.$router.push({
      name: "UpdateCategoryBalance",
      params: { category_id: String(this.id) },
      query: { title: this.title },
    });
  }
}
</script>

<style lang="scss" scoped>
$gradient: linear-gradient(90deg, #657eea, #81c1fd);

.category-title {
  height: 25px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
}

.category-icon {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: $gradient;
  cursor: pointer;
  margin: 2px;
}

.category-budget {
  font-size: 11px;
  margin-top: 2px;
  color: #a3a2a2;
}
</style>
