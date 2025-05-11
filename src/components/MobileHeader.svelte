<script>
    let isOpen = false;
  </script>
  
  <div class="mobile-header">
    <button class="hamburger" on:click={() => isOpen = !isOpen} aria-label="Toggle menu">
      <span class:is-open={isOpen}></span>
      <span class:is-open={isOpen}></span>
      <span class:is-open={isOpen}></span>
    </button>
  
    {#if isOpen}
      <div class="mobile-overlay">
        <nav class="mobile-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/service">Services</a>
          <a href="/">Portfolio</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    {/if}
  </div>
  
  <style lang="scss">
  .mobile-header {
    .hamburger {
      display: flex;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
  
      span {
        width: 25px;
        height: 3px;
        background: white;
        transition: all 0.3s ease;
        border-radius: 2px;
      }
  
      .is-open:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      .is-open:nth-child(2) {
        opacity: 0;
      }
      .is-open:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }
  
    .mobile-overlay {
      position: absolute;
      padding: 2rem;
      top: 110%;
      left: 40%;
      width: 200px;
      border-radius: 15px;
      background: white;
      backdrop-filter: blur(20px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999;
      animation: fadeIn 0.3s ease forwards;
  
      .mobile-nav {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        text-align: center;
  
        a {
          color: black;
          font-size: 1.5rem;
          text-decoration: none;
          position: relative;
  
          &::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -5px;
            left: 0;
            background: linear-gradient(90deg, #ff4d4d, #ff944d);
            transition: width 0.3s ease;
          }
  
          &:hover::after {
            width: 100%;
          }
        }
      }
    }
  
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
  </style>
  