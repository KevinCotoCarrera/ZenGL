<script>
    import { Canvas } from '@threlte/core'
    import Scene from './Scene.svelte';
	import Phrase from '$lib/components/Phrase/Phrase.svelte';
    let  disabledBtn = $state(false)
    function enableSound(){
      //sound is enabled after clicking the screen
      disabledBtn = true
    }
  </script>
  <Phrase
  phrase="目の前に立ちはだかる高い、高い壁"
  romaji="Me no mae ni tachiharadakaru takai, takai kabe"
  translation="A tall, tall wall looms over me"
  />
  <div class="flex flex-col justify center items-center h-screen w-auto py-24">
    <button disabled={disabledBtn} onclick={enableSound} class="bg-gray-800 disabled:bg-gray-400 text-white  text-xl w-64 rounded-3xl shadow-2xl px-12 py-4"> Enable Sound</button>
    {#if disabledBtn}
    <p class="text-gray-600 text-center mt-4">Audio is enabled</p>

    {/if}
    <Canvas>
    <Scene />
  </Canvas>
  </div>
  