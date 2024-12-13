export interface Weather {
  city: string
  temperature: number
  weather: string
  recommendedActivity: string
}

export interface CityStats {
  totalHits: number
  top5Cities: TopCity[]
  last10Hits: LastHit[]
}

// Typy dla top 5 miast
interface TopCity {
  city: string
  count: number
}

// Typy dla ostatnich 10 zapytań
interface LastHit {
  id: number
  city_name: string
  query_date: string // ISO date string
  temperature: number
  weather_condition: string
  recommended_activity: string
}
