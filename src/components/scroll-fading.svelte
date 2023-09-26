<!-- src/routes/FadeInElement.svelte -->
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
    class="opacity-0 transform translate-y-5 transition-transform duration-500"
    class:opacity-100={isVisible}
    class:translate-y-0={isVisible}
  >
    <!-- Your content goes here -->
  </div>
  