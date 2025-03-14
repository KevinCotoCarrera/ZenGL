<script>
    import { Canvas } from '@threlte/core'
    import Scene from './Scene.svelte';
	import Phrase from '$lib/components/Phrase/Phrase.svelte';
	import CanvasContainer from '$lib/components/CanvasContainer/CanvasContainer.svelte';
    
  </script>
  <Phrase
  phrase="目の前に立ちはだかる高い、高い壁"
  romaji="Me no mae ni tachiharadakaru takai, takai kabe"
  translation="A tall, tall wall looms over me"
  />
<CanvasContainer>
  <p>Click the Screen to enable Sound</p>
    <Canvas
    >
    <Scene />
  </Canvas>
</CanvasContainer>
  