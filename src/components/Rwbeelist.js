import React from 'react'
import CollectionCard from './CollectionCard'
import './Rwbeelist.css'

const Rwbeelist = ({rwbeeListData, setSelectedRwbee}) => {
    return (
        <div className='rwbeeList'>
            {rwbeeListData.map(rwbee =>(
                <div onClick={() => setSelectedRwbee (rwbee.token_id)}>
                    <CollectionCard
                    key={rwbee.token_id}
                    id={rwbee.token_id}
                    name={rwbee.name}
                    traits={rwbee.traits}
                    image={rwbee.image_url}
                    />
                </div>
            ))}
        </div>
    )
}

export default Rwbeelist
