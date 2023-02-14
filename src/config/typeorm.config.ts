import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Question } from 'src/modules/quiz/entities/question.entity';
import { Quiz } from 'src/modules/quiz/entities/quiz.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'alvin',
  password: 'password',
  database: 'quiz',
  entities: [Quiz, Question],
  synchronize: true,
};
