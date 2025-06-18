import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postcodeSearchSlice from "./features/postcodeSearchSlice";

/* redux toolkit combineReducers 메소드를 사용하여 reducer들을 하나의 객체로 묶음 */
const rootReducers = combineReducers({
  postcodeSearch: postcodeSearchSlice, // 주소 검색 컴포넌트(카카오맵)
});

// 2025.05.26 [mhlim]: redux toolkit configureStore 메소드를 사용하여 store 생성
export const store = configureStore({
  reducer: rootReducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
