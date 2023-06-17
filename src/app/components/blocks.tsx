import parse from 'html-react-parser';
import WpImage from './wpimage';
import RoughSeparator from './separator';

function Blocks({data}: any) {
    return (
        <>
            {   data &&
                data.map((block: any) => {
                    if ( block.blockName === 'core/image' ) {
                        let blockClass;
                        switch (block.attrs.align) {
                            case 'left':
                                blockClass = 'float-left my-4 mr-3';
                                break;
                            case 'center':
                                blockClass = 'float-none my-4';
                                break;
                            case 'right':
                                blockClass = 'float-right my-4 ml-3';
                                break;
                            default:
                                blockClass = 'float-none my-4';
                        }
                        let blockCaption;
                        if ( block.attrs.align === 'left' ) {
                            blockCaption = block.caption ? parse(`<figcaption className="mt-2">${block.caption}</figcaption>`) : '';
                        } else if ( block.attrs.align === 'right' ) {
                            blockCaption = block.caption ? parse(`<figcaption className="mt-2 text-right">${block.caption}</figcaption>`) : '';
                        } else {
                            blockCaption = block.caption ? parse(`<figcaption className="mt-2 text-center">${block.caption}</figcaption>`) : '';
                        }
                        return (
                            <>
                                <figure className={blockClass} key={block.attrs.uuid}>
                                    <WpImage
                                        id={block.attrs.id}
                                        alt={block.title}
                                        width={block.attrs.width ? block.attrs.width : 762}
                                        height={block.attrs.height ? block.attrs.height : 0}
                                        className="rounded-lg"
                                    />
                                    {blockCaption}
                                </figure>
                            </>
                        )
                    } else if ( block.blockName === 'core/quote' ) {
                        const contentEnd = parse(block.innerContent.pop());
                        return(
                            <blockquote className="relative !border-l-amber-500" key={block.attrs.uuid}> 
                                {
                                    block.innerBlocks.map((innerBlock: any) => {
                                        return parse(innerBlock.innerHTML)
                                    })
                                }
                                {contentEnd}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute scale-125 top-[10px] left-[-10px] fill-black dark:fill-white bg-white dark:bg-black" width="1em" height="1em"><path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" /></svg>
                            </blockquote>
                        )
                    } else if ( block.blockName === 'core/separator' ) {
                        return (
                            <RoughSeparator className="w-1/4 h-px my-16 mx-auto border-none" key={block.uuid} />
                        )
                    } else {
                        return parse(block.innerHTML)
                    }
                })
            }
        </>
    )
}

export default Blocks