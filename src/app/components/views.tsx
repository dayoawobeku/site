import { Site } from "../../../libs/info";
const site = Site;

async function Views({id}: {id: number}) {
    const res = await fetch(`${site}/wp-json/davidmc/v1/countview/${id}`, { next: { revalidate: 10 } })
    const data = await res.json();

    const postViews = data.views ? data.views.toLocaleString() : '0';
    const postViewsSuffix = data.views === 1 ? ' view' : ' views';

    return (
        <>
            {postViews}{postViewsSuffix}
        </>
    );
}

export default Views