type ControlsProps = {
    title: string;
    description: string;
    background: string;
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    setBackground: (background: string) => void;
}

export default function Controls({ title, description, background, setTitle, setDescription, setBackground }: ControlsProps) {
    return (
        <>
            <input className='text-black' type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <input className='text-black' type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <input className='border-black border-2 h-20 w-20' type="color" value={background} onChange={(e) => setBackground(e.target.value)}></input>
        </>
    )
}