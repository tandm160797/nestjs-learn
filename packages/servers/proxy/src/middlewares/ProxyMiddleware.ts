import { Injectable, type NestMiddleware } from '@nestjs/common';
import { type NextFunction, type Request, type Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { upperCase } from 'text-case';

import { MODULES } from '@biso24/constants';

@Injectable()
class ProxyMiddleware implements NestMiddleware {
	use(request: Request, response: Response, next: NextFunction) {
		// ? Dummy tenantId from application
		request.headers['tenant-id'] = 'nestjs-learn';

		// ? Handles the proxy configuration
		const createProxyMiddlewareOptions = (module: MODULES) => {
			module = MODULES.Core;
			const options = {
				target: `${process.env[`${upperCase(module)}_PROXY_URL`]}:${process.env[`${upperCase(module)}_PROXY_PORT`]}`,
				changeOrigin: true,
				pathRewrite: {
					[`^/${module}/(.*)`]: '/$1',
					[`^/(.*)`]: '/',
				},
			};

			return options;
		};

		const module = request.headers.module as MODULES;
		const proxyMiddlewareOptions = createProxyMiddlewareOptions(module);
		const proxyMiddleware = createProxyMiddleware(proxyMiddlewareOptions);
		return proxyMiddleware(request, response, next);
	}
}

export default ProxyMiddleware;
