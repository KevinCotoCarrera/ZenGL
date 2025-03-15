<script lang="ts">
    import {Canvas} from '@threlte/core'
    import Scene from './Scene.svelte';
    import Phrase from '$lib/components/Phrase/Phrase.svelte';
	  import CanvasContainer from '$lib/components/CanvasContainer/CanvasContainer.svelte';
	  import createCustomRenderer from '$lib/utils/three/customRenderer';
   
</script>
<Phrase
phrase="🗝️ かつて動かない光"
romaji="Katsute ugokanai hikari"
translation="The Light That Once Refused to Move"
/>

<CanvasContainer>
      <Canvas
      createRenderer={createCustomRenderer}
    
      >
      <Scene />
    </Canvas>
  </CanvasContainer>
     