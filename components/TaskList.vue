<script setup lang="ts">
import { type Task } from "../keelClient";

const props = defineProps<{
    tasks: Task[]
}>();
</script>

<template>
    <ul>
        <li v-for="task in props.tasks" :key="task.id">
            <div>
                <div>
                    <p>{{ task.description }}</p>
                    <div>
                        <nuxt-link :to="`/${task.id}`">
                            <p>Edit</p>
                        </nuxt-link>
                        <button>
                            <p>Delete</p>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>
