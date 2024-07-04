function ArtRender({ title, description, background, setTitle, setDescription, setBackground }: { title: string, description: string, background: string, setTitle: (title: string) => void, setDescription: (description: string) => void, setBackground: (background: string) => void }) {
    function submissionHandler() {
        console.log("Submitting your art...")
        // console.log({ title, description, background })
        fetch('/api/artPosts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, description: description, background: background }),
        })
    }
    return (
        <>
            <div>MakeArt</div>
            <div className={`bg-${background} h-80 w-80`}></div>
            <input className='text-black' type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <input className='text-black' type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <input className='border-black border-2 h-4 w-6' type="color" value={background} onChange={(e) => setBackground(e.target.value)}></input>
            <button onClick={() => { (submissionHandler()) }}>Submit your art!</button>
        </>
    )
}
export default ArtRender