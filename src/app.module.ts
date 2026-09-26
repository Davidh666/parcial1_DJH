import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicosModule } from './medicos/medicos.module';
import { ConsultasModule } from './consultas/consultas.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [

    ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ,
      port: Number.parseInt(process.env.DB_PORT ?? '') ,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true, 
    }),
   
    MedicosModule,
    ConsultasModule,

    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
