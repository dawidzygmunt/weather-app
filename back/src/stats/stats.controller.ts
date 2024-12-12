import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller()
export class StatsController {
  constructor(private startService: StatsService) {}

  @Get('stats')
  getStats() {
    return this.startService.getStats();
  }
}
