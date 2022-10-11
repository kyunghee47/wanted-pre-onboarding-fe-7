import { AUTHAPI } from "../utils/api";

export const URLS = {
  TODOS: `/todos`,
};

export const getTodo = (setTodo) => {
  AUTHAPI.get(URLS.TODOS).then((res) => {
    console.log(res.data);
    setTodo(res.data);
  });
};

export const deleteTodo = async (id) => {
  await AUTHAPI.delete(URLS.TODOS + `/${id}`).then((res) => {});
};

export const postTodo = (value) => {
  AUTHAPI.post(URLS.TODOS, {
    todo: value,
  }).then((res) => {});
};
export const updateTodo = async (id, value) => {
  await AUTHAPI.put(URLS.TODOS + `/${id}`, {
    todo: value.todo,
    isCompleted: true,
  }).then((res) => {});
};
