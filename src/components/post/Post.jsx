import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://picsum.photos/200" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
          <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            cum?
          </span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde sed sunt ullam quisquam. Quos pariatur exercitationem cum aliquid! Qui quam, nulla pariatur commodi aut itaque!</p>
      </div>
    </div>
  );
}
