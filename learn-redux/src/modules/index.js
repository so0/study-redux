import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

//counter, todos 리듀서를 합쳐서 루트 리듀서
// 리듀서를 합치는 작업은 리덕스에 내장 combineReducers 사용
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
