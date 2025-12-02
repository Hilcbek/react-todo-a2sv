import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useTodo from '@/hooks/use-todo';
import { format } from 'date-fns';

// shadcn/ui
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import EditTodo from '@/components/shared/edit-todo';

export interface Todo {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export default function SingleTodo() {
  const { id } = useParams<{ id: string }>();
  const { todo, getSingleTodo } = useTodo();

  useEffect(() => {
    if (id) getSingleTodo(id);
  }, [id, getSingleTodo]);

  if (!todo) {
    return (
      <div className="flex justify-center pt-28 text-muted-foreground">
        Not found
      </div>
    );
  }

  return (
    <div className="w-full h-full flex justify-center py-10 px-4">
      <Card className="w-full max-w-2xl shadow-lg border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl font-bold tracking-tight">
              {todo.title}
            </CardTitle>

            {/* Status Badge */}
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Active
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-sm text-muted-foreground mb-1">Description</h3>
            <p className="text-base leading-relaxed text-foreground">
              {todo.description || 'No description provided.'}
            </p>
          </div>

          <Separator />

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Created At</p>
              <p className="font-medium">
                {format(new Date(todo.createdAt), 'PPP')}
              </p>
            </div>

            <div>
              <p className="text-muted-foreground">Last Updated</p>
              <p className="font-medium">
                {format(new Date(todo.updatedAt), 'PPP')}
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end">
         <EditTodo todoItem={todo}/>
        </CardFooter>
      </Card>
    </div>
  );
}
