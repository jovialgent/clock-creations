<script lang="ts">
	import Clock from '../../components/Clock.svelte';
	import type { ITime } from '../../models';

	function updateTime({ detail }: { detail: ITime }) {
		console.log(detail);
	}
</script>

<Clock let:time on:updatedTime={updateTime}>
	<div class="container">
		<div class="grid">
			<section class="title title--month">
				<span class="title__text title__text--month"> Month</span>
			</section>
			<section class="label label--month">
				<span class="label__text label__text--month">
					{time.month}
				</span>
			</section>
			<section class="title title--day">
				<span class="title__text title__text--day">Day</span>
			</section>
			<section class="label label--day">
				<span class="label__text label__text--day">
					{time.day}
				</span>
			</section>
			<section class="title title--year">
				<span class="title__text title__text--year">Year</span>
			</section>
			<section class="label label--year">
				<span class="label__text label__text--year">
					{time.year}
				</span>
			</section>
			<section class="title title--hour">
				<span class="title__text title__text--hour">Hour</span>
			</section>
			<section class="label label--hour">
				<span class="label__text label__text--hour">
					{time.hour}
				</span>
			</section>
			<section class="title title--minute">
				<span class="title__text title__text--minute">Minute</span>
			</section>
			<section class="label label--minute">
				<span class="label__text label__text--minute">
					{time.minute}
				</span>
			</section>
			<section class="title title--second">
				<span class="title__text title__text--second">Second</span>
			</section>
			<section class="label label--second">
				<span class="label__text label__text--second">
					{time.second}
				</span>
			</section>
		</div>
	</div>
</Clock>

<style lang="scss">
	@import url('https://use.typekit.net/fli6yym.css');

	.container {
		background: black;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		font-family: bilo, sans-serif;
		font-weight: 400;
		font-style: normal;
		overflow: hidden;
	}

	$cell-number: 12;
	$cell-size: 60px;

	.grid {
		display: grid;
		grid-template-rows: repeat(#{$cell-number}, #{$cell-size});
		grid-template-columns: repeat(#{$cell-number}, #{$cell-size});
		color: white;
		grid-template-areas:
			'tm tm tm td td td td ld ld ld ld ld'
			'lm lm lm td td td td ld ld ld ld ld'
			'lm lm lm td td td td ld ld ld ld ld'
			'lm lm lm ty ty ty ty ty ty ly ly ly'
			'lh lh lh lh ti ti ti ti ti ti ti ti'
			'lh lh lh lh ti ti ti ti ti ti ti ti'
			'lh lh lh lh li li li li li li li li'
			'th th th th li li li li li li li li'
			'ts ts ts ts ts ts ts ts ls ls ls ls'
			'ts ts ts ts ts ts ts ts ls ls ls ls'
			'. . . . . . . . . . . .'
			'. . . . . . . . . . . .';
	}

	.title {
		border: solid 0.5px;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 900;
		text-transform: uppercase;
		&__text {
			&--month {
				transform: scale(2.9, 3);
			}
			&--day {
				transform: scale(7.3, 14.4);
				padding-bottom: 1.4px;
				padding-right: 0.5px;
			}
			&--year {
				transform: scale(8.5, 3.1);
			}
			&--minute {
				transform: scale(7.7, 8.3);
				padding-bottom: 1px;
			}
			&--hour {
				transform: scale(5.2, 3.3);
				padding-bottom: 2px;
			}
			&--second {
				transform: scale(7.2, 8.9);
				padding-bottom: 1px;
			}
		}
		&--month {
			grid-area: tm;
		}
		&--day {
			grid-area: td;
		}
		&--year {
			grid-area: ty;
		}
		&--hour {
			grid-area: th;
		}
		&--minute {
			grid-area: ti;
		}
		&--second {
			grid-area: ts;
		}
	}
	.label {
		border: solid 0.5px;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 100;
		&__text {
			&--month {
				transform: scale(11.1, 13);
				padding-bottom: 1px;
			}
			&--day {
				transform: scale(18.7, 12.4);
				padding-bottom: 1.4px;
			}
			&--year {
				transform: scale(5, 3.1);
				padding-left: 1px;
			}
			&--minute {
				transform: scale(27.5, 7.3);
				padding-bottom: 1px;
			}
			&--hour {
				transform: scale(14.1, 11.5);
				padding-bottom: 1.3px;
			}
			&--second {
				transform: scale(12.4, 8.9);
				padding-bottom: 1px;
			}
		}
		&--month {
			grid-area: lm;
		}
		&--day {
			grid-area: ld;
		}
		&--year {
			grid-area: ly;
		}
		&--hour {
			grid-area: lh;
		}
		&--minute {
			grid-area: li;
		}
		&--second {
			grid-area: ls;
		}
	}
</style>
