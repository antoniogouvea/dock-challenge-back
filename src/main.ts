import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const configService = app.get(ConfigService)
	const port = process.env.PORT
	app.useGlobalPipes(new ValidationPipe())
	app.enableCors({
		origin: '*',
	})
	await app.listen(port || 3000)
	console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
