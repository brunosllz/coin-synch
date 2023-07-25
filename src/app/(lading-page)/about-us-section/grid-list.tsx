import { Card } from './card'
import { CardContentType } from './card-list'

interface GridCardListProps {
  content: CardContentType
}

export function GridList({ content }: GridCardListProps) {
  return (
    <>
      {content.map((content, index) => {
        return (
          <ul
            key={index}
            className="hidden sm:visible sm:flex sm:flex-col sm:gap-6 lg:gap-8"
          >
            <div className="flex sm:grid sm:grid-cols-[280px_1fr] sm:gap-6 lg:gap-8">
              {content.top.map((item) => {
                return <Card key={item.id} props={item} />
              })}
            </div>

            <div className="flex sm:grid sm:grid-cols-[1fr_280px] sm:place-items-end sm:gap-6 lg:gap-8">
              {content.bottom.map((item) => {
                return <Card key={item.id} props={item} />
              })}
            </div>
          </ul>
        )
      })}
    </>
  )
}
