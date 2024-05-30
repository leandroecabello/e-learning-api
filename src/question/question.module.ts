import { Module } from '@nestjs/common';
import { QuestionService } from './services/question.service';
import { QuestionController } from './controller/question.controller';

@Module({
  providers: [QuestionService],
  controllers: [QuestionController],
})
export class QuestionModule {}
