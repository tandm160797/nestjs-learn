import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import Example, { type ExampleDocument } from 'Example';
import { type TenantRequest } from 'middlewares/ProxyMiddleware';
import { InjectModel, getConnectionToken } from '@nestjs/mongoose';
import Example1 from 'Example1';

export const InjectTenantModel = (Model: any): ParameterDecorator => {
	return (target: any, key: string | symbol, index: number) => {
		return (req, _: any, param: any) => {
			const tenantModel = req.tenantConnection?.model(Model.name, Model.getSchema());
			Inject(tenantModel)(target, key, index);
		};
	};

	// return (target: any, key: string | symbol, index: number) => {
	// 	console.log(1);

	// 	const tenantModel = request.tenantConnection?.model(Model.name, Model.getSchema());
	// 	Inject(tenantModel)(target, key, index);
	// };
};

@Injectable()
class ExampleService {
	constructor(@InjectTenantModel(Example1) private readonly exampleModel: Model<ExampleDocument>) {}
	// constructor(@InjectModel(Example.name) private readonly exampleModel: Model<ExampleDocument>) {}

	async list() {
		return await this.exampleModel.find();
	}
}

export default ExampleService;
