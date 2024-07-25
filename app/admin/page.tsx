import { Metadata } from "next"
import AdminHeader from "../components/AdminHeader"
import InfoTray from "../components/InfoTray"

const metadata: Metadata = {
    title: 'Admin Dashboard'
}

const page = () => {
    return (
        <div className="d-flex flex-column glass">
            <div className="d-flex flex-column">
                <AdminHeader />
                <InfoTray />
            </div>
        </div>
    )
}

export {page as default, metadata}; 