<template>
  <main class="min-h-screen lg:flex">
    <Nav/>
    <section class="w-screen h-screen">
      <Header/>

      <div class="flex1 justify-items-center gap-3 max-sm:p-4 max-sm:flex-col sm:p-4 sm:flex-col md:p-4 md:flex-col lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3">
        <Post class="items-stretch">
          <div class="pl-2 text-sm">
            <div class="font-bold font-medium">Create catalog</div>
            <p class="text-grey mt-4 font-regular">Create new catalog to add products and generate content.</p>
          </div> 
          <Button class="justify-center gap-1 mt-12 sm:p-4 md:p-4 lg:p-2"/>
        </Post>

        <Post>
          <div class="flex justify-between mt-1 font-bold text-xl">
              <h2 class="font-semi_bold">Christmas 2024</h2>
              <div class="mr-4 animate-pulse">...</div>
          </div>
          
          <div class="flex flex-wrap mt-9 text-texttiny">
              <Tag>Sneakers</Tag>
              <Tag>boots</Tag>
          </div>
          
          <div class="text-sm">
              <Bottompost/>
          </div>
        </Post>

        <Post class="items-stretch">
          <div class="flex justify-between -mt-2 font-bold text-xl"> 
              <h2 class="font-semi_bold pr-2">A very big title for a catalog with many thing</h2>
              <div class="mr-4 mt-2 animate-pulse">...</div>
          </div>

          <div class="flex flex-wrap mt-4 text-texttiny">
              <Tag>Sneakers</Tag>
              <Tag>boots</Tag>
              <Tag>Belt</Tag>
              <Tag>Socks</Tag>
              <Tag>+3</Tag>
          </div>

          <div class="text-sm">
              <Bottompost/>
          </div>
        </Post> 
      </div>

    </section>
  </main>
</template>
