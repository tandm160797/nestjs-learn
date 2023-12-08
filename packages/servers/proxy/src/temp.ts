// import { Global, Inject, Injectable, Logger, Scope } from '@nestjs/common';
// import { REQUEST } from '@nestjs/core';
// import { Request } from 'express';
// import { createConnection, type Connection, type Model } from 'mongoose';
// import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

// import TenantProvider from 'tenant/TenantProvider';

// @Global()
// @Injectable({
// 	scope: Scope.REQUEST,
// })
// class TenantProvider {
// 	private readonly tenantConnections = new Map<string, Connection>();
// 	private readonly logger = new Logger(TenantProvider.name);

// 	constructor(@Inject(REQUEST) private readonly request: Request) {}

// 	getConnection(): Connection {
// 		// ? Handles the multi tenant requests
// 		// const tenantId = this.request.headers.tenantId as string;
// 		const tenantId = `nestjs-learn` as string;
// 		if (!this.tenantConnections.has(tenantId)) {
// 			this.logger.log(`Creating connection for tenant: ${tenantId}`);
// 			const databaseName = 'biso24';
// 			const tenantConnectionURI = `mongodb+srv://nestjs-learn:${tenantId}@cluster0.ii25nnr.mongodb.net/${databaseName}`;
// 			const tenantConnection = createConnection(tenantConnectionURI);
// 			this.tenantConnections.set(tenantId, tenantConnection);
// 		}
// 		return this.tenantConnections.get(tenantId);
// 	}

// 	getModel(Model: any): Model<any> {
// 		return this.getConnection().model(Model.name, Model.getSchema());
// 	}
// }

// export default TenantProvider;

// const InjectTenantModel = (Model: any): ParameterDecorator => {
// 	return (target: any, key: string | symbol, index: number) => {
// 		const context = new ExecutionContextHost([target.constructor, target[key], target.constructor.prototype]);
// 		const request = context.switchToHttp().getRequest();

// 		const tenantProvider = new TenantProvider(request);
// 		const tenantModel = tenantProvider.getModel(Model);
// 		console.log(
// 			tenantModel
// 				.find()
// 				.exec()
// 				.then((rs) => {
// 					return console.log(rs);
// 				}),
// 		);

// 		Inject(tenantModel)(target, key, index);
// 	};
// };

// export default InjectTenantModel;
