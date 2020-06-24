<script>
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let closed = true;
  export let title;

  function handleToggleClick() {
    closed = !closed;
  }
</script>

<style>
  .closed {
    height: 0;
    overflow: hidden;
  }

  button {
    appearance: none;
    background: none;
    border: none;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
  }
</style>

<button on:click={handleToggleClick} class="h1 caps">
  <span>{title}</span>
  <span class="Expando-Icon">+</span>
</button>

<div class:closed>
  <slot />
</div>
