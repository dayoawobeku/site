"use client";

import Tilt from "react-parallax-tilt";
import WpImage from "./wpimage";

const he = require('he');

function PostThumb({title, id}: {title: string, id: number}) {    return (
        <Tilt
            className="relative parallax-effect-glare-scale md:-mt-8 h-max bg-white/25 dark:bg-black/25 rounded-lg"
            glareBorderRadius="0.5rem"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.25}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.125}
        >
            <div style={{ width: '256px', maxHeight: 'calc(100% - 4rem)' }}>
                <WpImage
                    width={512}
                    height={512}
                    id={id}
                    alt={he.decode(title)}
                    className="rounded-lg shadow-lg h-full w-[256px] object-cover"
                />
            </div>
        </Tilt>
    )
}

export default PostThumb