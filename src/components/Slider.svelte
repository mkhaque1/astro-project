<!-- Slider.svelte -->
<script>
  import { onMount } from 'svelte';
  let sliderContainer;
  let currentIndex = 0;

  onMount(() => {
      // Update scroll position based on current index when the component mounts
      updateScroll();

      // Ensure the slider updates on resize
      window.addEventListener('resize', updateScroll);
      
      // Cleanup event listener on component destroy
      return () => {
          window.removeEventListener('resize', updateScroll);
      };
  });

  // Method to scroll the slider left
  function prev() {
      if (currentIndex > 0) {
          currentIndex -= 1;
          updateScroll();
      }
  }

  // Method to scroll the slider right
  function next() {
      if (currentIndex < sliderContainer.children.length - (isMobile() ? 1 : 2)) {
          currentIndex += 1;
          updateScroll();
      }
  }

  // Update scroll position based on current index
  function updateScroll() {
      if (sliderContainer) {
          const cardWidth = sliderContainer.offsetWidth / (isMobile() ? 1 : 2);
          sliderContainer.scrollLeft = currentIndex * cardWidth;
      }
  }

  // Check if the viewport is mobile
  function isMobile() {
      return window.innerWidth <= 768;
  }
</script>

<div class="slider">
  <button class="prev" on:click={prev}>◀</button>
  <div class="slider-container" bind:this={sliderContainer}>
      <slot></slot>
  </div>
  <button class="next" on:click={next}>▶</button>
</div>

<style>
  .slider {
      position: relative;
      display: flex;
      align-items: center;
      overflow: hidden;
  }

  .slider-container {
      display: flex;
      width: 100%;
      scroll-behavior: smooth;
  }

  .slider-container::slotted(*) {
      min-width: 50%; /* Desktop: 2 cards */
  }

  button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 2rem;
      color: #333;
      z-index: 1;
  }

  .prev {
      position: absolute;
      left: 10px;
  }

  .next {
      position: absolute;
      right: 10px;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
      .slider-container::slotted(*) {
          min-width: 100%; /* Mobile: 1 card */
      }
  }
</style>
