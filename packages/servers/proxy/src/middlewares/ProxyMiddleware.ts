import { Injectable, type NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { type NextFunction, type Request, type Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { upperCase } from 'text-case';

import { Module } from '@biso24/types';

@Injectable()
class ProxyMiddleware implements NestMiddleware {
	constructor(private readonly configService: ConfigService) {}

	use(request: Request, response: Response, next: NextFunction) {
		// ? Dummy tenantId from application
		request.headers['tenant-id'] = 'tenant';

		// ? Handles the proxy configuration
		const createProxyMiddlewareOptions = (module: Module) => {
			module = Module.Core; // dummy
			const options = {
				target: `${this.configService.get(`${upperCase(module)}_PROXY_URL`)}:${this.configService.get(
					`${upperCase(module)}_PROXY_PORT`,
				)}`,
				changeOrigin: true,
				pathRewrite: {
					[`^/${module}/(.*)`]: '/$1',
					[`^/(.*)`]: '/',
				},
			};

			return options;
		};

		const module = request.headers.module as Module;
		const proxyMiddlewareOptions = createProxyMiddlewareOptions(module);
		const proxyMiddleware = createProxyMiddleware(proxyMiddlewareOptions);
		return proxyMiddleware(request, response, next);
	}
}

export default ProxyMiddleware;
