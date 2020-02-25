<template>
  <div>
    <label v-for="option in currentCategory.options" :key="option.id">
      <input @change="updateAnswer" v-model="currentUserAnswer.answer" :value="option.text"
             type="radio" :name="option.id" />
      {{option.text}}
    </label>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'SelectboxComponent',
  computed: {
    ...mapState([
      'userAnswer',
    ]),
    ...mapGetters([
      'currentCategory',
      'currentUserAnswer',
    ]),
  },
  methods: {
    updateAnswer() {
      this.$store.dispatch('updateUserAnswer', this.currentUserAnswer);
    },
  },
};
</script>
