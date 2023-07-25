import { Button } from '@/components/ui/button'
import { CardList } from './card-list'

export function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="flex w-full flex-col bg-gradient-to-b from-white/0 to-[#F7F7F7]"
    >
      <div className="mx-auto my-20 flex w-full flex-col px-3 sm:max-w-[696px] lg:mb-[130px] lg:mt-[120px] lg:grid lg:max-w-[1240px] lg:flex-none lg:grid-cols-[696px_1fr] lg:gap-8">
        <div className="mb-10 w-full justify-center px-3 sm:px-0 lg:order-last lg:mb-0 lg:flex lg:max-w-[406px] lg:flex-col lg:gap-10">
          <div className="mx-auto w-full max-w-[494px]">
            <span className="text-md font-bold text-primary-500 lg:text-lg">
              Lorem ipsum
            </span>
            <h3 className="mb-4 mt-1 text-xl font-bold sm:text-2xl lg:text-3xl">
              Lorem ipsum
            </h3>
            <p className="text-paragraph sm:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>

          <div className="hidden w-[176px] lg:visible">
            <Button>Sign up now</Button>
          </div>
        </div>

        <CardList />
      </div>
    </section>
  )
}
