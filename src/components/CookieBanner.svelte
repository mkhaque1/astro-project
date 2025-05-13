<script lang="ts">
  import { onMount } from "svelte";
  import "../layouts/layout.scss";

  let showBanner = false;
  let showModal = false;
  let marketing = false;
  let preferences = false;

  function loadPreferences() {
    try {
      const saved = localStorage.getItem("cookie-preferences");
      if (saved) {
        const parsed = JSON.parse(saved);
        marketing = parsed.marketing ?? false;
        preferences = parsed.preferences ?? false;
        showBanner = false;
        return true;
      } else {
        showBanner = true;
      }
    } catch (e) {
      console.error("Error loading preferences:", e);
      showBanner = true;
    }
    return false;
  }

  onMount(() => {
    loadPreferences();
    document.addEventListener("visibilitychange", loadPreferences);
    return () => {
      document.removeEventListener("visibilitychange", loadPreferences);
    };
  });

  function acceptAll() {
    marketing = true;
    preferences = true;
    savePreferences();
  }

  function saveSelection() {
    savePreferences();
  }

  function savePreferences() {
    const prefs = { marketing, preferences };
    localStorage.setItem("cookie-preferences", JSON.stringify(prefs));
    showBanner = false;
    showModal = false;
    document.dispatchEvent(
      new CustomEvent("cookiePreferencesChanged", {
        detail: prefs,
      }),
    );
  }

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

{#if showBanner}
  <div class="cookie-banner">
    <div class="cookie-banner__content">
      <p>
        We use cookies to enhance your experience. By continuing to visit this
        site, you agree to our use of cookies.
      </p>
      <div class="cookie-banner__buttons">
        <button class="cookie-banner__accept" on:click={acceptAll}
          >Accept All</button
        >
        <button class="cookie-banner__settings" on:click={openModal}
          >Settings</button
        >
      </div>
    </div>
  </div>
{/if}

{#if showModal}
  <div class="modal">
    <div class="modal__content">
      <h2>Cookie Settings</h2>
      <div class="modal__options">
        <div class="modal__option">
          <strong>Strictly Necessary</strong>
          <span class="modal__switch modal__switch--disabled">ON 🔒</span>
        </div>
        <div class="modal__option">
          <label>
            <div class="modal-text">
              <strong>Marketing & Analytics</strong>
              <p>
                Allow us to collect data to improve user experience and show
                relevant ads and analytics insights.
              </p>
            </div>
            <input type="checkbox" bind:checked={marketing} />
          </label>
        </div>
        <div class="modal__option">
          <label>
            <div class="modal-text">
              <strong>Preferences</strong>
              <p>
                Enable features like language selection, video playback
                settings, and user interface customization.
              </p>
            </div>
            <input type="checkbox" bind:checked={preferences} />
          </label>
        </div>
      </div>
      <div class="modal__actions">
        <button class="cookie-banner__accept" on:click={saveSelection}
          >Save Selection</button
        >
        <button class="cookie-banner__settings" on:click={acceptAll}
          >Accept All</button
        >
        <button class="modal__close" on:click={closeModal}>Close</button>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  @import "../layouts/layout.scss";
  .cookie-banner {
    position: fixed;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 550px;
    border-radius: 15px;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: rgba(40, 40, 60, 0.7);
    color: #fff;
    backdrop-filter: blur(24px);
    border-radius: 1.2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    padding: 1.5rem 2rem;
    z-index: 9999;
    animation: fadeInUp 0.5s cubic-bezier(0.4, 2, 0.6, 1) both;
    @media screen and (max-width: 768px) {
      width: 80%;
    }
    .cookie-banner__buttons {
      display: flex;
      justify-content: end;
      gap: 10px;
    }
  }

  button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    &.cookie-banner__accept {
      background-color: var(--accent-green);
      color: white;
    }
    &.cookie-banner__settings {
      background-color: var(--accent-blue);
      color: #fff;
    }
  }

  .modal {
    position: fixed;
    inset: 0;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(20, 20, 30, 0.45);
    backdrop-filter: blur(8px);
    z-index: 10000;
    animation: fadeIn 0.3s;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .modal__content {
    position: relative;
    background: rgba(40, 40, 60, 0.92);
    border-radius: 1.2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    padding: 2rem 2.5rem;
    min-width: 320px;
    max-width: 95vw;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    animation: springIn 0.7s cubic-bezier(0.22, 1.61, 0.36, 1) both;
    @include gradient-border();
  }
  @keyframes springIn {
    0% {
      opacity: 0;
      transform: translateY(60px) scale(0.95);
    }
    60% {
      opacity: 1;
      transform: translateY(-10px) scale(1.03);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  .modal__options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .modal__option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 0.7rem;
    padding: 0.7rem 1rem;
    gap: 1rem;
    font-size: 0.97rem;
    label {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      font-size: 0.9rem;
      align-items: center;
      justify-content: space-between;

      .modal-text {
        width: 50%;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }
  .modal__switch {
    font-weight: bold;
    color: #ff944d;
    &--disabled {
      color: #aaa;
      opacity: 0.7;
    }
  }
  .modal__actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }
  .modal__close {
    background: transparent;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
</style>
