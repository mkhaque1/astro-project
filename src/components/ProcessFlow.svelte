<script lang="ts">
  export let steps = [
    {
      title: "Discovery",
      description:
        "We start by understanding your business goals, challenges, and requirements.",
      icon: "mdi:lightbulb-on-outline",
    },
    {
      title: "Planning",
      description:
        "We craft a tailored strategy and roadmap for your project’s success.",
      icon: "mdi:clipboard-list-outline",
    },
    {
      title: "Design",
      description:
        "Our designers create modern, user-centric interfaces and experiences.",
      icon: "mdi:palette-outline",
    },
    {
      title: "Development",
      description:
        "Our engineers build robust, scalable solutions using the latest technologies.",
      icon: "mdi:code-tags",
    },
    {
      title: "Testing",
      description:
        "We rigorously test to ensure quality, performance, and security.",
      icon: "mdi:check-decagram",
    },
    {
      title: "Launch & Support",
      description:
        "We deploy your solution and provide ongoing support and optimization.",
      icon: "mdi:rocket-launch-outline",
    },
  ];
  import Icon from "@iconify/svelte";
</script>

<section class="process-steps">
  <h2 class="process-title">Our Process</h2>
  <div class="steps-list">
    {#each steps as step, i}
      <div class="step-card">
        <div class="step-icon">
          <Icon icon={step.icon} width="32" height="32" />
        </div>
        <div class="step-content">
          <div class="step-number">{i + 1}</div>
          <div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
  @import "../layouts/layout.scss";
  .process-steps {
    margin: 3rem 0 2rem 0;
    padding: 2rem 1rem;
    .process-title {
      text-align: center;
      font-size: 4rem;
      font-weight: 700;
      margin-bottom: 2rem;
      background: linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6, #22d3ee);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .steps-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
    }
    .step-card {
      background: rgba(255, 255, 255, 0.07);
      border-radius: 1rem;
      padding: 1.5rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      backdrop-filter: blur(10px);
      gap: 1rem;
      box-shadow: 0 2px 12px rgba(80, 80, 120, 0.08);
      border: 1.5px solid transparent;
      position: relative;
      transition:
        transform 0.2s,
        box-shadow 0.2s;
      &:hover {
        transform: translateY(-4px) scale(1.03);
        box-shadow: 0 8px 32px rgba(80, 80, 120, 0.16);
        border-width: 1.5px;
        border-radius: 1rem;
        border-style: solid;
        @include gradient-border;
      }
      .step-icon {
        background: linear-gradient(135deg, #0c0f13, #a78bfa, #f472b6, #22d3ee);
        border-radius: 50%;
        padding: 0.7rem;
        display: flex;
        box-shadow: 0 2px 8px rgba(80, 80, 120, 0.12);
        margin-right: 0.5rem;
      }
      .step-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        .step-number {
          font-size: 3.2rem;
          font-weight: 700;
          color: #60a5fa;
          margin-right: 0.7rem;
          min-width: 2rem;
        }
        h3 {
          margin: 0 0 0.3rem 0;
          font-size: 1.1rem;
          font-weight: 600;
        }
        p {
          margin: 0;
          color: #e0e7ef;
          font-size: 0.98rem;
          opacity: 0.92;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .process-steps {
      padding: 1rem 0.2rem;
      .steps-list {
        grid-template-columns: 1fr;
      }
      .step-card {
        flex-direction: row;
        align-items: center;
        .step-content {
          flex-direction: row;
          align-items: center;
        }
      }
    }
  }
</style>
