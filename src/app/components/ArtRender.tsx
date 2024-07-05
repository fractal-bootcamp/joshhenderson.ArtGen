function ArtRender({ title, description, background }: { title: string, description: string, background: string }) {

    return (
        <>
            <title>
                {title}
            </title>
            <div>{description}</div>
            <div className="h-80 w-80" style={{ backgroundColor: background }}></div>
        </>
    )
}
export default ArtRender