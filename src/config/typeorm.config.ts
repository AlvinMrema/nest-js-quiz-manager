import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { Option } from 'src/modules/quiz/entities/option.entity';
// import { Question } from 'src/modules/quiz/entities/question.entity';
// import { Quiz } from 'src/modules/quiz/entities/quiz.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'alvin',
  password: 'password',
  database: 'quiz',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], //[Quiz, Question, Option],
  synchronize: true,
  logging: true,
};
