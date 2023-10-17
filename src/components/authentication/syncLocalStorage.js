import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../utilities/redux/slice/authenticationSlice";
import {
  initializeCategoryList,
  initializeToDoList,
} from "../../utilities/redux/slice/toDoSlice";
import store from "../../utilities/redux/store";

export default function SyncLocalStorage({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const state = localStorage.getItem("state");
    if (state != null) {
      const deserializedState = JSON.parse(state);
      dispatch(register(deserializedState.authentication));
      dispatch(initializeToDoList(deserializedState.todo.todo));
      dispatch(initializeCategoryList(deserializedState.todo.category));
    }
  }, []);

  store.subscribe(() => {
    const state = store.getState();
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  });

  return children;
}
