import { Controller, Get, StreamableFile } from '@nestjs/common';
import { createReadStream, ReadStream } from 'fs';
import { readdir } from 'fs/promises';
import { join } from 'path';

@Controller()
export class AppController {
  @Get('/video')
  async getVideo(): Promise<StreamableFile> {
    try {
      const files = await readdir(join(process.cwd(), 'video'));

      const fileStream: ReadStream = createReadStream(
        join(process.cwd(), `video/${files[1]}`),
      );

      return new StreamableFile(fileStream);
    } catch (error) {
      console.log('error', error);
    }
  }
}
