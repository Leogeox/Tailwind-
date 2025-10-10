<script setup>
import { PlusSquare } from 'lucide-vue-next';
</script>

<template>
    <div class="flex justify-between pb-2 border-b-2 border-border">
        <div class="m-4 text-2xl font-public_sans font-semibold max-sm:m-0 max-sm:mt-4 max-sm:ml-2">My Catalogs</div>

        <button class="flex items-center m-3 bg-blue hover:bg-darkblue transition p-2 text-white rounded-md font-medium gap-2">
            <div class="animate-pulse">
                <PlusSquare/>
            </div>
            <p>Create catalog</p>
        </button>
    </div>
</template>

// slot