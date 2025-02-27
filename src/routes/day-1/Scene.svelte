<script lang="ts">
    import { T, useTask } from "@threlte/core";
    import { interactivity } from "@threlte/extras";
	import { Spring } from "svelte/motion";
    import {AudioListener, Audio} from "@threlte/extras";
    import pianoG from '$lib/sounds/piano-g.mp3'

interface Box {
  position: [number, number, number];
  scale: Spring<number>;
  audio:  any;
}

    interactivity()
    

    let rotation = 1
    useTask((delta)=>{
        rotation += delta
    })
    let boxes: Box[] = Array.from({ length: 10 }, (_, i) => ({
        position: [i * 3 - 15, 0, 0] as [number, number, number],
        scale: new Spring(1),
        audio: null
    }));

    

    
   </script>

<T.PerspectiveCamera
    makeDefault
    position={[0,5,10]}
    oncreate={(ref)=>{
        ref.lookAt(0,1,1)
    }}
/>

<T.DirectionalLight
    position={[0,10,10]}
/>
<AudioListener/>
{#each {length: 4} as _, row }
    {#each  boxes as box}
        <T.Mesh
            rotation.y={rotation}
            position={[box.position[0],  row * -1.5 + 3, box.position[2]]}
            scale={box.scale.current}
            onpointerenter={()=> {
                box.scale.target = 1.5
                if(box.audio){
                    box.audio.play()
                }
            }}
            onpointerleave={()=>{
                box.scale.target = 1
        }}
        >
            <T.BoxGeometry args{[1,2,1]}/>
            <T.MeshStandardMaterial color={row % 2 === 0 ? 'black': "white"}/>
        <Audio
        bind:this={box.audio}
        src={pianoG}
        autoplay={false}
        loop={false}
        volume={0.1}
        />

        </T.Mesh>
        {/each}

{/each}

