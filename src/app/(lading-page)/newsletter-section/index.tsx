import { SubscribeForm } from './subscribe-form'

export function NewsletterSection() {
  return (
    <section className="w-full bg-newsletter-gradient">
      <div className="w-full bg-newsletter-pattern bg-cover bg-no-repeat">
        <div className="mx-auto grid w-full max-w-[1216px] grid-cols-2 gap-[239px] px-[104px] py-[120px]">
          <div className=" text-white">
            <span className="text-lg font-bold">Lorem ipsum </span>
            <h3 className="mb-4 mt-1 text-3xl font-bold">Lorem ipsum</h3>
            <p>
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
