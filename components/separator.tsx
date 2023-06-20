import { RoughNotation } from "react-rough-notation"

export default function RoughSeparator({className}: any) {
    return (
        <RoughNotation
            animate={true}
            type="underline"
            show={true}
            color="#828282"
            animationDelay={0}
            animationDuration={500}
            multiline={false}
        >
            <hr className={className} />
        </RoughNotation>
    )
}