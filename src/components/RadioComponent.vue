<template>
  <div>
    <label v-for="option in options" :key="option.id">
      <input v-model="chosenData" :value="option.id" type="radio" :name="option.id" />
      {{option.text}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'SelectboxComponent',
  props: {
    item: Object,
  },
  data() {
    return {
      options: this.item.options.slice(),
      chosenData: [],
    };
  },
  destroyed() {
    this.$emit('passData', this.chosenData);
  },
};
</script>
