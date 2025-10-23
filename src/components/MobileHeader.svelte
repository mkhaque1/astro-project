<script>
  let isOpen = false;
  let portfolioOpen = false;

  // Close dropdown when clicking outside
  function handleClickOutside(event) {
    if (portfolioOpen && !event.target.closest(".portfolio-item")) {
      portfolioOpen = false;
    }
  }
</script>

<svelte:window on:click={handleClickOutside} />

<div class="mobile-header">
  <button
    class="hamburger"
    on:click={() => (isOpen = !isOpen)}
    aria-label="Toggle menu"
  >
    <span class:is-open={isOpen}></span>
    <span class:is-open={isOpen}></span>
    <span class:is-open={isOpen}></span>
  </button>

  {#if isOpen}
    <div class="mobile-overlay">
      <nav class="mobile-nav">
        <a href="/" on:click={() => (isOpen = false)}>Home</a>
        <a href="/about" on:click={() => (isOpen = false)}>About</a>
        <a href="/service" on:click={() => (isOpen = false)}>Services</a>

        <!-- Portfolio Dropdown -->
        <div class="portfolio-item">
          <button
            class="portfolio-toggle"
            on:click|stopPropagation={() => (portfolioOpen = !portfolioOpen)}
          >
            Portfolio <span class="arrow" class:rotated={portfolioOpen}>></span>
          </button>

          {#if portfolioOpen}
            <div class="portfolio-dropdown">
              <a
                href="/app"
                on:click={() => {
                  isOpen = false;
                  portfolioOpen = false;
                }}
              >
                Developed Apps
              </a>

              <a
                href="/saas"
                on:click={() => {
                  isOpen = false;
                  portfolioOpen = false;
                }}
              >
                SaaS Developments
              </a>
            </div>
          {/if}
        </div>

        <a href="/contact" on:click={() => (isOpen = false)}>Contact</a>
      </nav>
    </div>
  {/if}
</div>

<style lang="scss">
  .mobile-header {
    position: relative;

    .hamburger {
      display: flex;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;

      span {
        width: 25px;
        height: 3px;
        background: white;
        transition: all 0.3s ease;
        border-radius: 2px;
        transform-origin: center;

        &.is-open:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        &.is-open:nth-child(2) {
          opacity: 0;
        }
        &.is-open:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
      }
    }

    .mobile-overlay {
      position: fixed;
      top: 80px;
      right: 16px;
      width: 200px;
      background: rgba(30, 41, 59, 0.95);
      backdrop-filter: blur(20px);
      border-radius: 16px;
      padding: 1.5rem 1rem;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
      z-index: 999;
      animation: slideIn 0.3s ease forwards;
      border: 1px solid rgba(255, 255, 255, 0.1);

      .mobile-nav {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        a,
        .portfolio-toggle {
          color: #f8fafc;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          transition: all 0.2s ease;
          position: relative;
          text-align: left;

          &::after {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 8px;
            left: 1rem;
            background: linear-gradient(90deg, #ff4d4d, #ff944d);
            transition: width 0.3s ease;
          }

          &:hover {
            background: rgba(255, 255, 255, 0.1);
            &::after {
              width: calc(100% - 2rem);
            }
          }
        }

        .portfolio-item {
          position: relative;

          .portfolio-toggle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            background: none;
            border: none;
            cursor: pointer;

            .arrow {
              font-size: 12px;
              transition: transform 0.3s ease;
              &.rotated {
                transform: rotate(180deg);
              }
            }
          }

          .portfolio-dropdown {
            margin-top: 0.5rem;
            padding-left: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            animation: fadeIn 0.2s ease;

            a {
              font-size: 14px;
              color: #cbd5e1;
              padding: 0.5rem 0.75rem;
              border-radius: 8px;
              font-weight: 400;

              &:hover {
                background: rgba(255, 255, 255, 0.08);
                color: #fff;
              }
            }
          }
        }
      }
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
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

  @media (min-width: 769px) {
    .mobile-header {
      display: none;
    }
  }
</style>
