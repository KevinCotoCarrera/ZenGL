<script lang="ts">
    import { T } from '@threlte/core';
    import FloatingBox from '$lib/components/FloatingBox/FloatingBox.svelte';
    import type { Position } from '$lib/types/Position';

    const boxCount = 150;
    const boxes: Position[] = Array.from({ length: boxCount }, () => {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 40;
      return [x, y, z];
    });

    let lightPosition: Position = $state([5, 32, 32]);

    let time = $state(0);
    const moveLight = () => {
        time += 0.01;
        lightPosition = [
            5 + Math.sin(time * 1) * 10,
            32 + Math.cos(time * 1) * 10,
            32 + Math.sin(time * 2) * 10
        ];
        requestAnimationFrame(moveLight);
    };
    moveLight();
</script>

<T.Fog attach="fog" args={['#003366', 10, 50]} />
<T.PerspectiveCamera makeDefault position={[0, 0, 20]} oncreate={(ref) => ref.lookAt(0, 0, 0)} />
<T.AmbientLight intensity={0} />
<T.PointLight position={lightPosition} intensity={4} decay={-0.5} distance={0} color="white" castShadow />
<T.Mesh position={[0, 0, 0]}>
    <T.SphereGeometry args={[5, 32, 32]} />
    <T.MeshStandardMaterial color="yellow" emissive="red" emissiveIntensity={3} />
</T.Mesh>

{#each boxes as pos}
    <FloatingBox position={pos} />
{/each}
