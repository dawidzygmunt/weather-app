import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get('weather')
  getWeather(@Query('lat') lat: string, @Query('lon') lon: string) {
    return this.weatherService.getWeather(lat, lon);
  }
}
