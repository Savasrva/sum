import mutations from '@/store/mutations';
import * as types from '@/store/mutation-types';

describe('mutations test block', () => {
  it('SAVE_USER_ANSWER', () => {
    const { SAVE_USER_ANSWER } = mutations;
    const state = { userAnswer: {} };
    const answer = {
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
    };
    SAVE_USER_ANSWER(state, answer);
    expect(state.userAnswer).toStrictEqual(answer);
  });

  it('UPDATE_USER_ANSWER', () => {
    const { UPDATE_USER_ANSWER } = mutations;
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
    };
    const answer = {
      itemId: 1,
      answer: [
        '스팀청소',
        '진공청소기',
      ],
    };
    UPDATE_USER_ANSWER(state, answer);
    expect(state.userAnswer['1']).toStrictEqual(answer);
  });

  it('UPDATE_STEP', () => {
    const { UPDATE_STEP } = mutations;
    const state = {
      step: 0,
    };
    const step = 2;
    UPDATE_STEP(state, step);
    expect(state.step).toBe(step);
  });

  it('SAVE_CATEGORY', () => {
    const { SAVE_CATEGORY } = mutations;
    const state = {
      category: {},
    };
    const category = {
      formId: 1,
      title: '사무실 대청소 요청서 폼',
      items: [{
        itemId: 1,
        title: '원하는 청소 스타일은 무엇인가요?',
        formType: 1,
        options: [{
          id: 1,
          text: '스팀청소',
        }, {
          id: 2,
          text: '진공청소기로 청소',
        }, {
          id: 3,
          text: '쓰레기 비우기',
        }],
      }, {
        itemId: 2,
        title: '몇시간 청소를 원하시나요?',
        formType: 2,
        options: [{
          id: 3,
          text: '30분',
        }, {
          id: 4,
          text: '1시간',
        }, {
          id: 5,
          text: '2시간',
        }],
      }, {
        itemId: 3,
        title: '추가로 원하시는 청소 스타일이 있나요? 직접 입력해주세요',
        formType: 3,
        options: [],
      }, {
        itemId: 4,
        title: '네번째 질문입니다',
        formType: 4,
        options: [{
          id: 6,
          text: '첫번째 셀렉트박스 질문 입니다',
        }, {
          id: 7,
          text: '두번째 셀렉트박스 질문 입니다',
        }, {
          id: 8,
          text: '세번째 셀렉트박스 질문 입니다',
        }],
      }],
    };

    SAVE_CATEGORY(state, category);
    expect(state.category).toStrictEqual(category);
  });
});
