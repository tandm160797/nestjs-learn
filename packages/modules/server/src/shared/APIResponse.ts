import { type HttpStatus } from '@nestjs/common';

class APIResponse<T> {
	constructor(public readonly data: T, public readonly statusCode: HttpStatus, public readonly message: string) {}
}

export default APIResponse;
