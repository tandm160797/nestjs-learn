import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Transform } from 'class-transformer';
import { Document, ObjectId, type Query } from 'mongoose';

@Schema({
	timestamps: true,
	versionKey: false,
	toJSON: {
		getters: true,
		virtuals: true,
	},
})
class BaseModel extends Document {
	static get schema() {
		return SchemaFactory.createForClass(this);
	}

	@Transform(({ value }) => {
		return value.toString();
	})
	_id: ObjectId;

	@Prop({
		default: null,
	})
	deletedAt: Date;

	@Exclude()
	__v: number;

	@Exclude()
	createdAt: Date;

	@Exclude()
	updatedAt: Date;

	@Exclude()
	deleteddAt: Date;

	toJSON() {
		console.log(123);

		return super.toJSON();
	}
}

const findActions: Array<'find' | 'findOne' | 'findOneAndReplace' | 'findOneAndUpdate' | 'findOneAndDelete'> = [
	'find',
	'findOne',
	'findOneAndReplace',
	'findOneAndUpdate',
	'findOneAndDelete',
];
findActions.forEach((action) => {
	console.log(33);

	BaseModel.schema.post(action, async function (this: Query<BaseModel, BaseModel>, next) {
		await this.where('deletedAt').equals(null);

		next();
	});
});

export default BaseModel;
