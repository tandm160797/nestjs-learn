import { Injectable, type NestMiddleware } from '@nestjs/common';
import { type NextFunction, type Request, type Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import type mongoose from 'mongoose';
import { createConnection, type Connection } from 'mongoose';
import { upperCase } from 'text-case';

import { MODULES } from '@biso24/constants';

export interface TenantRequest extends Request {
	tenantConnection: mongoose.Connection;
}

const tenantConnections = new Map<string, Connection>();

@Injectable()
class ProxyMiddleware implements NestMiddleware {
	use(request: TenantRequest, response: Response, next: NextFunction) {
		// ? Handles the multi tenant requests, get and attack tenantConnection into req object
		const tenantId = (request.headers.tenantId || 'nestjs-learn') as string;

		if (!tenantConnections.has(tenantId)) {
			const databaseName = 'biso24';
			const tenantConnectionURI = `mongodb+srv://nestjs-learn:${tenantId}@cluster0.ii25nnr.mongodb.net/${databaseName}`;
			const tenantConnection = createConnection(tenantConnectionURI);

			tenantConnections.set(tenantId, tenantConnection);
			request.tenantConnection = tenantConnection;
		} else {
			request.tenantConnection = tenantConnections.get(tenantId);
		}

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
		// return proxyMiddleware(req, res, next);

		next();
	}
}

export default ProxyMiddleware;
