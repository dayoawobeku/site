import Parser from 'html-react-parser';
import { Page, PageAbout, PageReadingList } from '../pageTemplates';
import { getPage } from '../api';
import { redirect } from 'next/navigation';

async function PageWrapper({ params }: {
  params: { slug: string }
}) {
  const data = await getPage(params.slug);

  if (data[0]) {
    switch (data[0].template) {
      case 'page-about.php':
        return (<PageAbout data={data} />);
      case 'page-reading-list.php':
        return (<PageReadingList data={data} />);
      default:
        return (<Page data={data} />);
    }
  } else {
    redirect('/404');
    return null;
  }
}

export async function generateMetadata({ params }: { params: any }) {
  const page = await getPage(params.slug);
  if (page[0]) {
    return {
      title: Parser(page[0]?.title?.rendered),
      description: Parser(page[0]?.description?.rendered)
    };
  } else {
    redirect('/404');
    return null;
  }
}

export default PageWrapper;
