import { GetStaticProps, GetStaticPaths, GetServerSideProps, GetStaticPropsContext, GetStaticPathsContext, InferGetStaticPropsType } from 'next'
import LayoutComponent from '@components/layout'
import PostDetailComponent from '@components/PostDetail'
import { Post } from '@constants/index';

function PostByIdPage({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <LayoutComponent title="Post Title">
            <div className="container py-5">
                <h1>Post: {post?.title}</h1>
                <hr className="my-3" />
                <PostDetailComponent post={post} />
            </div>            
        </LayoutComponent>
    );
}
export const getStaticPaths: GetStaticPaths = async (ctx: GetStaticPropsContext) => {

    let posts: Post[] = [];

    const response = await fetch(`${process.env.API_URL}/posts`);

    const result: Post[] = await response.json();

    if (result?.length > 0) {
        posts = result;
    }

    const paths = posts.map((post: Post) => {
        return {
            params: {
                id: `${post.id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {

    let post: Post = {
        userId: 0,
        id: 0,
        title: '',
        body: '',
    };

    const id = ctx.params?.id;

    if (id) {
        const response = await fetch(`${process.env.API_URL}/posts/${id}`);
        const result: Post = await response.json();
        post = result;
    }

    return {
        props:{
            post
        }
    }
}

export default PostByIdPage;