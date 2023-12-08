import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { type HydratedDocument } from 'mongoose';

@Schema()
class Example1 {
	static getSchema() {
		return SchemaFactory.createForClass(Example1);
	}

	@Prop()
	name: string;

	@Prop()
	age: number;

	@Prop()
	breed: string;
}

export interface Example1Document extends HydratedDocument<Example1> {}

export default Example1;
