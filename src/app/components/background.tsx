import gradientImage from "public/gradient.png";

function Background() {
    const gradient = gradientImage;

    return (
        <>
            <div className="pointer-events-none">
                <div className="absolute top-0 inset-x-0 w-full h-1 z-50" style={{background: 'linear-gradient(54.14deg, rgb(230, 69, 131) 0.21%, rgb(255, 110, 35) 18.92%, rgb(255, 252, 0) 37.63%, rgb(18, 174, 140) 61.54%, rgb(25, 172, 239) 81.81%, rgb(179, 66, 255) 100%)'}}></div>
                <div className="absolute h-full w-full top-0 inset-x-0 bg-no-repeat z-50" style={{backgroundImage: `url('${gradient?.src}')`, backgroundSize: '100% 350px', backgroundPosition: 'center -200px'}}></div>
            </div>
        </>
    )
}

export default Background