import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { type HydratedDocument } from 'mongoose';

export interface ExampleDocument extends HydratedDocument<Example> {}

@Schema()
export class Example {
	@Prop()
	name: string;

	@Prop()
	age: number;

	@Prop()
	breed: string;
}

const ExampleSchema = SchemaFactory.createForClass(Example);

export default ExampleSchema;
