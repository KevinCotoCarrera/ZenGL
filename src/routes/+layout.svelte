<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { page } from '$app/state'; // Fixed import pat
	let isMainPage= $derived(page.url.pathname == '/')
const validDays = $derived.by(() => {
		const modules = import.meta.glob('/src/routes/day-*/+page.svelte');
		return Object.keys(modules)
			.map(path => {
				const match = path.match(/day-(\d+)/);
				return match ? parseInt(match[1]) : null;
			})
			.filter((day): day is number => !!day)
			.sort((a, b) => a - b);
	});

	const dayNumber = $derived.by(() => {
		const match = page.url.pathname.match(/\/day-(\d+)/);
		return match ? parseInt(match[1]) : null;
	});

	const dayTitle = $derived(dayNumber ? `Day ${dayNumber}` : 'Unknown Day');

	const prevDay = $derived(dayNumber && dayNumber > 1 ? `/day-${dayNumber - 1}` : null);
	const nextDay = $derived(dayNumber ? `/day-${dayNumber + 1}` : null);
	const nextDayExists = $derived(dayNumber ? validDays.includes(dayNumber + 1) : false);
</script>
{#if isMainPage} 	{@render children()} {:else}
<div class="py-4">
	<div class="relative flex flex-col items-center">
		<span class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 text-sm tracking-wide text-gray-600 dark:text-gray-400">
			日記 (Diary)
		</span>
		<h1 class="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white tracking-widest relative">
			{dayTitle}
		</h1>
		<div class="mt-6 flex justify-between w-full max-w-xs">
				<a href={prevDay} class="px-4 py-2 transition-all"
					class:text-red-400={prevDay}
					class:text-gray-400={!prevDay}
					class:cursor-not-allowed={!prevDay}
					aria-disabled={!prevDay}
				
				>
					← Previous
				</a>
			
				<a
					href={nextDayExists ? nextDay : ''}
					class="px-4 py-2 transition-all"
					class:text-red-400={nextDayExists}
					class:text-gray-400={!nextDayExists}
					class:cursor-not-allowed={!nextDayExists}
					aria-disabled={!nextDayExists}
				>
					Next →
				</a>
			
		</div>
	</div>

	{@render children()}
</div>
{/if}
