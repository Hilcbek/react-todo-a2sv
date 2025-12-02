import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { todoSchema, type TodoSchemaType } from '@/schemas/todo.schema';
import { generateTodoId } from '@/utils/helper';
import useTodo from '@/hooks/use-todo';

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function AddTodo() {
  const [open, setOpen] = useState(false);
  const { addTodo } = useTodo();

  const form = useForm<TodoSchemaType>({
    resolver: zodResolver(todoSchema),
    defaultValues: { title: '', description: '' },
  });

  const handleSubmit = (values: TodoSchemaType) => {
    const now = new Date().toISOString();
    const newTodo = {
      id: generateTodoId(),
      title: values.title,
      description: values.description,
      createdAt: now,
      updatedAt: now,
    };

    addTodo(newTodo);
    form.reset();
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="flex w-full h-12 cursor-pointer items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg shadow-sm hover:shadow-md transition"
        >
          + Add Todo
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full max-w-md p-6 overflow-y-auto shadow-lg rounded-xl"
      >
        <SheetHeader className="mb-4">
          <SheetTitle className="text-lg font-semibold">
            Add New Todo
          </SheetTitle>
          <SheetDescription className="text-xs text-muted-foreground">
            Fill in the form below to create a new todo item.
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="grid grid-cols-1 gap-4 text-sm"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter todo title…"
                      {...field}
                      className="rounded-md px-3 py-2 text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Optional description…"
                      {...field}
                      className="rounded-md px-3 py-2 min-h-20 text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-500" />
                </FormItem>
              )}
            />

            <SheetFooter className="flex flex-row gap-2 mt-4">
              <SheetClose asChild>
                <Button
                  variant="outline"
                  className="flex-1 px-4 py-2 text-sm rounded-lg"
                >
                  Cancel
                </Button>
              </SheetClose>
              <Button
                type="submit"
                className="flex-1 px-4 py-2 text-sm rounded-lg"
              >
                Add Todo
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
