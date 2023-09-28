<script>

    import ProgressBar from '../components/progress-bar.svelte';
    import monitor from '../images/monitor.png';
    import svelte from '../images/svelte.png';
    import tailwind from '../images/tailwind.png';
    import javascript from '../images/javascript.png';
    import python from '../images/python.png';

    import { fade } from 'svelte/transition';

    let loadingScreenVisible = true;

    setTimeout(() => {
        loadingScreenVisible = false; 
    }, 5250);

    let pageVisible = false
    setTimeout(() => {
        pageVisible = true; 
    }, 5250);

    let scaleMonitor = false;
        setTimeout(() => {
        scaleMonitor = true;
    }, 5000);

</script>


<svelte:head>
    <title>Tri Pham</title>
</svelte:head>

    
<div id="top" class="flex flex-col">
    
    <!-- LOADING SCREEN -->
    {#await loadingScreenVisible then value}
        {#if value}

            <div id="monitorText" class="relative flex justify-center">
        
                <div id="monitor" class="absolute">
                    <div class="mt-10"></div>
                    <img 
                        src={monitor}
                        class="transition-all duration-500 ease-in-out"
                        style="transform: {scaleMonitor ? 'scale(3)' : 'scale(1)'}"
                        alt="monitor" width="10000vw">
                </div>

                <div id="text" class="absolute mt-10 mb-10 flex flex-col items-center space-y-8 scrollable animate-fade-in ">

                    <div class=" mt-72"></div>
            
                    <div class="w-max">
                        <h3 class="text-center animate-typing overflow-hidden whitespace-nowrap 
                        hover:scale-110 transition duration-500
                        border-r-4 border-r-white pr-5 text-3xl text-white font-mono">
                            Tri Pham
                        </h3>
                    </div>

                <ProgressBar />   
                    
                </div>

            </div>

        {/if} 
    {/await}    
    
    {#await pageVisible then value}
        {#if value}

        <nav class="text-white font-mono">

            <div class="z-50 fixed top-7 left-10 text-xl">
                <a 
                    href="#top"
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

        <div>
            <div class="mt-96"></div>
            
            <div class="w-max">
                <h3 class=" p-4 text-center animate-typing overflow-hidden whitespace-nowrap 
                    hover:scale-110 transition duration-500
                    border-r-4 border-r-white pr-5 text-7xl text-white font-mono">
                    Hi, I'm <span style=" color:blueviolet;">Tri</span>.
                </h3>
                <h2 class="p-4 text-white font-mono text-3xl animate-typing overflow-hidden whitespace-nowrap
                hover:scale-110 transition duration-500">
                    Computer Science student
                </h2>
            </div>

            <div class="mt-96"></div>
        </div>

        <div class="mt-96"></div>
        <div class="mt-96"></div>
        <div class="mt-96"></div>


        <div id="AboutMe" class="mb-96 scrollable animate-fade-in">

            <div class="mt-72"></div>
            
            <div class="flex flex-row ">
                <div class="flex flex-col items-center">
                    <p class="p-4 text-center text-white text-6xl font-mono">
                        About me
                    </p>
                    <p class="p-1 max-w-full text-center text-blueViolet text-3xl font-mono">
                        Tri Pham
                    </p>
                    <p class="p-1 max-w-full text-center text-white text-heading2 font-mono">
                        Computer Science undergradudate
                    </p>
                    <p class="p-1 max-w-full text-center text-white text-xl font-mono">
                        I am third year student currently pursuing an <br>
                        integrated  <span style=" color:blueViolet;">Masters</span> at King's College London.
                    </p>
                </div>
                
                <div class="flex flex-wrap items-center">
                    <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                        <img src={svelte} alt="svelte" width="25">
                        Sveltekit
                    </p>
                    <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                        <img src={tailwind} alt="svelte" width="30">
                        Tailwind
                    </p>
                    <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                        <img src={javascript} alt="svelte" width="30">
                        Javascript
                    </p>
                    <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                        <img src={python} alt="svelte" width="30">
                        Python
                    </p>
    
                </div>
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
        {/if}
    {/await}

</div>


<style lang="postcss">

    :global(html) {
      background-color: theme(colors.black);
    }
    .flex-container {
        display: flex;
        flex:1;
    }
    .column {
        flex: 1; /* Each column takes up equal space */
        width: 100%;
        /* border-left: 1px solid #ccc; 
        border-right: 1px solid #ccc;  */
    }
    .row{
        width: 100%;
        border-top: 1px solid #ccc; /* Add left border */
        border-bottom: 1px solid #ccc; /* Add right border */
    }
    .highlight {
        color: var(--neon-green) 
    }
</style>
