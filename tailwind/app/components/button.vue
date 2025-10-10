<script setup>
import { PlusSquare } from 'lucide-vue-next';
</script>

<template>
    <button class="flex bg-blue hover:bg-darkblue transition p-2 text-white rounded-md font-medium">
        <div class="animate-pulse">
            <PlusSquare/>
        </div>
        <p>Create catalog</p>
    </button>
</template>