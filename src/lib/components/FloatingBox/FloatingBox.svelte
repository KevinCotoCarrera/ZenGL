<script lang="ts">
    import { onMount } from 'svelte';
    import { T } from '@threlte/core';
  
    export let position: [number, number, number];
    let pos = { x: position[0], y: position[1], z: position[2] };
    let velocity = { x: Math.random() * 0.05, y: Math.random() * 0.05, z: Math.random() * 0.05 };
  
    // Update position for random movement
    const moveBox = () => {
      pos.x += velocity.x;
      pos.y += velocity.y;
      pos.z += velocity.z;
  
      if (pos.x > 15 || pos.x < -15) velocity.x *= -1;
      if (pos.y > 5 || pos.y < -5) velocity.y *= -1;
      if (pos.z > 20 || pos.z < -20) velocity.z *= -1;
    };
  
    onMount(() => {
      const interval = setInterval(() => {
        moveBox();
      }, 50); // Update position every 50ms (~20 FPS)
  
      return () => {
        clearInterval(interval);
      };
    });
  </script>
  
  <T.Mesh position={[pos.x, pos.y, pos.z]}>
    <T.BoxGeometry args={[1, 1, 1]} />
    <T.MeshStandardMaterial color="blue" metalness={0.5} roughness={0.3} />
  </T.Mesh>
  