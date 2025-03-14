<script lang="ts">
	let { children } = $props();
</script>
<div 
class="flex flex-col justify center items-center 
h-screen w-auto pt-24">
{@render children()}

</div>