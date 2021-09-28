import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input type="text" />
//         </div>
//     )
// }

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

 // arrow function is passed as parameter to the forward ref

export default FRInput
