import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    // @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}
  /**
   * Would have used:
   * -> @InjectRepository(Quiz) private quizRepository: Repository<Quiz>
   * -> Where 'Quiz' is the Entity from quiz.entity.ts.
   *
   * Instead of the above and without it's associated QuizRepository code,
   * as a work around the Deprecated @EntityRepository decorator
   */

  getAllQuiz(): (number | string)[] {
    return [2, 1, 3, 5, 'From The Service...'];
  }

  async createQuestion(question: CreateQuestionDto, quiz: Quiz) {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return newQuestion;
  }
}
