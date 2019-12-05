import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileController } from './profile/profile.controller';
import { MittController } from './mitt/mitt.controller';

@Module({
  imports: [],
  controllers: [AppController, ProfileController, MittController],
  providers: [AppService],
})
export class AppModule {}
