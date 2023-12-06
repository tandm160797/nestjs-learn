import { Injectable, type NestMiddleware } from '@nestjs/common';
import { type NextFunction, type Request, type Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { upperCase } from 'text-case';

import { MODULES } from '@biso24/constants';

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

@Injectable()
class ProxyMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		const module = req.headers.module as MODULES;
		const proxyMiddlewareOptions = createProxyMiddlewareOptions(module);
		const proxyMiddleware = createProxyMiddleware(proxyMiddlewareOptions);
		return proxyMiddleware(req, res, next);
	}
}

export default ProxyMiddleware;
