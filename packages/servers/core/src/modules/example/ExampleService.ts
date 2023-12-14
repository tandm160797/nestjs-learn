import { Injectable } from '@nestjs/common';

import ExampleRepository from 'modules/example/ExampleRepository';

@Injectable()
class ExampleService {
	constructor(private readonly exampleRepository: ExampleRepository) {}

	list() {
		return this.exampleRepository.findById('657b438a670c82f98cedc99c');
	}
}

export default ExampleService;
