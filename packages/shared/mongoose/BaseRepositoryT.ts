// import { type Model, type FilterQuery, type QueryOptions } from 'mongoose';

// import type BaseModel from './BaseModel';

// import { type FindAllResponse } from 'src/types/common.type';

// export interface IBaseRepository<T> {
// 	create: (dto: T | any) => Promise<T>;
// 	find: (condition: object, options?: object) => Promise<FindAllResponse<T>>;
// 	findOneById: (id: string, projection?: string) => Promise<T>;
// 	findOneByCondition: (condition?: object, projection?: string) => Promise<T>;
// 	update: (id: string, dto: Partial<T>) => Promise<T>;
// 	softDelete: (id: string) => Promise<boolean>;
// }

// abstract class BaseRepository<T extends BaseModel> implements IBaseRepository<T> {
// 	protected constructor(private readonly model: Model<T>) {}

// 	async create(dto: T | any): Promise<T> {
// 		const created_data = await this.model.create(dto);
// 		return created_data.save();
// 	}

// 	async findOneById(id: string): Promise<T> {
// 		const item = await this.model.findById(id);
// 		return item.deleted_at ? null : item;
// 	}

// 	async findOneByCondition(condition = {}): Promise<T> {
// 		return await this.model
// 			.findOne({
// 				...condition,
// 				deleted_at: null,
// 			})
// 			.exec();
// 	}

// 	async findAll(condition: FilterQuery<T>, options?: QueryOptions<T>): Promise<FindAllResponse<T>> {
// 		const [count, items] = await Promise.all([
// 			this.model.count({
// 				...condition,
// 				deleted_at: null,
// 			}),
// 			this.model.find(
// 				{
// 					...condition,
// 					deleted_at: null,
// 				},
// 				options?.projection,
// 				options,
// 			),
// 		]);
// 		return {
// 			count,
// 			items,
// 		};
// 	}

// 	async update(id: string, dto: Partial<T>): Promise<T> {
// 		return await this.model.findOneAndUpdate(
// 			{
// 				_id: id,
// 				deleted_at: null,
// 			},
// 			dto,
// 			{
// 				new: true,
// 			},
// 		);
// 	}

// 	async softDelete(id: string): Promise<boolean> {
// 		const delete_item = await this.model.findById(id);
// 		if (!delete_item) {
// 			return false;
// 		}

// 		return !!(await this.model
// 			.findByIdAndUpdate<T>(id, {
// 				deleted_at: new Date(),
// 			})
// 			.exec());
// 	}

// 	async permanentlyDelete(id: string): Promise<boolean> {
// 		const delete_item = await this.model.findById(id);
// 		if (!delete_item) {
// 			return false;
// 		}
// 		return !!(await this.model.findByIdAndDelete(id));
// 	}
// }

// export default BaseRepository;
