<script lang="ts" setup>
import { computed } from "vue";
import { useTodoStore } from "@/stores/todos";

const store = useTodoStore();
const { getCompletedTodos, getIncompleteTodos } = store;
const incompleteTodosCount = computed(() => getIncompleteTodos.length);
const completedTodosCount = computed(() => getCompletedTodos.length);
const completedRatio = computed(
    () =>
        (completedTodosCount.value /
            (completedTodosCount.value + incompleteTodosCount.value)) *
        100
);
</script>
<template>
    <div
        class="flex flex-row gap-5 bg-gray-900 text-white w-full justify-around py-5 items-center h-screen-20"
    >
        <div class="bg-orange-600 p-5 rounded-lg w-72 h-fit">
            <div class="flex flex-row justify-between">
                <span>Incomplete</span>
                <router-link to="/todos">See All</router-link>
            </div>
            <ul>
                <li v-for="todo in getIncompleteTodos" :key="todo.id">
                    <span class="font-bold text-lg">{{ todo.title }}</span>
                </li>
            </ul>
        </div>
        <div class="bg-lime-600 p-5 rounded-lg w-72 h-fit">
            <div class="flex flex-row justify-between">
                <span>Completed</span>
                <router-link to="/todos">See All</router-link>
            </div>
            <ul>
                <li v-for="todo in getCompletedTodos" :key="todo.id">
                    <span class="font-bold text-lg">{{ todo.title }}</span>
                </li>
            </ul>
        </div>
        <div class="bg-cyan-700 p-5 rounded-lg w-72 h-fit">
            <div class="flex flex-row justify-between">
                <span>Progress</span>
                <router-link to="/todos">See All</router-link>
            </div>
            <div class="flex flex-row justify-between">
                <span>{{ completedRatio.toFixed(2) }}</span>
                <span>{{
                    completedTodosCount +
                    "/" +
                    (incompleteTodosCount + completedTodosCount)
                }}</span>
            </div>
        </div>
    </div>
</template>
