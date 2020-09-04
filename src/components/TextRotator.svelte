<script>
  import { onMount } from "svelte";
  import { fly, fade, slide } from "svelte/transition";

  export let words;
  let currentWord = 0;

  function typewriter(node, { speed = 50 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) return {};

    const text = node.textContent;
    const duration = text.length * speed;

    return {
      duration,
      tick: (t, u) => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }

  onMount(async () => {
    function nextWord() {
      currentWord = currentWord === words.length - 1 ? 0 : currentWord + 1;
    }
    setInterval(nextWord, 3000);
  });
</script>

<span>
  {#if words}
    {#each words as word, index}
      {#if index === currentWord}
        <span in:typewriter="{{ speed: 70 }}">{word}</span>
      {/if}
    {/each}
  {/if}
</span>
