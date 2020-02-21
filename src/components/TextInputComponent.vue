<template>
  <div>
    <input v-model="chosenData" name="custom" type="text" />
  </div>
</template>

<script>
export default {
  name: 'TextInputComponent',
  props: {
    item: Object,
  },
  data() {
    return {
      chosenData: '',
    };
  },
  destroyed() {
    this.$emit('passData', this.chosenData);
  },
};
</script>
