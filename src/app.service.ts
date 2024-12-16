import { Injectable } from '@nestjs/common';
import pLimit from 'p-limit';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const limit = pLimit(1);
    const input = [
      limit(() => Promise.resolve('Hello')),
      limit(() => Promise.resolve('World')),
      limit(() => Promise.resolve('!')),
    ];

    const result = await Promise.all(input);

    return result.join(' ');
  }
}
