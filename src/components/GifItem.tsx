import { FC } from "react"


interface Props {
    title: string
    url: string
}

export const GifItem:FC<Props> = ({ title, url }) => {
    
    
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{ title }</p>
        </div>
    )
}
