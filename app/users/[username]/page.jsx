const SingleProfile=async(props)=>{
    const user=await props.params;

    console.log(user);
    return(
        <h1>Dynamic User: {user.username}</h1>

    )
}
export default SingleProfile;