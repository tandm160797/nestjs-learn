import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import Example, { type ExampleDocument } from 'modules/example/Example';
import { BaseRepository } from '@biso24/mongoose';

@Injectable()
class ExampleRepository extends BaseRepository<Example> {
	constructor(@InjectModel(Example.name) private readonly exampleModel: Model<ExampleDocument>) {
		super(exampleModel);
	}
}

export default ExampleRepository;
