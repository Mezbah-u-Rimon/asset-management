import { Circles } from "react-loader-spinner";
import useAssetList from "../../../Hooks/useAssetList";
import { Input } from "@material-tailwind/react";
import { useState } from "react";


const AssetPage = () => {
    const [search, setSearch] = useState("");
    const [quantity, setQuantity] = useState("");
    const [filter, setFilter] = useState("");
    const [min, max] = quantity.split('-').map(Number);

    const url = `/addItems?search=${search}&min=${min}&max=${max}&filter=${filter}`;

    const [allItems, isPending, refetch] = useAssetList(url)
    refetch()

    return (
        <div className="mt-20">
            <h1 className="text-center text-indigo-600 font-bold text-4xl mb-10"> All Asset List </h1>

            <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-around gap-5">
                {/* search section  */}
                <div className="flex w-72 flex-col items-end gap-6">
                    <Input onChange={(e) => setSearch(e.target.value)} value={search}
                        size="lg" label="Search The Item Name" type="search" className="shadow-lg border-2" />
                </div>
                {/* sort quantity */}
                <div className="relative w-[250px] ">
                    <select onChange={(e) => setQuantity(e.target.value)} defaultValue='default' className="py-3 border-2 w-full px-3 rounded-lg">
                        <option disabled value='default'>Sort a Product Quantity </option>
                        <option value="1 - 20" > 1 to 20 </option>
                        <option value="20 - 40"> 20 to 40
                        </option>
                        <option value="40 - 60">40 to 60
                        </option>
                        <option value="60 - 80"> 60 to 80
                        </option>
                        <option value="80 - 100">80 to 100
                        </option>
                        <option value="100"> 100 +
                        </option>
                    </select>
                </div>
                {/* filter quantity */}
                <div className="relative w-[250px] ">
                    <select onChange={(e) => setFilter(e.target.value)} defaultValue='default' className="py-3 border-2 w-full px-3 rounded-lg">
                        <option disabled value='default'>Filter Product Type  </option>
                        <option value="Returnable" > Returnable </option>
                        <option value="Non-Returnable"> Non-Returnable
                        </option>

                    </select>
                </div>
            </div>

            {
                isPending && <div className="flex justify-center items-center w-full h-[300px] bg-white">
                    <Circles
                        height="80"
                        width="80"
                        color="indigo"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    /> </div>
            }

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 mb-20">
                {/* {
                    allItems?.map(item => <AssetItem key={item._id} item={item} refetch={refetch}>
                    </AssetItem>)
                } */}
            </div>
        </div>
    );
};

export default AssetPage;