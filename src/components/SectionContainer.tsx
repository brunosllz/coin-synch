import { ReactNode } from 'react'

export function SectionContainer({ children }: { children: ReactNode }) {
  return (
    <section className="flex w-full flex-col">
      <div className="mx-auto flex w-full max-w-[1216px] flex-col">
        {children}
      </div>
    </section>
  )
}
