import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { LessonModule } from './lesson/lesson.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [CourseModule, LessonModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
