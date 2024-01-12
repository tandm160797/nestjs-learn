import { Inject, Injectable, Scope } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { REQUEST } from '@nestjs/core';
import { type MongooseModuleOptions, type MongooseOptionsFactory } from '@nestjs/mongoose';
import { Request } from 'express';

const tenantConnectionsString = new Map<string, string>();

@Injectable({
	scope: Scope.REQUEST,
})
class TenantService implements MongooseOptionsFactory {
	constructor(
		@Inject(REQUEST) private readonly request: Request,
		private readonly configService: ConfigService,
	) {}

	createMongooseOptions(): MongooseModuleOptions {
		const connectionString = this.getTenantConnectionString();

		return {
			uri: connectionString,
		};
	}

	private getTenantConnectionString(): string {
		// ? Handles the multi tenant requests
		const tenantId = this.request.headers['tenant-id'] as string;
		if (!tenantConnectionsString.has(tenantId)) {
			const databaseName = tenantId;
			const tenantConnectionString = `mongodb+srv://${this.configService.get(
				'MONGO_DB_USERNAME',
			)}:${this.configService.get('MONGO_DB_PASSWORD')}@cluster0.ii25nnr.mongodb.net/${databaseName}`;
			tenantConnectionsString.set(tenantId, tenantConnectionString);
		}
		return tenantConnectionsString.get(tenantId);
	}
}

export default TenantService;
