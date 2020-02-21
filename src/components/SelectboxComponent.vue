<template>
 <div>
   <select v-model="chosenData">
     <option v-for="option in options" :key="option.id" :value="option.text">
       {{option.text}}
     </option>
   </select>
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
      chosenData: '',
    };
  },
  beforeMount() {
    this.chosenData = this.options[0].text;
  },
  destroyed() {
    this.$emit('passData', this.chosenData);
  },
};
</script>
