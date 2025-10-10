<template>
    <li class="flex flex-col w-full h-48 mt-10 border-2 border-border rounded-lg p-3 list-none lg:m-4">
        <div class="flex justify-between -mt-2 font-bold text-xl"> 
            <!-- max-sm:text-sm -->
            <h2 class="font-semi_bold pr-2">A very big title for a catalog with many thing</h2>
            <div class="mr-4 mt-2 animate-pulse">...</div>
        </div>

        <div class="flex flex-wrap mt-4 text-texttiny">
            <button class="bg-tag_bg hover:bg-tag_bg_hover transition border-tag_border border-2 rounded-md px-3 m-1 font-regular">
                <p>Sneakers</p>
            </button>
            <button class="bg-tag_bg hover:bg-tag_bg_hover transition border-tag_border border-2 rounded-md px-3 m-1 font-regular">
                boots
            </button>
            <button class="bg-tag_bg hover:bg-tag_bg_hover transition border-tag_border border-2 rounded-md px-3 m-1 font-regular">
                Belt
            </button>
            <button class="bg-tag_bg hover:bg-tag_bg_hover transition border-tag_border border-2 rounded-md px-3 m-1 font-regular">
                Socks
            </button>
            <button class="bg-tag_bg hover:bg-tag_bg_hover transition border-tag_border border-2 rounded-md px-3 m-1 font-regular">
                +3
            </button>
        </div>

        <div class="text-sm">
            <p class="text-grey mt-2 font-regular ">Created on 12.27.2024</p>
            <p class="mt-3 font-medium animate-bounce">254 products</p>
        </div>
    </li>
</template>