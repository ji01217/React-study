// 리덕스 import
const redux = require('redux');

// 리듀서 함수
const couterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// createStore()안에 리듀서 함수를 넣어 어떤 리듀서가 그 저장소를 변경하는지 명시한다.
const store = redux.createStore(couterReducer);

// 구독함수로 상태가 변경될 때마다 트리거되고, getState()메소드로 변경된 후의 최신 상태를 받을 수 있다.
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// 리덕스가 위의 구독 함수를 인식하고 상태가 변경될 때마다 함수를 실행하라고 말해준다.
store.subscribe(counterSubscriber);

// dispatch: 액션을 발송하는 메소드, 식별자 역할을 하는 타입프로퍼티를 가진다.
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
