<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { type Task } from "./keelClient";
import { createClient } from './utils/createClient';

const tasks = ref<Task[]>([]);
const errorMsg = ref<string>('');

const fetchData = async () => {
  const client = createClient();
  const response = await client.api.queries.listTask();

  if (response.data) {
    tasks.value = response.data.results;
  } else {
    errorMsg.value = response.error.message;
  }
};

const handleTaskCreated = (createdTask: Task) => {
  tasks.value.unshift(createdTask);
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div>
    <div>
      <div>
        <create-task-form @task-created="handleTaskCreated" />
        <section>
          <p v-if="errorMsg !== ''">{{ errorMsg }}</p>
          <p v-else-if="tasks.length === 0">No tasks yet!</p>
          <task-list v-else :tasks="tasks" />
        </section>
      </div>
    </div>
  </div>
</template>
