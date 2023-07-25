import { SubscribeForm } from './subscribe-form'

export function NewsletterSection() {
  return (
    <section className="w-full bg-newsletter-gradient">
      <div className="w-full bg-newsletter-pattern bg-cover bg-no-repeat">
        <div className="mx-auto flex w-full flex-col gap-10 px-6 py-14 sm:grid sm:max-w-[696px] sm:flex-none sm:grid-cols-2 sm:gap-8 sm:px-3 sm:py-20 lg:max-w-[1240px] lg:gap-[176px] lg:px-[104px] lg:py-[120px] xl:gap-[239px]">
          <div className=" text-white">
            <span className="text-md font-bold text-primary-200 sm:text-lg">
              Lorem ipsum{' '}
            </span>
            <h3 className="mb-2 text-xl font-bold sm:mb-4 sm:mt-1 sm:text-2xl lg:text-3xl">
              Lorem ipsum
            </h3>
            <p className="text-paragraph sm:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
          </div>

          <SubscribeForm />
        </div>
      </div>
    </section>
  )
}
