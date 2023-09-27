<script lang = "ts">
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";

    import { onMount } from "svelte";

    const progress = tweened(0, {
        duration: 3000,
        easing: cubicOut,
    })

    onMount(() => {
        setTimeout(() => {
        // Animate the progress from 0 to 100
        progress.set(100);
        }, 2200); 
    })

</script>

<div class="outer">
    <div class="inner" style="width: {$progress}%" >
        
    </div>
</div>

<style>
    .inner, .outer{
        height:30px;
        border-radius: 15px;
    }
    .outer{
        width: 25vw;
        margin: 10px auto;
        background-color: transparent;
        border: 1px solid white;
    }
    .inner{
        background-color: white;
    }

</style>