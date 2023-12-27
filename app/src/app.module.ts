import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infraestructure.module';
import { ApplicationModule } from './service/application/application.module';
import { ClientsModule } from './service/clients/clients.module';

@Module({
  imports: [InfrastructureModule, ApplicationModule, ClientsModule],
})
export class AppModule {}
