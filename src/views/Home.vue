<template>
  <section class="bg-[#371b6e] min-h-screen items-center justify-center flex">
    <div class="bg-white max-w-3xl pl-3 p-5 rounded-2xl shadow-lg flex">
      <div class="w-1/2 px-16">
        <h2 class="mt-4 font-bold text-4xl text-[#5c1c81]">Login</h2>
        <h3 class="mt-3 font-semibold text-lg text-[#5c1c81]">Flying Boat Ghost Adventure</h3>
        <p class="text-md mt-2 text-[#5c1c81]">If you already a member, easily log in</p>
        <form action="" method="post" class="flex flex-col gap-4">
          <input type="email" class="rounded-md bg-gray-100 p-2 mt-8" placeholder="example@gmail.com" />
          <input type="password" class="rounded-md bg-gray-100 p-2" name="" id="" placeholder="password" />
          <button @click="login" class="bg-[#5c1c81] text-white w-full py-2 rounded-md mt-4">Login</button>
        </form>
        <div class="mt-8 grid grid-cols-3 items-center text-gray-500">
          <hr class="border-gray-300" />
          <p class="text-center text-base">OR</p>
          <hr class="border-gray-300" />
        </div>
        <div class="flex justify-center justify-between mt-6">
          <button class="text-blue-500 text-sm">Lupa password</button>
          <button class="text-sm text-white bg-[#7427a1] px-4 py-2 rounded-md">Register</button>
        </div>
      </div>
      <div class="w-1/2 md:block hidden">
        <img src="../assets/game kapal login.png" class="rounded-xl" alt="" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    login() {
      this.$router.push({ name: 'media' });
    },
  },
};
</script>
