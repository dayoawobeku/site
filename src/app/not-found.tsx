import Image from "next/image";
import IDK from "public/derpy_idk.png"
 
export default function Error404() {
  return (
    <div className="min-h-[65vh] flex flex-col content-center">
      <div className="m-auto flex flex-row max-w-max leading-9">
        <div className="pr-4 mr-4 border-r border-r-black/50 dark:border-r-white/50">
          <Image
            alt="Derpy Hooves IDK Meme"
            src={IDK}
            width={32}
            height={32}
          />
        </div>
        <p>
          Sorry, nothing&apos;s here...
        </p>
      </div>
    </div>
  )
}