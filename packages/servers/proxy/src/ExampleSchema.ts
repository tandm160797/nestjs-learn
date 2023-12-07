import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { type HydratedDocument } from 'mongoose';

@Schema()
export class Example {
	@Prop()
	name: string;

	@Prop()
	age: number;

	@Prop()
	breed: string;
}

export interface ExampleDocument extends HydratedDocument<Example> {}

// export type ExampleDocument = HydratedDocument<Example>;

const ExampleSchema = SchemaFactory.createForClass(Example);

export default ExampleSchema;
