export default {
  currentCategory: ({ step, category }) => category.items[step],
  currentUserAnswer: ({ userAnswer }, { currentCategory }) => {
    const answer = userAnswer[currentCategory.itemId];
    const emptyAnswer = currentCategory.formType === 1 ? [] : '';
    return answer
      || { itemId: currentCategory.itemId, answer: emptyAnswer };
  },
  isFirst: ({ step }) => step === 0,
  isLast: ({ step, category }) => (step + 1) === category.items.length,
  hasAnswer: (state, { currentUserAnswer }) => {
    const { answer } = currentUserAnswer;
    const flag = Array.isArray(answer);
    return flag ? !!answer.length : !!answer;
  },
  answerData: ({ category, userAnswer }) => ({
    id: category.formId,
    items: Object.keys(userAnswer).map((key) => {
      const item = userAnswer[key];
      return {
        id: item.itemId,
        answer: Array.isArray(item.answer) ? item.answer.join(',') : item.answer,
      };
    }),
  }),
};
