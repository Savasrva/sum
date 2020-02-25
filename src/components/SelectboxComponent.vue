<template>
 <div>
   <select @change="updateAnswer" v-model="currentUserAnswer.answer">
     <option disabled value="">옵션을 선택해주세요.</option>
     <option v-for="option in currentCategory.options" :key="option.id" :value="option.text">
       {{option.text}}
     </option>
   </select>
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
