<script lang="ts">
    import "../scss/components/Tags.scss";
  import { string } from 'astro/zod';

    let service = [ "web design", "web development", "App deevelopment" , "UI / UX", "Backend Development"]
   
    
</script>


<div class="marquee">
    {#each service as service }
        <h2>{service}</h2>
    {/each}
</div>

