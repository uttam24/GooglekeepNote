import React, { FC, useState } from 'react'

interface todo {
    title: string,
    content: string,

}

interface IPROPS {
    passNote: (message: any) => void;
}

const CreateNote: FC<IPROPS> = ({ passNote }) => {
    const [data, setData] = useState<todo>({
        title: '',
        content: '',

    })


    const hadnleInput = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setData((prevData) => {
            return {
                ...prevData, [name]: value
            }

        })

    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        passNote(data)
    }

    return (
        <div className='notes'>
            <input type='text' name="title" value={data.title} onChange={hadnleInput} placeholder="Title" autoComplete='off' />
            <textarea rows={8} name="content" value={data.content} onChange={hadnleInput} placeholder='Content' ></textarea>
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default CreateNote