import { Button } from '@/components/ui/button'
import { CardList } from './card-list'

export function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="flex w-full flex-col bg-gradient-to-b from-white/0 to-[#F7F7F7]"
    >
      <div className="mx-auto mb-[130px] mt-[120px] grid w-full max-w-[1216px] grid-cols-[696px_1fr] gap-8">
        <CardList />

        <div className="flex max-w-[406px] flex-col justify-center gap-10">
          <div>
            <span className="text-lg font-bold text-primary-500">
              Lorem ipsum{' '}
            </span>
            <h3 className="mb-4 mt-1 text-3xl font-bold">Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>

          <Button>Sign up now</Button>
        </div>
      </div>
    </section>
  )
}
