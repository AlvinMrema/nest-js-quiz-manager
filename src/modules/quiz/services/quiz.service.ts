import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from '../dto/create-quiz.dto';
// import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';
// import { QuizRepository } from './quiz.respository';

@Injectable()
export class QuizService {
  constructor(
    // @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
    @InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>,
  ) {}
  /**
   * Would have used:
   * -> @InjectRepository(Quiz) private quizRepository: Repository<Quiz>
   * -> Where 'Quiz' is the Entity from quiz.entity.ts.
   *
   * Instead of the above and without it's associated QuizRepository code,
   * as a work around the Deprecated @EntityRepository decorator
   */

  async getAllQuiz() {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qn')
      // .leftJoinAndSelect('qn.options', 'o')
      .getMany();
  }

  async getQuizById(id: number) {
    return await this.quizRepository.findOne({
      where: { id },
      relations: ['questions', 'questions.options'],
    });
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    return await this.quizRepository.save(quiz);
  }
}
