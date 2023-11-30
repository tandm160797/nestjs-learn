import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
	getHello(): string {
		return "Hello, I'm Proxy Server!";
	}
}

export default AppService;
