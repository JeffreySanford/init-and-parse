import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  

  getData(): { values: number } {
    const array = [167, 182, 194, 285, 16, 34];  
    return { values: 167 };
  }
}
