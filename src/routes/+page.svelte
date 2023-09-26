<svelte:head>
    <title>Tri Pham</title>
</svelte:head>

<script>
	import ScrollBar from "../components/scroll-bar.svelte";

    let scroll;

</script>

<!-- <ScrollBar /> -->

<svelte:window bind:scrollY={scroll}/>


<nav class="text-white">
    <div class="fixed top-7 left-10 text-xl">
        <button class="hover:scale-125 transition duration-500">Tri Pham</button>
    </div>
    <div  class="fixed top-7 right-10 flex flex-row space-x-10">
        <button class="hover:scale-125 transition duration-500 text-xl">About me</button>
        <button class="hover:scale-125 transition duration-500 text-xl">Academics</button>
        <button class="hover:scale-125 transition duration-500 text-xl">Projects</button>
    </div>
</nav>

<!-- <h1 class="fixed top-0 left-0">{scroll}</h1> -->

<div class="py-10 flex flex-col space-y-2">
    <h3 class="text-center text-8xl text-white font-mono
    hover:scale-110 transition duration-500">
        Tri Pham
    </h3>
    <h2 class="text-center text-2xl text-white hover:scale-105 transition duration-500">
        MSci Computer Science student
    </h2>
</div>


<div class="flex flex-col hover:scale-105">
    <p class="p-4 text-center text-white text-3xl font-mono">
        About me
    </p>
    <p class="p-2 text-base text-white font-mono">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p>
</div>

<div class="flex flex-col hover:scale-105">
    <p class="p-4 text-center text-white text-3xl font-mono">
        Academics
    </p>
    <p class="p-2 text-base text-white font-mono">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p>
</div>

<p class="p-4 text-center text-white text-3xl font-mono">
    Projects
</p>
<p class="p-2 text-base text-white font-mono">
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>
<p class="p-4 text-center text-white text-3xl font-mono">
    About me
</p>
<p class="p-2 text-base text-white font-mono">
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>
<p class="p-4 text-center text-white text-3xl font-mono">
    Academics
</p>
<p class="p-2 text-base text-white font-mono">
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>
<p class="p-4 text-center text-white text-3xl font-mono">
    Projects
</p>
<p class="p-2 text-base text-white font-mono">
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.black);
    }
  </style>