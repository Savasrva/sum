<template>
  <div class="cleaning">
    <h1>{{category.title}}</h1>
    <section>
      <article>
        <h2>{{currentStepData.title}}</h2>
        <CheckboxComponent @passData="passData" :item="currentCategory"
                            v-if="currentCategory.formType == 1"/>
        <RadioComponent @passData="passData" :item="currentCategory"
                            v-if="currentCategory.formType == 2"/>
        <TextInputComponent @passData="passData" :item="currentCategory"
                            v-if="currentCategory.formType == 3"/>
        <SelectboxComponent @passData="passData" :item="currentCategory"
                            v-if="currentCategory.formType == 4"/>
      </article>
    </section>
    <section>
      <button @click="decrease" class="btn">뒤로</button>
      <button @click="increase" class="btn">앞으로</button>
      <button class="btn">제출</button>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CheckboxComponent from './CheckboxComponent.vue';
import RadioComponent from './RadioComponent.vue';
import TextInputComponent from './TextInputComponent.vue';
import SelectboxComponent from './SelectboxComponent.vue';

export default {
  name: 'Cleaning',
  components: {
    CheckboxComponent,
    RadioComponent,
    TextInputComponent,
    SelectboxComponent,
  },
  data() {
    return {
      currentStepData: {},
      userData: {},
    };
  },
  created() {
    this.$store.dispatch('loadCategory');
    console.log(this.step);
  },
  computed: mapState([
    'category',
    'step',
    'currentCategory',
  ]),
  methods: {
    passData(data) {
      console.log(data);
    },
    next() {
      this.increase();
      localStorage.setItem();
    },
    increase() {
      this.step += 1;
    },
    decrease() {
      this.step -= 1;
    },
  },
};
</script>

<style scoped>
  h1 {
    border-bottom: 1px solid #EEE;
    padding: 0 0 20px 30px;
    margin: 0 0 30px 0;
  }
  h3 {
    margin: 40px 0 0;
  }
  section {
    padding: 0 0 30px 30px;
    clear: both;
  }
  .btn + .btn {
    margin-left: 5px;
  }
  .btn {
    padding: 5px 10px;
    background-color: #95a5a6;
    border-width: 2px;
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 3px;
    white-space: nowrap;
  }
  .btn[disabled] {
    opacity: 0.5;
    cursor: default;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
