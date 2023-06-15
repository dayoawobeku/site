import { Page, PageAbout } from '../pageTemplates';
import { Site } from '../../../libs/info';

const site = Site;

async function getPage(slug: string) {
    const res = await fetch(`${site}/wp-json/wp/v2/pages?slug=${slug}&per_page=1&_embed`, { next: { revalidate: 10 } })
    const data = await res.json();
    return data;
}

async function generateMetadata({ params, searchParams }: { params: any, searchParams: any }) {
    const page = await getPage( params.slug );
    return {
        title: `${page[0].title.rendered} | David M. Coleman`
    };
}

async function PageWrapper({ params }: {
        params: { slug: string }
    }) {
    const data = await getPage(params.slug);

    return (
        <>
            {data.map((post: any) => {
                switch(post.template) {
                    case 'page-about.php':
                        return (<PageAbout data={data} />);
                    default:
                        return (<Page data={data} />);
                }
            })}
        </>
    );
}

export default PageWrapper