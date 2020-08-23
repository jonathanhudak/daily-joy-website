<script>
  import { fly, fade, slide } from "svelte/transition";
  const words = ["inflammation.", "discomfort.", "fog."];
  let currentWord = 0;
  function nextWord() {
    currentWord = currentWord === words.length - 1 ? 0 : currentWord + 1;
  }
  setInterval(nextWord, 3000);

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
</script>

<span>

  {#each words as word, index}
    {#if index === currentWord}
      <span in:typewriter="{{ speed: 70 }}">{word}</span>
    {/if}
  {/each}

</span>
