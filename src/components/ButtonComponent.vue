<template>
  <section>
    <button :disabled="isFirst" @click="prevStep" class="btn">뒤로</button>
    <button :disabled="isLast" @click="nextStep" class="btn">앞으로</button>
    <button :disabled="!isLast" @click="onSubmit" class="btn">제출</button>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'ButtonComponent',
  computed: {
    ...mapState([
      'step',
    ]),
    ...mapGetters([
      'hasAnswer',
      'isFirst',
      'isLast',
    ]),
  },
  methods: {
    ...mapActions([
      'updateStep',
      'submit',
    ]),
    nextStep() {
      this.validation(this.updateStep.bind(null, this.step + 1));
    },
    prevStep() {
      this.updateStep(this.step - 1);
    },
    onSubmit() {
      this.validation(this.submit);
    },
    validation(callback) {
      if (this.hasAnswer) {
        callback();
      } else {
        window.alert('답을 선택하거나 입력해주세요.');
      }
    },
  },
};
</script>
