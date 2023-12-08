import { Injectable, type NestMiddleware } from '@nestjs/common';
import { type NextFunction, type Request, type Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import mongoose from 'mongoose';
import { upperCase } from 'text-case';

import { MODULES } from '@biso24/constants';

export interface RequestWithConection extends Request {
	tenantConnection: mongoose.Connection;
}

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
	use(req: RequestWithConection, res: Response, next: NextFunction) {
		// ? Handles the multi-tenant requests, get and attack tenantConnection into req object
		const databaseName = 'biso24';
		const tenantId = (req.headers.hostName || 'nestjs-learn') as string;
		const tenantConnectionURI = `mongodb+srv://nestjs-learn:${tenantId}@cluster0.ii25nnr.mongodb.net/${databaseName}`;
		const tenantConnection = mongoose.createConnection(tenantConnectionURI);
		req.tenantConnection = tenantConnection;

		// ? Handles the proxy configuration
		const module = req.headers.module as MODULES;
		const proxyMiddlewareOptions = createProxyMiddlewareOptions(module);
		const proxyMiddleware = createProxyMiddleware(proxyMiddlewareOptions);
		return proxyMiddleware(req, res, next);
	}
}

export default ProxyMiddleware;
