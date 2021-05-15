import Link from 'next/link'
import { useRouter } from 'next/router';

function HeaderComponent() {

    const router = useRouter();

    return (
        <div className="container-fluid bg-dark">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link href="/">
                            <a className={router.pathname == '/' ? 'nav-link text-white active' : 'nav-link text-white' } aria-current="page">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/posts">
                            <a className={router.pathname == '/posts' ? 'nav-link text-white active' : 'nav-link text-white' }aria-current="page">Posts</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/feedback">
                            <a className={router.pathname == '/feedback' ? 'nav-link text-white active' : 'nav-link text-white' }aria-current="page">Feedback</a>
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default HeaderComponent;