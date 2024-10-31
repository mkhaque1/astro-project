<script lang="ts">
    import "../scss/components/Tags.scss";

    let service = [ "web design", "web development", "App deevelopment" , "UI / UX", "Backend Development"];
</script>


<div class="marquee">
    {#each service as service }
        <button class="common-bg item">
            <div class="dotted-text blue">{service}</div>
        </button>
    {/each}
</div>

<style>
    .common-bg {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      width: fit-content;
      padding: 0 20px;
      height: 48px;
      cursor: pointer;
      background: rgba(99, 106, 182, 0.21);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 9999px;
      font-family: "Plus Jakarta Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      leading-trim: both;
      text-edge: cap;
      color: #faf9ff;
    }
</style>
