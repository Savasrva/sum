<template>
  <div>
    <label v-for="option in currentCategory.options" :key="option.id">
      <input v-model="chosenData" :value="option.id" type="checkbox" :name="option.id" />
      {{option.text}}
    </label>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CheckboxComponent',
  props: {
    item: Object,
  },
  data() {
    return {
      chosenData: [],
    };
  },
  created() {
    console.log(this.currentCategory);
  },
  computed: mapState([
    'currentCategory',
  ]),
};
</script>
