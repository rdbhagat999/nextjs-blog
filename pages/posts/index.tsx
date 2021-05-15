import { GetStaticProps, GetStaticPaths, GetServerSideProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import LayoutComponent from '@components/layout'
import PostListComponent from '@components/PostList'
import { Post } from '@constants/index'
function PostsPage({ posts }: InferGetStaticPropsType<typeof getStaticProps> ) {
    return (
        <LayoutComponent title="Posts">
            <div className="container py-5">
                <h1>Posts</h1>
                <hr className="my-3" />
                <PostListComponent posts={posts} />
            </div>
        </LayoutComponent>
    )
}

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {

    let posts: Post[] = [];

    const response = await fetch(`${process.env.API_URL}/posts`);

    const result: Post[] = await response.json();

    if (result?.length > 0) {
        posts = result;
    }

    return {
        props:{
            posts
        }
    }
}


export default PostsPage;