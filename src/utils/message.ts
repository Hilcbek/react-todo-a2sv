// src/schemas/todo.messages.ts

export const todoMessages = {
  title: {
    required: 'Title is required',
    min: 'Title must be at least 3 characters',
    max: 'Title must be at most 50 characters',
  },
  description: {
    max: 'Description cannot exceed 200 characters',
  },
};
