import { Page, PageAbout, PageReadingList } from '../pageTemplates';
import { Site } from '../../../lib/info';
import { redirect } from 'next/navigation';

const site = Site;

async function getPage(slug: string) {
    const res = await fetch(`${site}/wp-json/wp/v2/pages?slug=${slug}&per_page=1&_embed`, { next: { revalidate: 10 } })
    const data = await res.json();
    return data;
}

export async function generateMetadata({ params }: { params: any }) {
    const page = await getPage( params.slug );
    if ( page[0] ) {
        return {
            title: { __html: page.shift()?.title?.rendered },
            description: { __html: page.shift()?.description?.rendered }
        };
    } else {
        redirect('/404');
    }
}

async function PageWrapper({ params }: {
        params: { slug: string }
    }) {
    const data = await getPage(params.slug);

    return (
        <>
            {data.map((page: any) => {
                switch(page.template) {
                    case 'page-about.php':
                        return (<PageAbout data={data} />);
                    case 'page-reading-list.php':
                        return (<PageReadingList data={data} />);
                    default:
                        return (<Page data={data} />);
                }
            })}
        </>
    );
}

export default PageWrapper