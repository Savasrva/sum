<template>
  <div>
    <label v-for="option in currentCategory.options" :key="option.id">
      <input v-model="answer" :value="option.text"
        type="checkbox" :name="option.id" />
      {{option.text}}
    </label>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'CheckboxComponent',
  created() {
  },
  computed: {
    ...mapState([
      'userAnswer',
    ]),
    ...mapGetters([
      'currentCategory',
      'currentCategoryUserAnswer',
    ]),
  },
  watch: {
    answer(value) {
      this.updateAnswer(value);
    },
  },
  data() {
    return {
      answer: [],
    };
  },
  methods: {
    updateAnswer(answer) {
      this.currentCategoryUserAnswer.answer = answer;
      this.$store.dispatch('updateUserAnswer', this.currentCategoryUserAnswer);
    },
  },
};
</script>
