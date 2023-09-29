<script>

    import ProgressBar from '../components/progress-bar.svelte';
    import monitor from '../images/monitor.png';
    import svelte from '../images/svelte.png';
    import tailwind from '../images/tailwind.png';
    import javascript from '../images/javascript.png';
    import html from '../images/html.png';
    import python from '../images/python.png';
    import firebase from '../images/firebase.png';
    import noSql from '../images/noSql.png';
    import sql from '../images/sql.png';
    import flutter from '../images/flutter.png';
    import dart from '../images/dart.png';
    import swift from '../images/swift.png';
    import cplusplus from '../images/c++.png';
    import scala from '../images/scala.png';
    import java from '../images/java.png';

    import ps from '../images/petersymonds.png';


    import downArrow from '../images/downArrow.png';
    import upArrow from '../images/upArrow.png';
    


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

    let contactBtnVisible = false;
        setTimeout(() => {
        contactBtnVisible = true;
    }, 7800);

</script>


<svelte:head>
    <title>Tri Pham</title>
</svelte:head>

    
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
    

    <!-- MAIN PAGE -->
    {#await pageVisible then value}
        {#if value}

            <div id="top" class="h-screen relative">

                <nav class="text-white font-mono absolute z-10">

                    <div class="z-50 fixed top-7 left-10 text-xl hover:scale-125 transition-transform duration-500  hover:text-purple">
                        <a 
                            href="#MainPage">
                            Tri Pham
                        </a>
                    </div>
                    <div class="fixed top-7  right-16 flex flex-row space-x-16">
                        <div class="hover:text-purple hover:scale-125 transition-transform duration-500 ">
                            <a 
                                href="#AboutMe"
                                class= "hover:scale-125 transition-transform duration-500 text-xl">
                                About me
                            </a>
                        </div>
                        <div class="hover:text-purple hover:scale-125 transition-transform duration-500 ">
                            <a 
                                href="#Projects"
                                class= "hover:scale-125 transition-transform duration-500 text-xl">
                                Projects
                            </a>
                        </div>
                        <div class="hover:text-purple hover:scale-125 transition-transform duration-500 ">
                            <a 
                                href="#MainPage"
                                class=" hover:scale-125 transition-transform duration-500 text-xl">
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>

                <div id="MainPage"class="h-screen flex items-center z-0 relative">
                    <div style="text-align: left;">
                        <h3 class=" p-4 text-center animate-typing overflow-hidden whitespace-nowrap 
                            hover:scale-110 transition duration-500
                            border-r-4 border-r-white pr-5 text-7xl text-white font-mono">
                            Hi, I'm <span style=" color:blueviolet;">Tri</span>.
                        </h3>
                        <h2 class="p-4 text-white font-mono text-2xl animate-typing overflow-hidden whitespace-nowrap">
                            <span style=" color:blueviolet;">Masters student</span> - Computer Science 
                        </h2>
                        {#if contactBtnVisible}
                            <div class=" m-4 animate-fade bg-black p-4 border border-purple hover:scale-105 transition duration-500 w-56 h-16 text-center items-center">
                                <p class="mt-0 text-xl font-mono text-purple">CONTACT ME</p>
                            </div>
                        {/if}
                    </div>
                    <a href="#AboutMe">
                        <img src={downArrow} alt="down-arrow" class="animate-bounce" style="position: absolute; right: 0%; bottom: 20%;" width="50">
                    </a>
                </div>

                <div id="AboutMe"class="h-screen z-0 flex justify-center items-center relative">
                    <a href="#MainPage">
                        <img src={upArrow} alt="up-arrow" class="animate-bounce" style="position: absolute; right: 0%; top: 20%;" width="50">
                    </a>

                    <div class="flex flex-row space-x-8 columns-2">
                        <div class="flex flex-col items-center w-1/2 text-center text-white font-mono">
                            <p class="p-4 text-6xl">
                                About me
                            </p>
                            <p class="max-w-full text-2xl text-purple hover:scale-125 transition-transform duration-500">
                                Tri Pham
                            </p>
                            <p class=" mb-3 max-w-fulfont-mono">
                                London based MSci student
                            </p>

                            <p class="p-1 max-w-full text-base">
                                I am <span class="text-purple">third year student</span> currently pursuing an 
                                integrated Masters at King's College London, my year
                                of graduation will be <span class="text-purple">2025</span>. 
                                Presently, I am aiming to specialise in <span class="text-purple">Artifical Intelligence</span>.
                            </p>

                            <p class="mt-4 text-xl">
                                Education
                            </p>
                            <p class="py-1 text-base">
                                2014-2019 GCSEs<br>
                                Thornden School: <span class="text-purple">10 A*s</span>
                            </p>
                            <p class="py-1 text-base">
                                2019-2021 A-levels <br>
                                Peter Symonds College: <span class="text-purple">4 A*s</span>
                            </p>
                            <p class="py-1 text-base">
                                2021-2025 <span class="text-purple">MSci</span><br>
                                Kings College London
                            </p>

                        </div>

                        <div class="flex flex-wrap w-1/2 items-center">
                            <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                                <img src={svelte} alt="svelte" width="25">
                                Sveltekit
                            </p>
                            <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                                <img src={tailwind} alt="tailwind" width="30">
                                Tailwind
                            </p>
                            <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                                <img src={javascript} alt="javascript" width="30">
                                Javascript
                            </p>
                            <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                                <img src={html} alt="hmtl" width="30">
                                HTML
                            </p>
                            <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                                <img src={python} alt="python" width="30">
                                Python
                            </p>
                            <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                                <img src={firebase} alt="firebase" width="25">
                                Firebase
                            </p>
                            <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                                <img src={noSql} alt="nosql" width="30">
                                NoSQL
                            </p>
                            <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                                <img src={sql} alt="sql" width="30">
                                SQL
                                
                            </p>
                            <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                                <img src={swift} alt="swift" width="30">
                                Swift
                            </p>
                            <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                                <img src={flutter} alt="flutter" width="30">
                                Flutter
                            </p>
                            <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                                <img src={dart} alt="dart" width="30">
                                Dart
                            </p>
                            <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                                <img src={cplusplus} alt="c++" width="30">
                                C++
                            </p>
                            <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                                <img src={scala} alt="scala" width="20">
                                Scala
                            </p>
                            <p class="h-20 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 hover:scale-110 duration-150">
                                <img src={java} alt="java" width="30">
                                Java
                            </p>
                            
            
            
                        </div>
                    </div>

                    <a href="#Projects">
                        <img src={downArrow} alt="down-arrow" class="animate-bounce" style="position: absolute; right: 0%; bottom: 20%;" width="50">
                    </a>

                </div>
            
                <div id="Projects"class="h-screen z-0 flex justify-center items-center relative">
                    <a href="#AboutMe">
                        <img src={upArrow} alt="up-arrow" class="animate-bounce" style="position: absolute; right: 0%; top: 20%;" width="50">
                    </a>
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

        {/if}
    {/await}




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
</style>