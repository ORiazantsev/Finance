<template>
  <div>
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">Name</label>
      <input
        class="form__input"
        v-model.trim="name"
        @input="setName($event.target.value)"
      />
    </div>
    <div class="error" v-if="!$v.name.required">Field is required</div>
    <div class="error" v-if="!$v.name.minLength">
      Name must have at least {{ $v.name.$params.minLength.min }} letters.
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
      <label class="form__label">Age</label>
      <input
        class="form__input"
        :value="age"
        @change="setAge($event.target.value)"
      />
    </div>
    <div class="error" v-if="!$v.age.between">
      Must be between {{ $v.age.$params.between.min }} and
      {{ $v.age.$params.between.max }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Vuelidate from "vuelidate";
import { required, minLength, between } from "vuelidate/lib/validators";
Vue.use(Vuelidate);

@Component({
  components: {},
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    age: {
      between: between(20, 30),
    },
  },
})
export default class Home extends Vue {
  private name = "";
  private age = 0;

  private setName(value: string) {
    this.name = value;
    this.$v.name.$touch();
  }

  private setAge(value: number) {
    this.age = value;
    this.$v.age.$touch();
  }
}
</script>

<style scoped></style>
