import { IoPerson } from "react-icons/io5"

const InfoCard = () => {
    return (
        <div className="d-flex flex-row justify-content-between p-1 border border-3 rounded-3" style={{width: '200px'}}>
            <div className="d-flex flex-column justify-content-between">
                <h2>1223</h2>
                <p>Total Visitors</p>
            </div>
            <div className="">
                <div className="rounded-circle bg-secondary p-2">
                    <IoPerson className="fs-4" />
                </div>
            </div>
        </div>
    )
}

export default InfoCard