import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
// import { Option } from 'src/modules/quiz/entities/option.entity';
// import { Question } from 'src/modules/quiz/entities/question.entity';
// import { Quiz } from 'src/modules/quiz/entities/quiz.entity';

export default class TypeOrmConfig {
  static getOrmConfig(configServie: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: configServie.get('DB_HOST'),
      port: configServie.get('DB_PORT'),
      username: configServie.get('DB_USERNAME'),
      password: configServie.get('DB_PASSWORD'),
      database: configServie.get('DB_NAME'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'], //[Quiz, Question, Option],
      synchronize: true,
      logging: true,
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    configServie: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configServie),
  inject: [ConfigService],
};
