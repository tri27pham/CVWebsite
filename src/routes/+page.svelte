<script>

import { onMount } from 'svelte';

    onMount(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        const element = entry.target;
            if (entry.isIntersecting) {
                if (!element.classList.contains('animate-fade-in')) {
                element.classList.add('animate-fade-in');
                }
                element.classList.remove('animate-fade-out');
            } 
            else {
                if (!element.classList.contains('animate-fade-out')) {
                element.classList.add('animate-fade-out');
                }
                element.classList.remove('animate-fade-in');
            }
        });
    },
    { threshold: 0.5 });

    observer.observe(document.querySelector('.scrollable'));
    });

    // import * as animateScroll from "svelte-scrollto";

</script>


<svelte:head>
    <title>Tri Pham</title>
</svelte:head>

<nav class="text-white bg-green">
    <div class="z-50 fixed top-7 left-10 text-xl">
        <a 
            
            class="hover:scale-125 transition duration-500">
            Tri Pham
        </a>
    </div>
    <div class="fixed top-7 right-10 flex flex-row space-x-10">
        <a 
            href="#AboutMe"
            class="hover:scale-125 transition duration-500 text-xl">
                About me
        </a>
        <a 
            href="#Academics"
            class="hover:scale-125 transition duration-500 text-xl">
            Academics
        </a>
        <a 
            href="#Projects"
            class="hover:scale-125 transition duration-500 text-xl">
            Projects
        </a>
    </div>
</nav>

<!-- <h1 class="fixed top-0 left-0">{scroll}</h1> -->

<!-- <div class="fade" transition:fade={{ duration: 500 }}> -->

<div class="flex flex-col mt-96 mb-96">

    <div class="mb-10 flex flex-col space-y-2 scrollable animate-fade-in">
        <h3 class="text-center text-8xl text-white font-mono
        hover:scale-110 transition duration-500 ">
            Tri Pham
        </h3>
        <h2 class="text-center text-2xl text-white hover:scale-105 transition duration-500">
            MSci Computer Science student
        </h2>
    </div>


    <div id="AboutMe" class="mb-96 scrollable animate-fade-in">

        <div class="mt-96"></div>
        
        <div class="flex flex-col hover:scale-105">
            <p class="p-4 text-center text-white text-3xl font-mono">
                About me
            </p>
            <p class="p-2 text-base text-white font-mono">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
        </div>
    </div>

    <div id="Academics" class=" mb-96">
        <div class="mt-96"></div>
        <div class="flex flex-col hover:scale-105 scrollable animate-fade-in">
            <p class="p-4 text-center text-white text-3xl font-mono">
                Academics
            </p>
            <p class="p-2 text-base text-white font-mono">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
        </div>
    </div>

    <div id="Projects" class="mb-96">
        <div class="mt-96"></div>
        <div>
            <p class="p-4 text-center text-white text-3xl font-mono">
                Projects
            </p>
            <p class="p-2 text-base text-white font-mono">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
        </div>
    </div>




</div>

    
    
<!-- </div> -->

<style lang="postcss">

    :global(html) {
      background-color: theme(colors.black);
    }

</style>