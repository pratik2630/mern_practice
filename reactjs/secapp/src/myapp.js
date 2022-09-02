function Mern(myvar){
    return (
    // <>
    // <h1 className="myc">Hello</h1>;
    <div className="mypost">
        <p>My first Post</p>
        <p>Name: {myvar.name}</p>
        <p>My email address is {myvar.email} </p>
        <p>My page likes are: { myvar.like }</p>
    </div>
    )
    // </>
   }

// function MyPost(){
//     return <div>Im division tag</div>
// }
   export {Mern}