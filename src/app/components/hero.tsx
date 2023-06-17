"use client";

import SkullLight from "public/skull_light.png";
import SkullDark from "public/skull_dark.png";
import { RoughNotation } from 'react-rough-notation';
import Typewriter from 'typewriter-effect';
import BlurImage from "./blurimage";
import { Site } from "../../../lib/info";

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
                        allClass="transition-reveal duration-[3s] ease-in-skull absolute xl:relative inset-0 my-0 xl:my-0 xl:w-[300px] xl:h-[300px] xl:scale-[3] -translate-y-16 xl:translate-y-16 xl:translate-x-16 -z-50 xl:z-10 dark:hidden"
                        loadClass="opacity-25 blur"
                        doneClass="opacity-100 blur-none"
                    />
                    <BlurImage
                        alt="Skull Mascot"
                        src={skullDark}
                        width={1920}
                        height={1920}
                        allClass="transition-reveal duration-[3s] ease-in-skull absolute xl:relative inset-0 my-0 xl:my-0 xl:w-[300px] xl:h-[300px] xl:scale-[3] -translate-y-16 xl:translate-y-16 xl:translate-x-16 -z-50 xl:z-10 hidden dark:block"
                        loadClass="opacity-25 blur"
                        doneClass="opacity-100 blur-none"
                    />
                </div>
                <div className="relative pt-6 -order-1 z-20">
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
                            animationDuration={500}
                            multiline={true}
                        >
                           whatever may interest me,
                        </RoughNotation>&nbsp;whether that be&nbsp;
                        <RoughNotation
                            animate={true}
                            type="underline"
                            show={true}
                            color="#45de6d"
                            animationDelay={500}
                            animationDuration={500}
                            multiline={true}
                        >
                            reading, television, movies, or music.
                        </RoughNotation>
                    </h2>
                    <div className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
                        I&apos;m an aspiring writer & blogger currently residing in the beautiful Hill Country outside&nbsp;<RoughNotation
                            animate={true}
                            type="highlight"
                            show={true}
                            color="#ff4d00"
                            animationDelay={1000}
                            animationDuration={500}
                            multiline={true}
                        >
                            Austin, Texas.
                        </RoughNotation>
                    </div>
                    <div className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
                        I am currently applying to the local community college where I may hone my skills in creative writing and art.
                    </div>
                    <div className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
                        I dream of one day traveling in a&nbsp;<RoughNotation
                            animate={true}
                            type="crossed-off"
                            show={true}
                            color="#810000"
                            strokeWidth={2}
                            animationDelay={1500}
                            animationDuration={500}
                            multiline={true}
                        >
                            Vanagon Westfalia!
                        </RoughNotation>&nbsp;<Typewriter
                            onInit={(typewriter) => {
                                typewriter.pauseFor(2000)
                                .typeString('big semi truck.')
                                .start().callFunction(state => {
                                    state.elements.cursor.remove();
                                    typewriter.stop();
                                });
                            }}
                            options={{
                                cursor: "▌"
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero