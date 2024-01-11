import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Example, type ExampleDocument } from '@modules/example/ExampleSchema';

@Injectable()
class ExampleService {
	constructor(@InjectModel(Example.name) private readonly exampleModel: Model<ExampleDocument>) {}

	async list() {
		return await this.exampleModel.find();
	}
}

export default ExampleService;
