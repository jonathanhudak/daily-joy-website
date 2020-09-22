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
  button:focus {
    outline: none;
  }

  button:focus .Expando-Icon {
    color: var(--orange);
    background: white;
  }

  .title {
    color: var(--orange);
  }

  .Expando-Icon {
    color: var(--tan);
    transform: rotate(0deg);
    transition: transform 100ms ease-out;
    display: block;
    position: relative;
  }

  .openIcon {
    transform: rotate(-45deg);
  }
</style>

<script>
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let closed = true;
  export let title;

  function handleToggleClick() {
    closed = !closed;
  }
</script>

<button on:click="{handleToggleClick}" class="title h2 button">
  <span>{title}</span>
  <span class="Expando-Icon" class:openIcon="{!closed}">+</span>
</button>

<div class:closed>
  <slot />
</div>
