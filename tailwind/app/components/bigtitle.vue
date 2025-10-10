<template>
    <li class="h-48 m-4 mt-10 border-2 border-border rounded-lg p-3 list-none sm:w/1/2 md:w-1/3 lg:w-1/3">
        <div class="flex justify-between -mt-2 font-bold max-sm:text-sm sm:text-sm md:text-sm lg:text-xl"> 
            <!-- max-sm:text-sm -->
                <h2 class="font-semi_bold sm:pr-5 md:pr-1">A very big title for a catalog with many thing</h2>
                <div class="mr-4 max-sm:hidden sm:hidden md:inline lg:inline">...</div>
        </div>

        <div class="flex mt-4 max-sm:flex-wrap sm:flex-wrap md:flex-wrap max-md:flex-wrap lg:flex-nowrap">
            <button class="bg-tag_bg border-tag_border border-2 rounded-md px-3 m-1 font-regular max-sm:text-xs sm:text-xs md:text-sm lg:text-sm">
                Sneakers
            </button>
            <button class="bg-tag_bg border-tag_border border-2 rounded-md px-3 m-1 font-regular max-sm:text-xs sm:text-xs md:text-sm lg:text-sm">
                boots
            </button>
            <button class="bg-tag_bg border-tag_border border-2 rounded-md px-3 m-1 font-regular max-sm:text-xs sm:text-xs md:text-sm lg:text-sm">
                Belt
            </button>
            <button class="bg-tag_bg border-tag_border border-2 rounded-md px-3 m-1 font-regular max-sm:text-xs sm:text-xs md:text-sm lg:text-sm">
                Socks
            </button>
            <button class="bg-tag_bg border-tag_border border-2 rounded-md px-3 m-1 font-regular max-sm:text-xs sm:text-xs md:text-sm lg:text-sm">
                +3
            </button>
        </div>

        <div class="text-sm">
            <p class="text-grey mt-2 font-regular">Created on 12.27.2024</p>
            <p class="mt-2 font-medium">254 products</p>
        </div>
    </li>
</template>