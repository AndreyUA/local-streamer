import { Controller, Get, StreamableFile } from '@nestjs/common';
import { createReadStream, ReadStream } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {
  @Get('/video')
  getVideo(): StreamableFile {
    const fileStream: ReadStream = createReadStream(
      join(process.cwd(), 'video/password.webm'),
    );

    return new StreamableFile(fileStream);
  }
}
