<script lang="ts">
    import {Canvas} from '@threlte/core'
    import Scene from './Scene.svelte';
    import Phrase from '$lib/components/Phrase/Phrase.svelte';
	  import CanvasContainer from '$lib/components/CanvasContainer/CanvasContainer.svelte';
	  import createCustomRenderer from '$lib/utils/three/customRenderer';
   
</script>
<Phrase
phrase="その 向こう は どんな 眺め だろ う か‌"
romaji="sono mukou ha donna nagame daro u ka ?"
translation="What's the view in the other side?"
/>

<CanvasContainer>
      <Canvas
      createRenderer={createCustomRenderer}
    
      >
      <Scene />
    </Canvas>
  </CanvasContainer>
     