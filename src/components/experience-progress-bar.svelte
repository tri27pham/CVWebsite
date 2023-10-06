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
</div>

<style>
    .outer{
        height: 16.5vw;
        width: 21px;
        margin: 10px auto;
        background-color: blueviolet;
        border: 2px solid blueviolet;
        border-radius: 15px;
    }
    .inner{
        height: 17px;
        background-color: white;
        border-radius: 15px;
    }

</style>