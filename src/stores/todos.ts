import { defineStore } from "pinia";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export const useTodoStore = defineStore({
    id: "todos",
    state: () => ({
        todos: [
            {
                id: 1,
                title: "Learn Vue",
                completed: true,
            },
            {
                id: 2,
                title: "Learn Pinia",
                completed: false,
            },
            {
                id: 3,
                title: "Learn TypeScript",
                completed: true,
            },
            {
                id: 4,
                title: "Learn Tailwind",
                completed: false,
            },
        ] as Todo[],
    }),
    getters: {
        getTodos(): Todo[] {
            return this.todos;
        },
        getIncompleteTodos(): Todo[] {
            return this.todos.filter((todo) => !todo.completed);
        },
        getCompletedTodos(): Todo[] {
            return this.todos.filter((todo) => todo.completed);
        },
    },
    actions: {
        addTodo(title: string): boolean {
            const id = this.todos.length + 1;
            this.todos.push({
                id,
                title,
                completed: false,
            });
            return true;
        },
        // remove completed todos
        removeCompletedTodos() {
            this.todos = this.getIncompleteTodos;
        },
        // toggle todos complete
        toggleTodo(id: number) {
            this.todos = this.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
        },
    },
    persist: true,
});
