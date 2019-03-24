import axios from 'axios';

class TodoService {
  getTodoGroups = async () => {
    const res = await axios.get('/api/todo-groups');
    return res.data;
  };

  getTodoItems = async () => {
    const res = await axios.get(`/api/todo-items/`);
    return res.data;
  };

  getTodoItemsById = async id => {
    const res = await axios.get(`/api/todo-items/${id}`);
    return res.data;
  };

  createTodoItem = async (title, todoGroupId) => {
    const res = await axios.post('/api/todo-items/', { title, todoGroupId });
    return res;
  };

  createTodoGroup = async (title) => {
    const res = await axios.post('/api/todo-groups/', { title });
    return res;
  };

  deleteTodoGroup = async (id) => {
    const res = await axios.delete(`/api/todo-groups/${id}`);
    return res;
  };

  deleteTodoItem = async (id) => {
    const res = await axios.delete(`/api/todo-items/${id}`);
    return res;
  };

}

export { TodoService };
