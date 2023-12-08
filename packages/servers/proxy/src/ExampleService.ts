// example.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import ExampleSchema, { Example, type ExampleDocument } from 'ExampleSchema';
import { type RequestWithConection } from 'middlewares/ProxyMiddleware';
import { Model } from 'mongoose';

@Injectable()
export class ExampleService {
	constructor(@InjectModel(Example.name) private readonly exampleModel: Model<ExampleDocument>) {}

	async list(req: RequestWithConection) {
		const { tenantConnection } = req;
		const model = tenantConnection.model(Example.name, ExampleSchema);
		return await model.find();
		// return await this.exampleModel.find();
	}
}
