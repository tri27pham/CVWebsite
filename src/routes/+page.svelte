<script>

	import ExperienceProgressBar from '../components/experience-progress-bar.svelte';
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
	import tensorflow from '../images/tensorflow.png';
	import spotify from '../images/spotify.png';
	import linkedin from '../images/linkedin.png';
	import github from '../images/github.png';
	import citymapper from '../images/citymapper.png';	
	import fuwafuwa	 from '../images/fuwafuwa.png';
	import resumewebsite from '../images/resumewebsite.png';

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
				<div class="mt-8"></div>
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

			<nav class="text-white font-mono absolute z-10 ">
				<div
					class="z-50 fixed top-7 left-10 text-xl hover:scale-125 transition-transform duration-500 hover:text-purple"
				>
					<a href="#MainPage"> TriPham. </a>
				</div>
				<div class="fixed top-7 right-16 flex flex-row space-x-12">
					<div class="hover:text-purple hover:scale-125 transition-transform duration-500">
						<a href="#AboutMe" class="hover:scale-125 transition-transform duration-500 text-xl">
							// about me
						</a>
					</div>
					<div class="hover:text-purple hover:scale-125 transition-transform duration-500">
						<a href="#Experience" class="hover:scale-125 transition-transform duration-500 text-xl">
							// experience
						</a>
					</div>
					<div class="hover:text-purple hover:scale-125 transition-transform duration-500">
						<a href="#Projects" class="hover:scale-125 transition-transform duration-500 text-xl">
							// projects
						</a>
					</div>
					<div class="flex flex-row space-x-6">
						<div class="hover:scale-125 transition-transform duration-500">
							<a href="https://www.linkedin.com/in/trippham/" target="_blank"> 
								<img src={linkedin} alt="lingitkedin" width="30" />
							</a>						
						</div>
						<div class="hover:scale-125 transition-transform duration-500">
							<a href="https://github.com/tri27pham" target="_blank"> 
								<img src={github} alt="github" width="30" />
							</a>						
						</div>
					</div>					
				</div>
			</nav>

			<div id="MainPage" class="h-screen flex items-center z-0 relative">
				<div style="text-align: left;">
					<h3
						class=" p-4 text-center animate-typing overflow-hidden whitespace-nowrap
                            hover:scale-110 transition duration-500
                            border-r-4 border-r-white pr-5 text-7xl text-white font-mono"
					>
						Hi, I'm <span style=" color:blueviolet;">Tri</span>.
					</h3>
					<h2
						class="p-4 text-white font-mono text-2xl animate-typing overflow-hidden whitespace-nowrap"
					>
						<span style=" color:blueviolet;">MASTERS STUDENT</span> - COMPUTER SCIENCE
					</h2>
					{#if contactBtnVisible}
						<div
							class=" m-4 animate-fade bg-black p-4 border border-purple hover:scale-105 transition duration-500 w-56 h-16 text-center items-center"
						>
							<p class="mt-0 text-xl font-mono text-purple">CONTACT ME</p>
						</div>
					{/if}
				</div>
				<a href="#AboutMe">
					<img
						src={downArrow}
						alt="down-arrow"
						class="animate-bounce"
						style="position: absolute; right: 0%; bottom: 20%;"
						width="50"
					/>
				</a>
			</div>

			<div id="AboutMe" class="h-screen z-0 flex justify-center items-center relative">
				<a href="#MainPage">
					<img
						src={upArrow}
						alt="up-arrow"
						class="animate-bounce"
						style="position: absolute; right: 0%; top: 20%;"
						width="50"
					/>
				</a>

				<div class="flex flex-row columns-2 max-w-full">
					<div class="flex flex-col items-center w-3/5 text-center text-white font-mono">
						<p class="p-4 text-6xl">About me</p>
						<p
							class="max-w-full text-2xl text-purple hover:scale-125 transition-transform duration-500"
						>
							Tri Pham
						</p>
						<p class=" mb-3 max-w-fulfont-mono">London based MSci student</p>

						<p class="p-1 max-w-full text-base">
							I am a third-year student pursuing an integrated Master's degree program at <span class="text-purple">Kings College London</span>, 
							with an expected graduation year of <span class="text-purple">2025</span>. 
							My current academic focus is on specializing in <span class="text-purple">Artificial Intelligence</span>.
							<br><br>							
							In my spare time, I enjoy spending time engaging in projects aimed at honing my skills 
							and exploring new areas. Most recently, I have developed a keen interest in <span class="text-purple">Machine Learning</span>,
							which I am incorporating into my ongoing projects.
							<br><br>
							Outside of my professional commitments, I prioritize my fitness by maintaining a regular gym routine and playing badminton.

						</p>

						<p class="mt-4 text-xl">Education</p>
						<p class="py-1 text-base">
							2019-2021 Peter Symonds College A-levels: <span class="text-purple">4 A*s</span>
						</p>
						<p class="py-1 text-base">
							2021-2025 Kings College London <span class="text-purple">MSci</span>
						</p>
					</div>
					<div class="flex flex-col w-2/5 items-center justify-center">
						<div class="border border-purple w-72 h-96">
							pic of me
						</div>
					</div>
				</div>

				<a href="#Experience">
					<img
						src={downArrow}
						alt="down-arrow"
						class="animate-bounce"
						style="position: absolute; right: 0%; bottom: 20%;"
						width="50"
					/>
				</a>
			</div>

			<div id="Experience" class="h-screen z-0 flex justify-center items-center relative">
				<a href="#AboutMe">
					<img
						src={upArrow}
						alt="up-arrow"
						class="animate-bounce"
						style="position: absolute; right: 0%; top: 20%;"
						width="50"
					/>
				</a>

				<div class="flex flex-col">
					<p class="p-4 text-white text-6xl font-mono text-left">Experience</p>
					<div class="flex flex-row space-x-2">
						<ExperienceProgressBar />

						<div class="flex flex-col">
							<div id="Experienced" class="flex flex-row">
		
								<p class="h-28 w-52 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded font-mono font-semibold text-xl flex flex-col items-center justify-center gap-2 ">
									Experienced: 
								</p>
		
								<p class="h-28 w-28 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 ">
									<img src={python} alt="python" width="40" />
									Python
								</p>
								<p class="h-28 w-28 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 ">
									<img src={java} alt="java" width="40" />
									Java
								</p>
								<p
									class="h-28 w-28 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 "
								>
									<img src={flutter} alt="flutter" width="45" />
									Flutter
								</p>
								<p
									class="h-28 w-28 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 "
								>
									<img src={dart} alt="dart" width="40" />
									Dart
								</p>
							</div>
		
							<div id="Intermediate" class="flex flex-row">
		
								<p class="h-28 w-52 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded font-mono font-semibold text-xl flex flex-col items-center justify-center gap-2 ">
									Intermediate: 
								</p>
		
								<p
									class="h-28 w-28 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 "
								>
									<img src={svelte} alt="svelte" width="25" />
									Sveltekit
								</p>
								<p
									class="h-28 w-28 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 "
								>
									<img src={tailwind} alt="tailwind" width="30" />
									Tailwind
								</p>
								<p
									class="h-28 w-28 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 "
								>
									<img src={html} alt="hmtl" width="30" />
									HTML
								</p>
								
								<p
									class="h-28 w-28 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 "
								>
									<img src={firebase} alt="firebase" width="25" />
									Firebase
								</p>
								<p
									class="h-28 w-28 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 "
								>
									<img src={noSql} alt="nosql" width="30" />
									NoSQL
								</p>
								<p
									class="h-28 w-28 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 "
								>
									<img src={scala} alt="scala" width="20" />
									Scala
								</p>
								<p
									class="h-28 w-28 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 "
								>
									<img src={swift} alt="swift" width="30" />
									Swift
								</p>
								
							</div>
							
							<div id="Familiar" class="flex flex-row">
		
								<p class="h-28 w-52 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded font-mono font-semibold text-xl flex flex-col items-center justify-center gap-2 ">
									Familiar: 
								</p>
								<p
									class="h-28 w-28 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 "
								>
									<img src={javascript} alt="javascript" width="30" />
									Javascript
								</p>
								
								<p
									class="h-28 w-28 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 "
								>
									<img src={cplusplus} alt="c++" width="30" />
									C++
								</p>
								<p
									class="h-28 w-28 bg-charcoal px-4 py-2 mr-2 mt-2 text-gray-400 rounded text-base font-mono font-semibold flex flex-col items-center justify-center gap-2 "
								>
									<img src={sql} alt="sql" width="30" />
									SQL
								</p>
															
							</div>
						</div>
					</div>
				</div>
				

				

				<a href="#Projects">
					<img
						src={downArrow}
						alt="down-arrow"
						class="animate-bounce"
						style="position: absolute; right: 0%; bottom: 20%;"
						width="50"
					/>
				</a>
			</div>


			<div id="Projects" class="h-screen z-0 flex justify-center items-center relative">

				<a href="#Experience">
					<img
						src={upArrow}
						alt="up-arrow"
						class="animate-bounce"
						style="position: absolute; right: 0%; top: 20%;"
						width="50"
					/>
				</a>
                    
                <div class="flex flex-col max-w-full"> 

                    <p class="p-4 text-white text-6xl font-mono text-left">Projects</p>

					<div class="flex py-10 w-300 space-x-6 overflow-x-auto no-scrollbar">
						
						<div class=" flex-shrink-0 bg-darkGrey rounded-3xl h-96 w-72 flex flex-col hover:bg-purple hover:scale-110 transition duration-500 relativ hover:shadow-purple">
							<p class="pt-4 pl-4 pb-1 font-sans text-white text-3xl text-left justify-center w-max">
								Fuwa Fuwa								 
							</p>
							<div class="flex px-3 py-1 space-x-2">
								<img src={flutter} alt="flutter" width="20"/>
								<img src={dart} alt="dart" width="15" />								
							</div>							
							<p class=" px-4 font-sans text-gray-400 text-sm text-left justify-center">
								Application for a small business to organise internal operations
							</p>
							<div class="py-4 flex max-w-full max-h-full items-center justify-center">
								<img src={fuwafuwa} alt="fuwafuwa" width="220"/>
							</div>
						</div>
				
						<div class="flex-shrink-0 bg-darkGrey rounded-3xl h-96 w-72 flex flex-col hover:bg-purple hover:scale-110 transition duration-500 relative">
							<p class="pt-4 pl-4 pb-1 font-sans text-white text-3xl text-left justify-center w-max">
								LyricSync								 
							</p>
							<div class="flex px-3 py-1 space-x-2">
								<img src={flutter} alt="flutter" width="20"/>
								<img src={dart} alt="dart" width="15" />
								<img src={python} alt="python" width="15" />
								<img src={tensorflow} alt="tensorflow" width="15" />
								<img src={spotify} alt="spotify" width="15" />
							</div>					
							<p class=" px-4 font-sans text-gray-400 text-sm text-left justify-center">
								App using NLP to analyse lyrics, extracting genres & recommending similar songs
							</p>
						</div>		
												
						<div class="flex-shrink-0 bg-darkGrey rounded-3xl h-96 w-72 flex flex-col hover:bg-purple hover:scale-110 transition duration-500 relative">
							<p class="pt-4 pl-4 pb-1 font-sans text-white text-3xl text-left justify-center w-max">
								Resume Website								 
							</p>
							<div class="flex px-4 py-1 space-x-2">
								<img src={svelte} alt="svelte" width="15"/>
								<img src={html} alt="html" width="15"/>
								<img src={tailwind} alt="tailwind" width="15"/>
							</div>					
							<p class=" px-4 font-sans text-gray-400 text-sm text-left justify-center">
								Website developed to display personal and professional qualities	
							</p>
							<div class="py-6 flex max-w-full max-h-full items-center justify-center">
								<img src={resumewebsite} alt="resumewebsite" width="200" class="rounded-xl"/>
							</div>							
						</div>
								
						<div class="flex-shrink-0 bg-darkGrey rounded-3xl h-96 w-72 flex flex-col hover:bg-purple hover:scale-110 transition duration-500 relative">
							<p class="pt-4 pl-4 pb-1 font-sans text-white text-3xl text-left justify-center w-max">
								OptiPlan								 
							</p>	
							<div class="flex px-3 py-1 space-x-2">
								<img src={flutter} alt="flutter" width="20"/>
								<img src={dart} alt="dart" width="15" />
								<img src={firebase} alt="firebase" width="10"/>
								<img src={citymapper} alt="citymapper" width="15" />
							</div>					
							<p class=" px-4 font-sans text-gray-400 text-sm text-left justify-center">
								Mobile app aimed at streamlining the user's daily tasks and journeys.	
							</p>
						</div>	
				
					</div>
					

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
	.no-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>