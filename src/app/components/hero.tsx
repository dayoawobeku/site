import SkullLight from "public/skull_light.png";
import SkullDark from "public/skull_dark.png";
import { RoughNotation } from 'react-rough-notation';
import BlurImage from "./blurimage";
import { Site } from "../../../libs/info";

const site = Site;

async function Hero() {
    const res = await fetch(`${site}/wp-json/options/all`, { next: { revalidate: 10 } })
    const data = await res.json();
    const skullLight = SkullLight;
    const skullDark = SkullDark;

    return (
        <>
            <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
                <div className="xl:w-4/12">
                    <BlurImage
                        alt="Skull Mascot"
                        src={skullLight}
                        width={1920}
                        height={1920}
                        allClass="transition-reveal duration-[3s] ease-in-skull absolute xl:relative inset-0 my-0 xl:my-0 xl:w-[300px] xl:h-[300px] xl:scale-[3] -translate-y-16 xl:translate-y-16 xl:-translate-x-16 -z-50 xl:z-10 dark:hidden"
                        loadClass="opacity-25 blur"
                        doneClass="opacity-100 blur-none"
                    />
                    <BlurImage
                        alt="Skull Mascot"
                        src={skullDark}
                        width={1920}
                        height={1920}
                        allClass="transition-reveal duration-[3s] ease-in-skull absolute xl:relative inset-0 my-0 xl:my-0 xl:w-[300px] xl:h-[300px] xl:scale-[3] -translate-y-16 xl:translate-y-16 xl:-translate-x-16 -z-50 xl:z-10 hidden dark:block"
                        loadClass="opacity-25 blur"
                        doneClass="opacity-100 blur-none"
                    />
                </div>
                <div className="relative pt-6 z-20">
                    <h1 className="headline pb-6 text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Howdy, I&apos;m <span className="text-primary-400">David</span>
                    </h1>
                    <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
                        This is my personal blog where I discuss&nbsp;
                        <RoughNotation
                            animate={true}
                            type="underline"
                            show={true}
                            color="#45de6d"
                            animationDelay={0}
                            animationDuration={1500}
                            multiline={true}
                        >
                           <span className="text-black dark:text-slate-200">whatever may interest me,</span>
                        </RoughNotation>&nbsp;whether that be&nbsp;
                        <RoughNotation
                            animate={true}
                            type="circle"
                            show={true}
                            color="#d701a5"
                            animationDelay={1000}
                            animationDuration={1500}
                        >
                            <span className="text-black dark:text-slate-200">reading,</span>
                        </RoughNotation>&nbsp;
                        <RoughNotation
                            animate={true}
                            type="circle"
                            show={true}
                            color="#8dff00"
                            animationDelay={2500}
                            animationDuration={1500}
                        >
                            <span className="text-black dark:text-slate-200">coding,</span>
                        </RoughNotation>&nbsp;
                        <RoughNotation
                            animate={true}
                            type="circle"
                            show={true}
                            color="#ff4501"
                            animationDelay={4000}
                            animationDuration={1500}
                        >
                            <span className="text-black dark:text-slate-200">movies,</span>
                        </RoughNotation>&nbsp;or&nbsp;
                        <RoughNotation
                            animate={true}
                            type="circle"
                            show={true}
                            color="#0bf7f4"
                            animationDelay={5500}
                            animationDuration={1500}
                        >
                            <span className="text-black dark:text-slate-200">music.</span>
                        </RoughNotation>
                    </h2>
                    <div className="prose pt-5 text-xl text-gray-600 dark:text-gray-300">
                        I&apos;m an aspiring writer & blogger currently residing in the beautiful Hill Country outside&nbsp;<RoughNotation
                            animate={true}
                            type="highlight"
                            show={true}
                            color="#ff1dd0"
                            animationDelay={7000}
                            animationDuration={1500}
                            multiline={true}
                        >
                            <span className="text-black dark:text-slate-200">Austin, Texas.</span>
                        </RoughNotation>
                        <br/>
                        I am currently applying to the local community college where I may hone my skills in creative writing and art.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero