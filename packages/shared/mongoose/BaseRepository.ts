import { InternalServerErrorException } from '@nestjs/common';
import { Types, type Model } from 'mongoose';

import type BaseModel from './BaseModel';

abstract class BaseRepository<T extends BaseModel> {
	constructor(private readonly Model: Model<T>) {}

	static throwMongooseError(error: any) {
		throw new InternalServerErrorException(error, error.message);
	}

	static toObjectId(id: string) {
		try {
			return new Types.ObjectId(id);
		} catch (error) {
			this.throwMongooseError(error);
		}
	}

	createModel(doc?: Partial<T>) {
		return new this.Model(doc);
	}

	findAll(filter = {}) {
		return this.Model.find(filter);
	}

	async findAllAsync(filter = {}) {
		try {
			return await this.findAll(filter).exec();
		} catch (error) {
			BaseRepository.throwMongooseError(error);
		}
	}

	findOne(filter = {}) {
		return this.Model.findOne(filter);
	}

	async findOneAsync(filter = {}) {
		try {
			return await this.findOne(filter).exec();
		} catch (error) {
			BaseRepository.throwMongooseError(error);
		}
	}

	findById(id: string) {
		console.log(123, id, 1, this.Model.findById(BaseRepository.toObjectId(id)));

		return this.Model.findById(BaseRepository.toObjectId(id));
	}

	async findByIdAsync(id: string) {
		try {
			return await this.findById(id).exec();
		} catch (error) {
			BaseRepository.throwMongooseError(error);
		}
	}

	async create(item: T) {
		try {
			return await this.Model.create(item);
		} catch (error) {
			BaseRepository.throwMongooseError(error);
		}
	}

	delete(filter = {}) {
		return this.Model.findOneAndDelete(filter);
	}

	async deleteAsync(filter = {}) {
		try {
			return await this.delete(filter).exec();
		} catch (error) {
			BaseRepository.throwMongooseError(error);
		}
	}

	deleteById(id: string) {
		return this.Model.findByIdAndDelete(BaseRepository.toObjectId(id));
	}

	async deleteByIdAsync(id: string) {
		try {
			return await this.deleteById(id).exec();
		} catch (error) {
			BaseRepository.throwMongooseError(error);
		}
	}

	async updateAsync(item: T) {
		try {
			return await this.Model.updateOne().exec();
		} catch (error) {
			BaseRepository.throwMongooseError(error);
		}
	}
}

export default BaseRepository;
