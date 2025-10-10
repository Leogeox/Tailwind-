<script setup>
import { PlusSquare } from 'lucide-vue-next';
</script>

<template>
    <div class="flex justify-between pb-2 border-b-2 border-border">
        <div class="m-4 text-2xl font-public_sans font-semibold ">My Catalogs</div>

        <button class="flex m-3 bg-blue p-2 pl-3 pr-3 text-white rounded-md font-medium gap-2">
            <PlusSquare/>
            <p>Create catalog</p>
        </button>
    </div>
</template>

// slot