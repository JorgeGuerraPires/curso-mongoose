import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [DogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
