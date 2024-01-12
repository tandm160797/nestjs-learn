import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { type HydratedDocument } from 'mongoose';

export interface UserDocument extends HydratedDocument<User> {}

@Schema()
export class User {
	@Prop()
	email: string;

	@Prop()
	password: string;
}

const UserSchema = SchemaFactory.createForClass(User);

export default UserSchema;
