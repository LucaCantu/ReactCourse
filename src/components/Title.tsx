interface TitleProps {
    mainTitle: string,
    subTitle?: string,
}

export const Title = (props:TitleProps) => {
    return (
        <>
            <h1>
                Title: {props.mainTitle}
            </h1>
            <h3>
                {props.subTitle}
            </h3>
        </>
    )
}