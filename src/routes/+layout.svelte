<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>
<div class="py-4">
{@render children()}
</div>