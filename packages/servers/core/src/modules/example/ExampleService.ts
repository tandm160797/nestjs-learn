import { Injectable } from '@nestjs/common';

import ExampleRepository from '@modules/example/ExampleRepository';

@Injectable()
class ExampleService {
	constructor(private readonly exampleRepository: ExampleRepository) {}

	list() {
		return this.exampleRepository.findAll();
	}
}

export default ExampleService;
