import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { QuizService } from '../services/quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
  async getAllQuiz() {
    return await this.quizService.getAllQuiz();
  }

  @Get(':id')
  async getQuizById(@Param('id', ParseIntPipe) id: number) {
    return await this.quizService.getQuizById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    return await this.quizService.createNewQuiz(quizData);
  }
}
