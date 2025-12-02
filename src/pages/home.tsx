import { useEffect } from 'react';
import AddTodo from '@/components/shared/add-todo';
import TodoCard from '@/components/todo-card';
import useTodo from '@/hooks/use-todo';

export default function HomePage() {
  const { todos, loadTodos } = useTodo();

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  if (!todos.length) {
    return (
      <div className="min-h-full w-screen flex flex-col items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-700 mb-3">
            No Todos Yet
          </h1>
          <p className="text-gray-500 mb-4">
            Your list is empty — add something to get started! ✨
          </p>
          <AddTodo />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full w-screen p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
            Your Tasks 📋
          </h1>
          <p className="text-gray-500 mt-2">Stay organized. Stay productive.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {todos.map((todo) => (
            <TodoCard key={todo.id} todoItem={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}
