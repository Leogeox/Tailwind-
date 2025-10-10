<template>
    <section class="flex items-center max-sm:flex-col sm:flex-col md:flex-row lg:flex-row">
        <li class="flex flex-col items-stretch w-1/3 h-48 m-4 mt-10 border-2 border-border rounded-lg p-3 list-none">
            <div class="pl-2 text-sm">
                <div class="font-bold font-medium">Create catalog</div>
                <p class="text-grey mt-4 font-regular">Create new catalog to add products and generate content.</p>
            </div> 

            <button class="flex justify-center mt-12 bg-blue p-2 text-white rounded-md font-medium">
                <img class="mr-2" src= "assets/img/create.svg" alt="Create a catalog">
                <p>Create catalog</p>
            </button>
        </li>

        <li class="w-1/3 h-48 m-4 mt-10 border-2 border-border rounded-lg p-3 list-none">
            <div class="flex justify-between mt-1 font-bold max-sm:text-sm sm:text-sm md:text-1xl lg:text-xl">
                <h2 class="font-semi_bold">Christmas 2024</h2>
                <div class="mr-4 max-sm:hidden sm:hidden md:inline lg:inline">...</div>
            </div>
            
            <div class="flex mt-8 max-sm:flex-wrap sm:flex-wrap">
                <button class="bg-tag_bg border-tag_border border-2 rounded-md text-sm px-3 m-1 font-regular max-sm:text-xs sm:text-xs md:text-sm lg:text-sm">
                    Sneakers
                </button>
                <button class="bg-tag_bg border-tag_border border-2 rounded-md text-sm px-3 m-1 font-regular max-sm:text-xs sm:text-xs md:text-sm lg:text-sm">
                    boots
                </button>
            </div>

            <div class="text-sm">
                <p class="text-grey mt-2 font-regular">Created on 12.27.2024</p>
                <p class="mt-2 font-medium">254 products</p>
            </div>

        </li>

        <li class="w-1/3 h-48 border-2 border-border rounded-lg p-3 list-none m-4 mt-10">
            <div class="flex justify-between -mt-2 font-bold max-sm:text-sm sm:text-sm md:text-sm lg:text-xl"> 
                <!-- max-sm:text-sm -->
                    <h2 class="font-semi_bold sm:pr-5 md:pr-1">A very big title for a catalog with many thing</h2>
                    <div class="mr-4 max-sm:hidden sm:hidden md:inline lg:inline">...</div>
            </div>

            <div class="flex mt-4 max-sm:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap">
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
    </section>
</template>