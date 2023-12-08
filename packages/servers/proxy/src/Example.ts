import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { type HydratedDocument } from 'mongoose';

@Schema()
class Example {
	static getSchema() {
		return SchemaFactory.createForClass(Example);
	}

	@Prop()
	name: string;

	@Prop()
	age: number;

	@Prop()
	breed: string;
}

export interface ExampleDocument extends HydratedDocument<Example> {}

export default Example;
