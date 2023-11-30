import { Transport } from '@nestjs/microservices';
import { camelCase } from 'text-case';
const SERVICE_NAME = ['USER_SERVICE'] as const;

class ConfigService {
	private readonly envConfig: Record<string, any> = null;

	constructor() {
		this.envConfig = {};
		this.envConfig[camelCase('PORT')] = process.env.API_GATEWAY_PORT;

		this.envConfig[camelCase('USER_SERVICE')] = {
			name: 'USER_SERVICE',
			transport: Transport.TCP,
			options: {
				host: process.env.USER_SERVICE_HOST,
				port: process.env.USER_SERVICE_PORT,
			},
		};
	}

	get(key: (typeof SERVICE_NAME)[number] | 'PORT') {
		return this.envConfig[camelCase(key)];
	}
}

export default ConfigService;
