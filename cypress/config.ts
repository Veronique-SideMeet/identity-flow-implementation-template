export const apiRoutes = {
	publicBase: Cypress.env('VITE_KRATOS_PUBLIC_URL') || 'http://127.0.0.1:4433',
	publicAdmin: Cypress.env('VITE_KRATOS_PUBLIC_URL') || 'http://127.0.0.1:4434',
	get register() {
		return `${this.publicBase}/self-service/registration`;
	},
	get whoami() {
		return `${this.publicBase}/sessions/whoami`;
	}
};

export enum LOGIN_FIELDS {
	email = 'auth-email',
	password = 'auth-password',
	password_toggle = 'auth-password-toggle',
	submit = 'auth-submit'
}

export enum REGISTER_FIELDS {
	email = 'auth-email',
	password = 'auth-password',
	password_toggle = 'auth-password-toggle',
	submit = 'auth-submit'
}
