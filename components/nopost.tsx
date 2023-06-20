import { redirect } from "next/navigation";

export default function NoPost() {
    redirect("/404");

    return (
        <>
            <div>
                <p>
                    Sorry, there&apos;s nothing here
                </p>
            </div>
        </>
    );
}