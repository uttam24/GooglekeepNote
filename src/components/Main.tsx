import React, { FC, useState } from 'react'
import CreateNote from './CreateNote'

interface iPROPS {
    title: string,
    content: string,
}

const Main: FC = () => {
    const [addItem, setAddItem] = React.useState<iPROPS[]>([])
    const addNote = (note: any): void => {
        setAddItem([...addItem, note])
    }

    const deleteitem = (index: number) => {
        setAddItem((prevState) => prevState.filter((currentData, indx) => {
            return index !== indx
        }))
    }

    return (
        <div className='main'>
            <div className='container'>
                <CreateNote passNote={addNote} />
                <div className='todoContainer'>
                    {addItem.map((val, index) => {
                        return (
                            <>
                                <div className='todoList' key={index}>
                                    <p>{val.title}</p>
                                    <p>{val.content}</p>
                                    <button className='btnclose' onClick={() => deleteitem(index)}>x</button>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>

        </div >
    )
}

export default Main