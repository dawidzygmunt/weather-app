import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WeatherService {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {}

  async getWeather(lat: string, lon: string) {
    const apiKey = this.configService.get('WEATHER_API_KEY');
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const params = {
      appid: apiKey,
      units: 'metric',
      lat,
      lon,
    };

    try {
      const response = await axios.get(url, { params });

      const simplifiedData = {
        city: response.data.name,
        temperature: response.data.main.temp,
        weather: response.data.weather[0].description,
        recommendedActivity: this.getRecommendedActivity(
          response.data.weather[0].main,
          response.data.main.temp,
        ),
      };
      // Make call to db to save weather data
      await this.prisma.queries.create({
        data: {
          city_name: simplifiedData.city,
          temperature: simplifiedData.temperature,
          weather_condition: simplifiedData.weather,
          recommended_activity: simplifiedData.recommendedActivity,
        },
      });

      return simplifiedData;
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      throw new Error('Failed to fetch weather data');
    }
  }

  private getRecommendedActivity(weather: string, temperature: number): string {
    if (temperature > 25 && weather === 'Clear') {
      return 'A picnic in the park';
    }

    if (temperature > 20 && weather === 'Clear') {
      return 'A walk in the fresh air';
    }

    if (temperature > 15 && ['Clouds', 'Mist'].includes(weather)) {
      return 'Exploring local attractions';
    }

    if (temperature <= 15 && ['Clouds', 'Mist'].includes(weather)) {
      return 'A trip to a cafe with a book';
    }

    if (['Rain', 'Thunderstorm', 'Drizzle'].includes(weather)) {
      if (temperature > 15) {
        return 'Shopping at the mall';
      }
      return 'Board games at home';
    }

    if (weather === 'Snow') {
      return 'Playing in the snow or sledding';
    }

    return 'Enjoy an activity that suits your mood';
  }
}
