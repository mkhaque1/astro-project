
<script lang="ts">
    import "/public/Vector (4).svg";
    import FaLongArrowAltRight from 'svelte-icons/fa/FaLongArrowAltRight.svelte';
    export let title;
    export let href= "";
</script>

<a href={href} class="button" >{title}<span class="icon"><FaLongArrowAltRight/></span>
</a>

<style>
    .icon{
    width: 18px;
    display: flex;
    rotate: -40deg;
    }
</style>