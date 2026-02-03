const SingleProfilePost = async (props) => {
    const user=await props.params;

    console.log(user);
    return (
        <>
        <h1>Dynamic Post: User: {user.username} ,Postid:{user.postId} </h1>



        </>
    )

}
export default SingleProfilePost;