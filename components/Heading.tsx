import React, {FC, HTMLAttributes} from "react";

type headingProps = {
    tag?: keyof JSX.IntrinsicElements
    text: string
}

const Heading: FC<headingProps> = ({tag = 'h1', text}) => {
    const Tag = tag

    return (
        <>
            <Tag>{text}</Tag>
        </>
    )
}

export default Heading