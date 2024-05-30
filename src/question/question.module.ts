import { Module } from '@nestjs/common';
import { QuestionService } from './services/question.service';
import { QuestionController } from './controller/question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [QuestionService],
  controllers: [QuestionController],
})
export class QuestionModule {}
