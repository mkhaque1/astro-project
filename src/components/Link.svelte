<script>
     export let href = "";
     export let text = "hhh";
     import FaLongArrowAltRight from 'svelte-icons/fa/FaLongArrowAltRight.svelte'
</script>

<div class="link">
    <a  {href}>{text}</a>
    <span>
        <FaLongArrowAltRight />
    </span>
    
</div>

<style lang="scss">
    .link {
        & a{
        color: #2AA6CD;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        }:hover{
            color: aliceblue;
        }
        display: flex;
        gap: 10px;
        
        & span{
            color: #2AA6CD;
            width: 25px;
            
        }
        
    }
</style>