import Link from 'next/link';
import { Post } from '@constants/index'
import { InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages/posts';
function PostListComponent({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className="row">
            {posts.map((post: Post) => (<div key={post?.id} className="col-sm-6 col-md-6 col-lg-4 col-xxl-3 mb-3">
                <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                    <div className="card-body">
                        <p className="card-text">{ post?.body }</p>
                        <div className="d-flex justify-content-end align-items-center">
                            <Link href={`/posts/${post?.id}`}>
                                <a role="link" className="btn btn-sm btn-outline-secondary">View</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>))}
        </div>
    );
}

PostListComponent.defaultProps = {
    posts: []
}

export default PostListComponent;