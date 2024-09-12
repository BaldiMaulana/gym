import Nav from "./components/Nav"
import Content from "./components/Content"

function Page() {

    return (
        <div className="w-full">
            <Nav />
            <div>
                <Content />
            </div>
        </div>
    )
}

export default Page
