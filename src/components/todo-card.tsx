'use client';

import { IconTrash } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { todo } from '@/types/todo';
import useTodo from '@/hooks/use-todo';
import EditTodo from './shared/edit-todo';
import { Link } from 'react-router-dom';

interface TodoCardProps {
  todoItem: todo;
}

export default function TodoCard({ todoItem }: TodoCardProps) {
  const { deleteTodo } = useTodo();

  const handleDelete = () => {
    const answer = confirm('Are you sure you want to delete this todo?');
    if (!answer) return;
    deleteTodo(todoItem.id);
  };

  console.log(todoItem)
  return (
    <Link to={`todo/${todoItem.id}`}>
      <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.03]">
        <CardContent className="flex flex-col gap-2">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
            {todoItem.title}
          </h3>
          {todoItem.description && (
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-300 wrap-break-words">
              {todoItem.description}
            </p>
          )}
        </CardContent>

        <CardFooter className="flex justify-end gap-2">
          <EditTodo todoItem={todoItem} />

          <Button
            size="sm"
            variant="outline"
            className="flex items-center gap-1 px-3 py-1 rounded-lg border-red-300 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-400 dark:hover:bg-red-700 transition"
            onClick={handleDelete}
          >
            <IconTrash size={16} />
            Delete
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
