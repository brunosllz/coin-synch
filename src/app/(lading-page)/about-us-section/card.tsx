import Image from 'next/image'

interface CardProps {
  props: {
    imageUrl: string
    label: string
    title: string
    content: string
  }
}

export function Card({ props }: CardProps) {
  return (
    <li className="flex w-full max-w-[280px] flex-col gap-4 rounded-md bg-white p-6 shadow-xl">
      <Image
        src={props.imageUrl}
        alt=""
        className="h-10 w-10 sm:h-16 sm:w-16"
      />

      <div className="flex flex-col">
        <span className="text-sm font-bold text-primary-500 sm:text-md">
          {props.label}
        </span>
        <h4 className="mb-2 mt-1 truncate text-lg font-bold sm:text-xl">
          {props.title}
        </h4>
        <p className="text-paragraph">{props.content}</p>
      </div>
    </li>
  )
}
