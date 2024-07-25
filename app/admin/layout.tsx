import Sidebar from "../components/Sidebar"

const layout = ({children}: {children:React.ReactNode}) => {
    return (
        <div className="row books-bg w-100 row-cols-12">
            <div className="col-2 sidebar">
                <Sidebar />
            </div>
            <div className="col-10">
                {children}
            </div>
        </div>
    )
}

export default layout