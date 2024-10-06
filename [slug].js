import { useRouter } from 'next/router';

export default function CustomBioPage() {
    const router = useRouter();
    const { slug } = router.query;

    // You can fetch user data from a database here based on the slug
    return (
        <div>
            <h1>Welcome to {slug}'s Bio Page!</h1>
            <p>This is where the bio information will appear.</p>
        </div>
    );
}
