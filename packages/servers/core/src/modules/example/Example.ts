import { Prop, Schema } from '@nestjs/mongoose';
import { type HydratedDocument } from 'mongoose';

import { BaseModel } from '@biso24/mongoose';

export interface ExampleDocument extends HydratedDocument<Example> {}

@Schema()
class Example extends BaseModel {
	@Prop()
	name: string;

	@Prop()
	age: number;

	@Prop()
	breed: string;
}

export default Example;
