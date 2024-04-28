export type Error = {
	errors?: any;
	field: string | null;
	message: string;
	status: number;
} | null;

export type ValidationError = {
	status: number;
	errors: {
		field: string;
		message: string;
	}[];
} | null;

export type ApiResponse = {
	data: any;
	loading: boolean;
	error: Error;
};
