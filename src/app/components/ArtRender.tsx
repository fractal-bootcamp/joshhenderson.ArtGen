import ArtChild from "./art-child"

type ArtRenderProps = {
    title: string,
    description: string,
    background: string,
    intensity: number,
    backgroundColor: string,
    color: string
}

function ArtRender({ title, description, background, intensity, backgroundColor, color }: ArtRenderProps) {

    return (
        <>
            <title>
                {title}
            </title>
            <div>{description}</div>
            <ArtChild intensity={intensity} backgroundColor={backgroundColor} color={color} />
            <div className="h-80 w-80" style={{ backgroundColor: background }}></div>
        </>
    )
}
export default ArtRender