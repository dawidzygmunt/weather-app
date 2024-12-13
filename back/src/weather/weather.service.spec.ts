import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { WeatherService } from './weather.service';
import axios from 'axios';
import { PrismaService } from 'src/prisma/prisma.service';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('WeatherService', () => {
  let weatherService: WeatherService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WeatherService,
        ConfigService,
        {
          provide: PrismaService,
          useValue: {
            queries: {
              create: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    weatherService = module.get<WeatherService>(WeatherService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe('getRecommendedActivity', () => {
    it('should recommend a picnic in the park for clear weather and temperature > 25', () => {
      const result = weatherService['getRecommendedActivity']('Clear', 26);
      expect(result).toBe('A picnic in the park');
    });

    it('should recommend a walk in the fresh air for clear weather and temperature > 20', () => {
      const result = weatherService['getRecommendedActivity']('Clear', 22);
      expect(result).toBe('A walk in the fresh air');
    });

    it('should recommend exploring local attractions for cloudy weather and temperature > 15', () => {
      const result = weatherService['getRecommendedActivity']('Clouds', 18);
      expect(result).toBe('Exploring local attractions');
    });

    it('should recommend a trip to a cafe with a book for cloudy weather and temperature <= 15', () => {
      const result = weatherService['getRecommendedActivity']('Clouds', 10);
      expect(result).toBe('A trip to a cafe with a book');
    });

    it('should recommend shopping at the mall for rainy weather and temperature > 15', () => {
      const result = weatherService['getRecommendedActivity']('Rain', 16);
      expect(result).toBe('Shopping at the mall');
    });

    it('should recommend board games at home for rainy weather and temperature <= 15', () => {
      const result = weatherService['getRecommendedActivity']('Rain', 12);
      expect(result).toBe('Board games at home');
    });

    it('should recommend playing in the snow for snowy weather', () => {
      const result = weatherService['getRecommendedActivity']('Snow', -5);
      expect(result).toBe('Playing in the snow or sledding');
    });
  });

  describe('getWeather', () => {
    it('should fetch and simplify weather data', async () => {
      const mockResponse = {
        data: {
          name: 'Test City',
          main: { temp: 20 },
          weather: [{ main: 'Clear', description: 'clear sky' }],
        },
      };
      mockedAxios.get.mockResolvedValueOnce(mockResponse);

      const result = await weatherService.getWeather('10', '20');
      expect(result).toEqual({
        city: 'Test City',
        temperature: 20,
        weather: 'clear sky',
        recommendedActivity: 'A walk in the fresh air',
      });
      expect(prismaService.queries.create).toHaveBeenCalledWith({
        data: {
          city_name: 'Test City',
          temperature: 20,
          weather_condition: 'clear sky',
          recommended_activity: 'A walk in the fresh air',
        },
      });
    });

    it('should throw an error if weather API fails', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('API Error'));
      await expect(weatherService.getWeather('10', '20')).rejects.toThrow(
        'Failed to fetch weather data',
      );
    });
  });
});
