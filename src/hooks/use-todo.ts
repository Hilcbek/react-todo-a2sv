import type { todo } from '@/types/todo';
import { create } from 'zustand';

interface todoProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  todos: todo[];
  id: string | null;
  setId: (id: string | null) => void;
  addTodo: (todo: todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (updated: todo) => void;
}
const useTodo = create<todoProps & { loadTodos: () => void }>((set) => ({
  open: false,
  id: null,
  todos: JSON.parse(localStorage.getItem('todos') || '[]'),
  setId: (id: string | null) => set({ id }),
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),

  addTodo: (todo) =>
    set((state) => {
      const newTodos = [...state.todos, todo];
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return { todos: newTodos };
    }),

  deleteTodo: (id) =>
    set((state) => {
      const newTodos = state.todos.filter((t) => t.id !== id);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return { todos: newTodos };
    }),

  updateTodo: (updated) =>
    set((state) => {
      const newTodos = state.todos.map((t) =>
        t.id === updated.id ? updated : t
      );
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return { todos: newTodos };
    }),

  loadTodos: () =>
    set({
      todos: JSON.parse(localStorage.getItem('todos') || '[]'),
    }),
}));


export default useTodo;
