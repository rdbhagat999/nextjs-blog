import Head from 'next/head'

import HeaderComponent from '@components/Header';
import FooterComponent from '@components/Footer';

function LayoutComponent({ children, title, description, url, keywords, image }: {
  children: React.ReactNode
  title?: string,
  description?: string,
  url?: string,
  keywords?: string,
  image?: string,
}) {

    return (
        <>
        
            <Head>

                <link rel="icon" href="/favicon.ico" />

                <title>{title}</title>
                
                <meta name="description" content={description} />

                <meta name="keywords" content={keywords} />

                <meta property="og:title" content={title} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={image} />
                <meta property="og:url" content={url} />


            </Head>

            <HeaderComponent />
            
            <main>{children}</main>
            
            <FooterComponent />
            
        </>
    );
}

LayoutComponent.defaultProps = {
    title: 'Next.js Blog',
    description: 'Next.js Sample Website',
    url: 'https://rdbhagat999-nextjs-blog.netlify.app',
    keywords: 'next.js, blog, posts, people, nature, todos',
    image: ''
}

export default LayoutComponent;