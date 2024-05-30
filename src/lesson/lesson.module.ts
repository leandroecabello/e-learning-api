import { Module } from '@nestjs/common';
import { LessonService } from './services/lesson.service';
import { LessonController } from './controllers/lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  providers: [LessonService],
  controllers: [LessonController],
})
export class LessonModule {}
