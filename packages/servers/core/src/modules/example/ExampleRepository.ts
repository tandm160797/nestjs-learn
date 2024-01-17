import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseRepository } from '@biso24/mongoose';

import Example, { type ExampleDocument } from '@modules/example/Example';

@Injectable()
class ExampleRepository extends BaseRepository<Example> {
	constructor(@InjectModel(Example.name) private readonly exampleModel: Model<ExampleDocument>) {
		super(exampleModel);
	}
}

export default ExampleRepository;
