<script lang="ts" setup>
import { useTodoStore } from "@/stores/todos";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useTodoStore();
const { todos, getIncompleteTodos } = storeToRefs(store);
const { addTodo } = store;
const newTodo = ref("");
</script>
<template>
    <div class="bg-cyan-900 text-white w-full py-5 h-screen-20">
        <input
            class="w-1/2 border-2 border-cyan-300 p-2 bg-transparent outline-none mx-auto block mb-5 placeholder:text-gray-300"
            type="text"
            v-model="newTodo"
            placeholder="Add a new todo"
            @keyup.enter="addTodo(newTodo) && (newTodo = '')"
        />
        <table class="w-1/2 mx-auto">
            <tr class="border-b-2">
                <th class="text-left">#</th>
                <th class="text-left">Title</th>
                <th class="text-right">Completed</th>
            </tr>
            <tr v-for="todo in todos" :key="todo.id">
                <td class="text-left">{{ todo.id }}</td>
                <td class="text-left">
                    <input
                        v-model="todo.title"
                        class="bg-transparent outline-none p-2 border-red-300 transition-all duration-200 focus:border-b-2 focus:text-red-300"
                    />
                </td>
                <td class="text-right">
                    <input type="checkbox" v-model="todo.completed" />
                </td>
            </tr>
            <tr v-if="todos.length === 0">
                <td colspan="3" class="text-center">
                    <span class="text-lg">~No Todos~</span>
                </td>
            </tr>
        </table>
        <button
            @click="todos = getIncompleteTodos"
            class="bg-transparent text-red-300 p-2 border rounded border-red-300 transition-all duration-200 block mx-auto mt-5 hover:bg-red-600 hover:text-white hover:border-white"
        >
            Remove Completed
        </button>
    </div>
</template>
