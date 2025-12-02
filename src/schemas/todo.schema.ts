import { todoMessages } from '@/utils/message';
import { z } from 'zod';

export const todoSchema = z.object({
  title: z
    .string()
    .min(3, todoMessages.title.min)
    .max(50, todoMessages.title.max)
    .nonempty(todoMessages.title.required),

  description: z.string().max(200, todoMessages.description.max).optional(),
});

export type TodoSchemaType = z.infer<typeof todoSchema>;
