import getters from '@/store/getters';

describe('getters test block', () => {
  const { currentCategory, currentCategoryUserAnswer, isFirst, isLast, hasAnswer, answerData } = getters;
  const category = {
    "formId": 1,
      "title": "사무실 대청소 요청서 폼",
      "items": [{
      "itemId": 1,
      "title": "원하는 청소 스타일은 무엇인가요?",
      "formType": 1,
      "options": [{
        "id": 1,
        "text": "스팀청소"
      }, {
        "id": 2,
        "text": "진공청소기로 청소"
      }, {
        "id": 3,
        "text": "쓰레기 비우기"
      }],
    }, {
      "itemId": 2,
      "title": "몇시간 청소를 원하시나요?",
      "formType": 2,
      "options": [{
        "id": 3,
        "text": "30분"
      }, {
        "id": 4,
        "text": "1시간"
      }, {
        "id": 5,
        "text": "2시간"
      }],
    }, {
      "itemId": 3,
      "title": "추가로 원하시는 청소 스타일이 있나요? 직접 입력해주세요",
      "formType": 3,
      "options": []
    }, {
      "itemId": 4,
      "title": "네번째 질문입니다",
      "formType": 4,
      "options": [{
        "id": 6,
        "text": "첫번째 셀렉트박스 질문 입니다"
      }, {
        "id": 7,
        "text": "두번째 셀렉트박스 질문 입니다"
      }, {
        "id": 8,
        "text": "세번째 셀렉트박스 질문 입니다"
      }],
    }],
  };
  const state = {
    userAnswer: {
      1: {
        itemId: 1,
        answer: [
          '스팀청소',
          '쓰레기 비우기',
        ],
      },
      2: {
        itemId: 2,
        answer: '30분',
      },
    },
    step: 1,
    category,
  };

  it('currentCategory', () => {
    const item = currentCategory(state);
    expect(category.items.indexOf(item)).toBe(state.step);
  });

  it('currentCategoryUserAnswer', () => {
    const currentCategory = category.items[1];
    const currentAnswer = currentCategoryUserAnswer(state, { currentCategory });
    expect(currentAnswer).toBe(state.userAnswer[currentCategory.itemId]);
  });

  it('isFirst', () => {
    expect(isFirst({step: 1})).toBe(false);
    expect(isFirst({step: 0})).toBe(true);
  });

  it('isLast', () => {
    expect(isLast({step: 1, category})).toBe(false);
    expect(isLast({step: 3, category})).toBe(true);
  });

  it('hasAnswer', () => {
    const state = {
      userAnswer: {
        1: {
          itemId: 1,
          answer: [
            '스팀청소',
            '쓰레기 비우기',
          ],
        },
        2: {
          itemId: 2,
          answer: '',
        },
      },
    };
    expect(hasAnswer(state, { currentCategory: category.items[1] })).toBe(false);
    expect(hasAnswer(state, { currentCategory: category.items[0] })).toBe(true);
  });

  it('answerData', () => {
    const answer = answerData(state);
    const correctAnswer = {
      id: category.formId,
      items: [
        {
          id: 1,
          answer: state.userAnswer["1"].answer.join(','),
        },
        {
          id: 2,
          answer: state.userAnswer["2"].answer,
        }
      ]
    };
    expect(answer).toStrictEqual(correctAnswer);
  });
});