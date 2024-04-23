export type ErrorType = { field: string | null; message: string; status: number } | null;

export type ApiResponse = {
	data: any;
	loading: boolean;
	error: ErrorType;
};
