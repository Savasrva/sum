<template>
  <div>
    <label v-for="option in options" :key="option.id">
      <input v-model="chosenData" :value="option.id" type="checkbox" :name="option.id" />
      {{option.text}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'CheckboxComponent',
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
