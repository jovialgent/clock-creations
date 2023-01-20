<script lang="ts">
	import { DateTime } from 'luxon';
	import { onMount, setContext, createEventDispatcher } from 'svelte';
	import type { ITime } from '../models';

	const dispatch = createEventDispatcher();

	export let time: ITime = generateTime();
	export function generateTime(): ITime {
		const current = DateTime.now();
		return {
			second: current.toFormat('ss'),
			minute: current.toFormat('mm'),
			hour: current.toFormat('hh'),
			year: current.toFormat('yyyy'),
			day: current.toFormat('dd'),
			month: current.toFormat('MM'),
			current
		};
	}

	onMount(() => {
		let rid = requestAnimationFrame(function update() {
			time = generateTime();
			rid = requestAnimationFrame(update);
			dispatch('updatedTime', time);
		});

		return () => cancelAnimationFrame(rid);
	});
</script>

<span>
	<slot {time} />
</span>
