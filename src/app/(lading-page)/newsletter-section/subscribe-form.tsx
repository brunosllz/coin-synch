'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SubscribeForm() {
  return (
    <form className="flex flex-col">
      <div>
        <Label htmlFor="email" />
        <Input id="email" placeholder="Email" />
      </div>

      <Button className="mt-[13px]" type="submit">
        Sign up now
      </Button>
    </form>
  )
}
