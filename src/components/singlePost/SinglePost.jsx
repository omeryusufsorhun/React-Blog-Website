import "./singlepost.css";
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://picsum.photos/200" alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga alias
          dicta veniam voluptates at eveniet?
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:<b>Ömer</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id accusamus
          optio vero dolore? Mollitia, fugit. Quaerat illo facilis pariatur
          adipisci.
        </p>
      </div>
    </div>
  );
}
