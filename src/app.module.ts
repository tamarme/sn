import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGOURI),
        PostsModule,
        UsersModule,
        AuthModule
    ]
})
export class AppModule { }
