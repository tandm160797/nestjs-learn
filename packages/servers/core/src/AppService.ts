import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
	getHello(): string {
		return "Hello, I'm Gateway Server!";
	}
}

export default AppService;
