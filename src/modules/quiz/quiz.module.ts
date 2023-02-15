import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './controllers/question.controller';
import { Question } from './entities/question.entity';
import { QuestionService } from './services/question.service';
import { QuizController } from './controllers/quiz.controller';
import { Quiz } from './entities/quiz.entity';
// import { QuizRepository } from './quiz.respository';
import { QuizService } from './services/quiz.service';
import { Option } from './entities/option.entity';
import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
  controllers: [QuizController, QuestionController, OptionController],
  providers: [QuizService, QuestionService, OptionService],
})
export class QuizModule {}
