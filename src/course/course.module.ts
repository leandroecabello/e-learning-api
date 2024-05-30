import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseService } from './services/course.service';
import { CourseController } from './controllers/course.controller';
import { Course } from './entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CourseService],
  controllers: [CourseController],
})
export class CourseModule {}
