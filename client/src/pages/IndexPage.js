import Post from "../Post";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  const { userInfo } = useContext(UserContext);
  let id = 1;
  return (
    <>
      {userInfo?.username &&
        posts.length > 0 &&
        posts.map((post) => <Post key={id++} {...post} />)}
    </>
  );
}
