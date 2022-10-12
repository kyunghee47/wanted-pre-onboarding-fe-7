import { AUTHAPI } from "../utils/api";

export const URLS = {
  TODOS: `/todos`,
};

/* todo 가져오기 */
export const getTodo = async (setTodo) => {
  try {
    await AUTHAPI.get(URLS.TODOS).then((res) => {
      setTodo(res.data);
    });
  } catch (error) {
    console.log(error);
  }
};

/* todo 삭제 */
export const deleteTodo = async (id) => {
  try {
    await AUTHAPI.delete(URLS.TODOS + `/${id}`);
  } catch (error) {
    console.log(error);
  }
};

/* todo 보내기 */
export const postTodo = async (value) => {
  try {
    await AUTHAPI.post(URLS.TODOS, {
      todo: value,
    });
  } catch (error) {
    console.log(error);
  }
};

/* todo 수정 */
export const updateTodo = async (id, value) => {
  try {
    await AUTHAPI.put(URLS.TODOS + `/${id}`, {
      todo: value.todo,
      isCompleted: true,
    });
  } catch (error) {
    console.log(error);
  }
};
