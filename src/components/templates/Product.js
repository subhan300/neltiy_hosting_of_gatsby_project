import React from 'react'
import ReactDOM from 'react-dom'
// function Dynamic({pageContext}) {
//     console.log(pageContext,"pagecontext")
//     return (
//         <div>
//            <h1>my dynamic page</h1> 
//     <h3>{pageContext.name}  roll :{pageContext.roll}</h3>
//         </div>
//     )
// }

// export default Dynamic

//2 class work 
function Product({pageContext}) {
    console.log(pageContext,"pagecontext")
    return (
        <div>
           <h1>product page</h1> 
           <h4>{pageContext.Item_Details.title}</h4>

        </div>
    )
}

export default Product