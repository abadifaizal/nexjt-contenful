import Image from 'next/image'
import PostDate from '@/components/post-date'

export default function PostItem({ ...props }) {
  return (
    <article className="pt-12 first-of-type:pt-0 group">
      <div className="md:flex">
        <div className="w-48 shrink-0">
          <time className="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-500 before:ring-4 before:ring-purple-500/30 mb-3">
            <span className="ml-[1.625rem] md:ml-5"><PostDate dateString={props.publishedAt} /></span>
          </time>
        </div>
        <div className="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1] group-last-of-type:border-none">
          <header>
            <h2 className="pb-6 text-2xl font-bold leading-8 text-transparent bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">{props.title}</h2>
          </header>
          <figure className="p-px mb-8 bg-gradient-to-b from-slate-300/20 to-transparent rounded-3xl">
            <Image className="w-full rounded-[inherit]" src={props.image} width={574} height={326} alt={props.title} />
          </figure>
        </div>
      </div>
    </article>
  )
}
