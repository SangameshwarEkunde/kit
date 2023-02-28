/** Internal version of $app/environment */
declare module '__sveltekit/environment' {
	export const building: boolean;
	export const version: string;
	export function set_building(): void;
}

/** Internal version of $app/paths */
declare module '__sveltekit/paths' {
	export let base: '' | `/${string}`;
	export let assets: '' | `https://${string}` | `http://${string}` | '/_svelte_kit_assets';
	export let relative: boolean | undefined; // TODO in 2.0, make this a `boolean` that defaults to `true`
	export function reset(): void;
	export function override(paths: { base: string; assets: string }): void;
	export function set_assets(path: string): void;
}
