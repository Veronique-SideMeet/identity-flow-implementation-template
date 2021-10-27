<script lang="ts" context="module">
	import { createLoad } from './_load';
	export const load = createLoad('login');
</script>

<script lang="ts">
	import AuthForm from '$lib/components/AuthForm.svelte';
	import type { UiContainer } from '@ory/kratos-client';

	export let authUi: UiContainer;

	$: ui = authUi;
</script>

<h1>This is the login page!</h1>

<AuthForm label="Log in" authUi={ui} />
<p>Forgot password? <a href="/auth/reset-password">Reset it</a></p>
<p>Don't have an account? <a href="/auth/register">Register</a></p>
