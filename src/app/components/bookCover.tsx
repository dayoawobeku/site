"use client";

import Tilt from "react-parallax-tilt";
import Image from "next/image";

function BookCover({book}: {book: any}) {
    return (
        <Tilt
            className="relative parallax-effect-glare-scale md:-mt-8 h-max aspect-book"
            glareBorderRadius="0.5rem"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.25}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.125}
        >
            <div style={{ width: '128px' }}>
                <Image
                    width={256}
                    height={0}
                    src={book.cover}
                    alt={book.title}
                    className="rounded-lg shadow-lg h-full w-[128px] aspect-book object-fill"
                />
            </div>
        </Tilt>
    )
}

export default BookCover