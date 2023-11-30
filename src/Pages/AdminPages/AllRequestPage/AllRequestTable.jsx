import Swal from "sweetalert2";
import useAxiosAdmin from "../../../Hooks/useAxiosAdmin";


const AllRequestTable = ({ item, idx, refetch }) => {
    const { _id, productName, date, pending, type, requesterName, requesterEmail, information, approved, } = item || {};

    //  _id, productName, date, pending, type, requesterName, requesterEmail, information, approved, productCategory, price,  whyYouNeed,
    const axiosAdmin = useAxiosAdmin()


    const handleUpdateItem = async (id) => {
        const approved = true;
        const pending = false;
        const approvalDate = new Date();

        const updatedItem = {
            approved,
            pending,
            approvalDate,
        }

        const addItemResult = await axiosAdmin.patch(`/requestItem/${id}`, updatedItem);
        if (addItemResult.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
                position: "top",
                icon: "success",
                title: `${productName} requested product Approved Successfully`,
                showConfirmButton: false,
                timer: 2500
            });
        }
    }


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
                axiosAdmin.delete(`/requestItem/${id}`)
                    .then(async (res) => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "This Product has been deleted.",
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
                {idx + 1}
            </th>
            <td>
                <h1 className="font-bold text-xs"> {productName}</h1>
            </td>
            <td>
                {type}
            </td>
            <td>
                {requesterEmail}
            </td>
            <td>
                {requesterName}
            </td>
            <td>
                {date}
            </td>
            <td>
                {information}
            </td>
            <td>
                {
                    pending == true ? <p className="text-orange-500 font-bold"> Pending </p> : <p className="text-green-500 font-bold"> Approved </p>
                }
            </td>
            <th>
                {
                    approved !== true ? <button
                        onClick={() => handleUpdateItem(_id)}
                        className="btn btn-xs text-red-500"> Approve </button> : <p className="text-green-500">
                        Approved
                    </p>
                }
            </th>
            <th>
                <button
                    onClick={() => handleDeleteItem(_id)}
                    className="btn btn-xs text-red-500"> Reject
                </button>
            </th>
        </tr>
    );
};

export default AllRequestTable;