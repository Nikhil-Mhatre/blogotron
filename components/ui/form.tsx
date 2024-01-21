'use client'

import { createCompletion } from '@/app/actions'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

export default function Form() {
  async function action(formData: FormData) {
    const prompt = formData.get('name')

    // show a toast notification if input is empty
    if (!prompt) {
      toast.error('Prompt is Required.')
      return
    }

    // show a toast notification if server return empty prompt
    const { error } = await createCompletion(prompt as string)
    if (error) {
      toast.error(error)
    }
  }

  return (
    <section className='mx-auto max-w-lg'>
      <Card className='border-0 shadow-none'>
        <CardHeader className='text-center'>
          <CardTitle>Unleash the Power of AI Blogging</CardTitle>
          <CardDescription>Generate a blog post about anything</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action} className='mt-3'>
            <Input
              name='prompt'
              placeholder='What should I write about?'
              className='rounded-lg'
            />
            <Button
              size='sm'
              type='submit'
              variant='default'
              className='mt-3 w-full rounded-lg'
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
