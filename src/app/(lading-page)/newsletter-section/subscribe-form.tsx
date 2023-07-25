'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SubscribeForm() {
  return (
    <form className="flex flex-col sm:justify-center">
      <div>
        <Label htmlFor="email" className="text-sm font-normal text-white">
          Email
        </Label>
        <Input id="email" placeholder="Email" />
      </div>

      <Button className="mt-[21px] text-sm shadow-md sm:text-md" type="submit">
        Subscribe
      </Button>
    </form>
  )
}
