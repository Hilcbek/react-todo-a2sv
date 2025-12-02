React + TypeScript + Vite Todo App

A modern Todo application built with React, TypeScript, Vite, and TailwindCSS, featuring smooth UI interactions, local storage persistence, and dark/light theme support.

Features

Add, Edit, Delete Todos with intuitive UI using Shadcn UI components.

Local Storage Persistence to save todos across page reloads.

Dark/Light Theme toggle using NextThemes and TailwindCSS.

Form Validation powered by react-hook-form and zod.

Global State Management with Zustand.

Responsive design with hover and transition effects for a smooth UX.

Project Structure
src/
 ├─ components/
 │   ├─ add-todo.tsx       # Add Todo form (Sheet)
 │   ├─ todo-card.tsx      # Todo Card UI
 │   ├─ shared/
 │   │   └─ edit-todo.tsx  # Edit Todo dialog
 │   └─ header.tsx         # App header with Add Todo button & theme toggle
 ├─ hooks/
 │   └─ use-todo.ts        # Zustand global state
 ├─ pages/
 │   └─ home.tsx           # Home page with todo list
 └─ types/
     └─ todo.ts            # Todo type definitions

State Management

Zustand Hook (useTodo) stores todos and manages dialog states.

Provides addTodo, updateTodo, deleteTodo, setId, onOpen, and onClose methods.

Automatically syncs todos to localStorage.

UI & Components

Shadcn UI for Cards, Buttons, Dialogs, and Forms.

Smooth transitions and responsive layouts with TailwindCSS.

Icons using @tabler/icons-react.

Dark/light mode support with NextThemes.

Getting Started
pnpm install
pnpm dev


Todos persist locally.

Edit opens a dialog with prefilled data.

Delete asks for confirmation.