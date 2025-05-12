<script lang="ts">
  import "/public/Vector (4).svg";
  import FaLongArrowAltRight from "svelte-icons/fa/FaLongArrowAltRight.svelte";
  export let title;
  export let href = "";
  export let className = ""; // Allow passing custom class
</script>

<a {href} class="button {className}">
  {title}
  <span class="icon"><FaLongArrowAltRight /></span>
</a>

<style>
  .icon {
    width: 18px;
    display: flex;
    rotate: -40deg;
    margin-left: 8px;
  }
</style>
