import useTodo from '@/hooks/use-todo';
import AddTodo from './add-todo';
import { ModeToggle } from '../mode-toggler';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {
  const { todos } = useTodo();

  return (
    <header className="w-full bg-background shadow-sm dark:shadow-gray-800 py-2 px-8 md:px-12 flex items-center justify-between rounded-b-lg">
      <Link to={'/'} className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-wide">
        TODO - PROJECT
      </Link>

      <div className="flex items-center gap-3">
        {todos.length > 0 && (
          <div className="transition-all duration-200 hover:scale-105">
            <AddTodo />
          </div>
        )}
        <div className="transition-all duration-200 hover:scale-105">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
