<template>
  <div class="cleaning">
    <h1>{{category.title}}</h1>
    <section>
      <article>
        <h2>{{currentCategory.title}}</h2>
        <CheckboxComponent v-if="currentCategory.formType == 1"/>
        <RadioComponent v-if="currentCategory.formType == 2"/>
        <TextInputComponent v-if="currentCategory.formType == 3"/>
        <SelectboxComponent v-if="currentCategory.formType == 4"/>
      </article>
    </section>
    <ButtonComponent />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import CheckboxComponent from './CheckboxComponent.vue';
import RadioComponent from './RadioComponent.vue';
import TextInputComponent from './TextInputComponent.vue';
import SelectboxComponent from './SelectboxComponent.vue';
import ButtonComponent from './ButtonComponent.vue';

export default {
  name: 'Cleaning',
  components: {
    CheckboxComponent,
    RadioComponent,
    TextInputComponent,
    SelectboxComponent,
    ButtonComponent,
  },
  beforeMount() {
    this.$store.dispatch('loadCategory').then(() => {
      this.$store.dispatch('loadUserAnswer');
    });
  },
  computed: {
    ...mapState([
      'category',
      'step',
    ]),
    ...mapGetters([
      'currentCategory',
    ]),
  },
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

<style>
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
