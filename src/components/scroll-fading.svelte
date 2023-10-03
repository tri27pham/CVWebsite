<!--

src/routes/FadeInElement.svelte
<script>
    import { onMount } from 'svelte';
  
    let isVisible = false;
  
    onMount(() => {
      const handleScroll = () => {
        const element = document.getElementById('fade-in-element');
        if (element && window.scrollY + window.innerHeight > element.offsetTop) {
          isVisible = true;
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Call the initial check in case the element is already visible on load
      handleScroll();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  </script>
  
  <div
    id="fade-in-element"
    class="opacity-100 transform translate-y-10 transition-transform duration-500"
    class:opacity-100={isVisible}
    class:translate-y-0={isVisible}
  >
     Your content goes here 
  </div>
-->
  
  <!-- FadingElement.svelte -->
<script>
  let isVisible = true;

  // Function to toggle the visibility of the element
  function toggleVisibility() {
    isVisible = !isVisible;
  }
</script>

<style>
  /* Use Tailwind CSS classes for styling */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

<div
  class="fade"
  class:opacity-0={!isVisible}
  class:opacity-100={isVisible}
  in:fade={isVisible}
  out:fade={!isVisible}
>
  <!-- Your content goes here -->
  <p>This element will fade as it goes off the screen.</p>
</div>

<button on:click={toggleVisibility}>Toggle Visibility</button>