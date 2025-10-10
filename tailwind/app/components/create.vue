<script setup>
import { PlusSquare } from 'lucide-vue-next';
</script>


<template>
    <li class="flex w-full flex-col items-stretch h-48 mt-10 border-2 border-border rounded-lg p-3 list-none lg:m-4">
        <div class="pl-2 text-sm">
            <div class="font-bold font-medium">Create catalog</div>
            <p class="text-grey mt-4 font-regular">Create new catalog to add products and generate content.</p>
        </div> 

        <button class="flex justify-center bg-blue hover:bg-darkblue transition p-2 text-white rounded-md font-medium gap-1 mt-12 sm:p-4 md:p-4 lg:p-2">
            <div class="animate-pulse">
                <PlusSquare/>
            </div>
            <p>Create catalog</p>
        </button>
    </li>
</template>