<template>
  <main class="min-h-screen lg:flex">
    <Nav/>

    <section class="w-screen h-screen">
      <Header/>

      <div class="flex1 justify-items-center gap-3 p-4 grid lg:grid-cols-2 xl:grid-cols-3">

        <!-- Post numero 1 -->
        <Post class="items-stretch">
          <div class="pl-2 text-sm">
            <div class="font-bold font-medium">Create catalog</div>
            <p class="text-grey mt-4 font-regular">Create new catalog to add products and generate content.</p>
          </div> 

          <Button class="justify-center gap-1 mt-12 sm:p-4 md:p-4 lg:p-2"/>
        </Post>

        <!-- Post numero 2 -->
        <Post>
          <Div class="mt-1">
            <h2 class="font-semi_bold">Christmas 2024</h2>
            <div class="mr-4 animate-pulse">...</div>
          </Div>

          <Tagdiv class="mt-9">
            <Tag>Sneakers</Tag>
            <Tag>boots</Tag>
          </Tagdiv>
          
          <Bottompost/>
        </Post>

        <!-- Post numero 3 -->
        <Post>
          <Div class="-mt-2">
            <h2 class="font-semi_bold pr-2">A very big title for a catalog with many thing</h2>
            <div class="mr-4 mt-2 animate-pulse">...</div>
          </Div>

          <Tagdiv class="mt-4">
            <Tag>Sneakers</Tag>
            <Tag>boots</Tag>
            <Tag>Belt</Tag>
            <Tag>Socks</Tag>
            <Tag>+3</Tag>
          </Tagdiv>

          <Bottompost/>
        </Post>
        
      </div>

    </section>

  </main>
</template>
