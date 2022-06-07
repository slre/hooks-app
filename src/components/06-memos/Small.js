import React ,{ memo }from 'react'

export const Small = memo((  {value}  ) => {
    console.log('Value changed: ',value)
    return (
        <small>
            { value }
        </small>
    )
})
