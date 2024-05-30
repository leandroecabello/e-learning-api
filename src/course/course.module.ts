import { Module } from '@nestjs/common';
import { CourseService } from './services/course.service';
import { CourseController } from './controllers/course.controller';

@Module({
  providers: [CourseService],
  controllers: [CourseController],
})
export class CourseModule {}
