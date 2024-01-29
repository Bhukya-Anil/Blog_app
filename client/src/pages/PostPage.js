import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const [deleteError, setDeleteError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, [id]);

  if (!postInfo) return "";

  const DeleteHandler = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/post/${postInfo._id}`,
        {
          method: "DELETE",
          
        }
      );
      if (response.ok) {
        navigate("/");
      } else {
        const errorData = await response.json();
        setDeleteError(
          errorData.message || "Error deleting post/ Post doesn't exist"
        );
      }
    } catch (error) {
      setDeleteError("Internal Server Error");
    }
  };

  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by @{postInfo.author.username}</div>
      {userInfo && userInfo.id === postInfo.author._id && (
        <div className="edit-row">
          <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            Edit
          </Link>
          <Link
            className="edit-btn"
            onClick={(e) => {
              e.preventDefault();
              DeleteHandler();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Delete
          </Link>
          {deleteError && <p style={{ color: "red" }}>{deleteError}</p>}
        </div>
      )}
      <div className="summary">
        <h2>Summary</h2>
        <p>{postInfo.summary}</p>
      </div>
      <div className="image">
        <img src={`${process.env.REACT_APP_API_URL}/${postInfo.cover}`} alt="" />
      </div>
      <h2> Description</h2>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
}
