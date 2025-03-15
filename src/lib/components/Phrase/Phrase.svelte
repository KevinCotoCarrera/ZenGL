<script lang="ts">
    import { fade } from 'svelte/transition';
	import Share from '../Share/Share.svelte';
	import { mixString } from '$lib/utils/mixString';
    interface Props  {
        phrase: string, 
        romaji: string,
        translation: string
    }
    let { phrase = "こんにちは、世界！", romaji = "Konnichiwa, sekai!", translation = "Hello, World!" }: Props = $props();
    const shareText = mixString('|', phrase, romaji, translation)
    console.log('shareText:',shareText)

</script>

  <div class="text-center w-fit mx-auto mt-4" >
    <div class="text-center transform hover:scale-105 transition-all duration-300 pb-4" transition:fade>
      <div class="text-4xl font-bold text-red-600 mb-4">{phrase}</div>
      <div class="text-xl italic text-gray-700 mb-2">{romaji}</div>
      <div class="text-base text-gray-500">{translation}</div>
  </div>
    <Share {shareText}/>
  </div>

  