<script setup lang="ts">
const description = ref<string>('');
const emit = defineEmits();

const onSubmit = async () => {
    await $fetch('/api/createTask', {
        method: 'POST',
        body: { description: description.value }
    }).then(resp => {
        emit('task-created', resp.data);
        description.value = '';
    }).catch(e => {
        alert(e)
    })
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <textarea name="description" cols="30" rows="2" placeholder="Enter task description" required
            v-model="description" />
        <button type="submit">Create</button>
    </form>
</template>