<script>
    import { Canvas } from '@threlte/core'
    import Scene from './Scene.svelte';
	import Phrase from '$lib/components/Phrase/Phrase.svelte';
    
  </script>
  <Phrase
  phrase="目の前に立ちはだかる高い、高い壁"
  romaji="Me no mae ni tachiharadakaru takai, takai kabe"
  translation="A tall, tall wall looms over me"
  />
  <div class="flex flex-col justify center items-center h-screen w-auto py-24">
  <p>Click the Screen to enable Sound</p>
    <Canvas>
    <Scene />
  </Canvas>
  </div>
  