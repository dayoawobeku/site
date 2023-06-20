import Parser from 'html-react-parser';
import { Page, PageAbout, PageReadingList } from '../pageTemplates';
import { fetchPage } from '../api';
import { redirect } from 'next/navigation';

async function PageWrapper({ params }: {
  params: { slug: string }
}) {
  const { data: page } = await fetchPage(params.slug);

  if (page) {
    switch (page[0]?.template) {
      case 'page-about.php':
        return (<PageAbout data={page[0]} />);
      case 'page-reading-list.php':
        return (<PageReadingList data={page[0]} />);
      default:
        return (<Page data={page[0]} />);
    }
  } else {
    redirect('/404');
  }
}

export async function generateMetadata({ params }: { params: any }) {
  const { data: page } = await fetchPage(params.slug);
  if (page) {
    return {
      title: Parser(page[0]?.title?.rendered),
      description: Parser(page[0]?.description?.rendered)
    };
  } else {
    redirect('/404');
  }
}

export default PageWrapper;
