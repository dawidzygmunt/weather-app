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

  private getRecommendedActivity(weather: string): string {
    const activities: Record<string, string> = {
      Clear: 'A walk in the fresh air',
      Clouds: 'A trip to a cafe with a book',
      Rain: 'Going to the cinema',
      Snow: 'Playing in the snow or sledding',
      Thunderstorm: 'Staying at home with a favorite movie',
      Drizzle: 'Shopping at the mall',
      Mist: 'Relaxing at home with a hot tea',
    };
    return activities[weather] || 'Suggest your favorite activity';
  }
}
