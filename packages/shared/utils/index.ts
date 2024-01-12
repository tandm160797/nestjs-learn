import { type Request } from 'express';

export const getTenantHeaders = (request: Request) => {
	return request.headers['tenant-id']
		? {
				headers: {
					'tenant-id': request.headers['tenant-id'] as string,
				},
		  }
		: {};
};
