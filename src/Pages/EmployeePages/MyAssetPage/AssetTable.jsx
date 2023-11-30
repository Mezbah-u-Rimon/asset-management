import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";



const AssetTable = ({ item, idx, refetch }) => {
    const { _id, productName, image, approvalDate, date, pending, type } = item || {};

    // productCategory, price, type, whyYouNeed, information, approved, pending, requesterName, requesterEmail,
    const axiosPublic = useAxiosPublic()


    const handleDeleteItem = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/requestItem/${id}`)
                    .then(async (res) => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <tr className="text-center">
            <th>
                <label>
                    {idx + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center justify-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <h1 className="font-bold"> {productName}</h1>
            </td>
            <td>
                {date}
            </td>
            <td>
                {approvalDate}
            </td>
            <td>
                {
                    pending == true ? <p className="text-orange-500 font-bold"> Pending </p> : <p className="text-green-500 font-bold"> Approve </p>
                }
            </td>
            <th>
                {
                    pending === true ? <button onClick={() => handleDeleteItem(_id)} className="btn btn-xs text-red-500"> Cancel </button>
                        :
                        <> {type == "Returnable" ?
                            <button onClick={() => handleDeleteItem(_id)} className="btn btn-xs bg-green-400 disabled"> Return </button> : <p> Non-Returnable </p>}
                        </>
                }
            </th>
        </tr>

    );
};

export default AssetTable;