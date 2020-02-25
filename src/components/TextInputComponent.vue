<template>
  <div>
    <input @change="updateAnswer" v-model="currentUserAnswer.answer" name="custom" type="text" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'TextInputComponent',
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
