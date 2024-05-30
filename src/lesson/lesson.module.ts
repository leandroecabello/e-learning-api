import { Module } from '@nestjs/common';
import { LessonService } from './services/lesson.service';
import { LessonController } from './controllers/lesson.controller';

@Module({
  providers: [LessonService],
  controllers: [LessonController],
})
export class LessonModule {}
