import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StatsService {
  constructor(private prisma: PrismaService) {}

  async getStats() {
    const totalHits = await this.prisma.queries.count();

    const top5Cities = await this.prisma.queries.groupBy({
      by: ['city_name'],
      _count: {
        city_name: true,
      },
      orderBy: {
        _count: {
          city_name: 'desc',
        },
      },
      take: 5,
    });

    const last10Hits = await this.prisma.queries.findMany({
      take: 10,
      orderBy: {
        query_date: 'desc',
      },
    });

    const stats = {
      totalHits,
      top5Cities: top5Cities.map((city) => ({
        city: city.city_name,
        count: city._count.city_name,
      })),
      last10Hits,
    };
    return stats;
  }
}
