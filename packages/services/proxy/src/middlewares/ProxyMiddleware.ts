import { Injectable, type NestMiddleware } from '@nestjs/common';
import { type NextFunction, type Request, type Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

@Injectable()
class ProxyMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		const API_SERVICE_URL = 'http://localhost:5000';

		const proxyMiddleware = createProxyMiddleware({
			target: API_SERVICE_URL,
			changeOrigin: true,
		});

		return proxyMiddleware(req, res, next);
	}
}

export default ProxyMiddleware;
