import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from './ui/button'
import { useLocationContext } from '@/hooks/location/useLocationContext'

const formSchema = z.object({
  city: z.string().min(2).max(50),
})

export const LocationSearch = () => {
  const { setCity, setLat, setLon } = useLocationContext()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: '',
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { data: city } = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${values.city},616&limit=1&appid=47e2b6002e03d7f0f95d8ee7c9a9bcbf`
    )

    setCity(city[0].name)
    setLat(city[0].lat)
    setLon(city[0].lon)
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-0 space-x-2 flex items-center"
        >
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={'Search for a location'}
                    {...field}
                    className="rounded-full min-w-80"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="outline"
            className="mt-40 "
          >
            Search
          </Button>
        </form>
      </Form>
    </>
  )
}
