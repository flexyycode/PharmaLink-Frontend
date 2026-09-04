import { Plus, Trash2, Edit, Search } from "lucide-react"; 
import Modal from "../Modal";
import { useEffect, useState } from "react"; 
import api from "../../api/client";

interface InventoryItem {
    id: string;
    drugName: string;
    genericName: string;
    category: string;
    quantity: number;
    batchNumber: string;
    expiryDate: string;
    price: number;
    stockStatus: "IN_STOCK" | "LOW_STOCK" | "OUT_OF_STOCK";
}

function MyInventory() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null); // null = create mode, id = edit mode

    const [inventory, setInventory] = useState<InventoryItem[]>([]);

    const [formdata, setFormData] = useState({
        drugName: "",
        genericName: "",
        category: "",
        quantity: "",
        expiryDate: "",
        batchNumber: "",
        price: "",
    });

    const resetForm = () => {
        setFormData({
            drugName: "",
            genericName: "",
            category: "",
            quantity: "",
            expiryDate: "",
            batchNumber: "",
            price: "",
        });
        setEditingId(null);
    };

    const fetchInventory = async () => {
        try {
            const res = await api.get("/inventory");
            setInventory(res.data);
        } catch (err) {
            console.error("Failed to fetch inventory:", err);
        }
    };

    useEffect(() => {
        fetchInventory();
    }, []);

    const handleCreateInventory = async () => {
        setIsSubmitting(true);
        const inventoryData = {
            drugName: formdata.drugName,
            genericName: formdata.genericName,
            category: formdata.category,
            quantity: Number(formdata.quantity),
            expiryDate: formdata.expiryDate,
            batchNumber: formdata.batchNumber,
            price: Number(formdata.price),
        };
        try {
            if (editingId) {
                await api.patch(`/inventory/${editingId}`, inventoryData);
            } else {
                await api.post("/inventory", inventoryData);
            }
            await fetchInventory();
            setIsCreateOpen(false);
            resetForm();
        } catch (err) {
            console.error("Failed to save inventory item:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleEdit = (item: InventoryItem) => {
        setFormData({
            drugName: item.drugName,
            genericName: item.genericName,
            category: item.category,
            quantity: String(item.quantity),
            expiryDate: item.expiryDate.split("T")[0], // ISO string -> "YYYY-MM-DD" for the date input
            batchNumber: item.batchNumber,
            price: String(item.price),
        });
        setEditingId(item.id);
        setIsCreateOpen(true);
    };

    const handleDelete = async (id: string) => {
        try {
            await api.delete(`/inventory/${id}`);
            await fetchInventory();
        } catch (err) {
            console.error("Failed to delete inventory item:", err);
        }
    };

    const filteredInventory = inventory.filter(
        (item) =>
            item.drugName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.genericName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const statusStyles: Record<InventoryItem["stockStatus"], string> = {
        IN_STOCK: "bg-green-600 text-white",
        LOW_STOCK: "bg-yellow-600 text-white",
        OUT_OF_STOCK: "bg-red-600 text-white",
    };

    const statusLabels: Record<InventoryItem["stockStatus"], string> = {
        IN_STOCK: "In Stock",
        LOW_STOCK: "Low Stock",
        OUT_OF_STOCK: "Out of Stock",
    };

    return (
        <div className="p-5">
            <div className="flex justify-between">
                <div>
                    <h1 className="font-bold text-3xl">Inventory Management</h1>
                    <p className="text-sm text-gray-500 pt-3">Manage your pharmacy's current drug inventory</p>
                </div>
                <div>
                    <div className="bg-gray-900 rounded-2xl p-3">
                        <button
                            className="flex items-center text-white text-center gap-3 cursor-pointer"
                            onClick={() => {
                                resetForm();
                                setIsCreateOpen(true);
                            }}
                        >
                            <Plus /> Add Drug
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                title={editingId ? "Edit Drug" : "Add Drug to Inventory"}
                description={
                    editingId
                        ? "Update this drug's inventory details"
                        : "Add a new drug to your pharmacy's inventory"
                }
                isOpen={isCreateOpen}
                onClose={() => {
                    setIsCreateOpen(false);
                    resetForm();
                }}
            >
                <div>
                    <div className="space-y-4">
                        <div className="flex flex-col pb-5">
                            <label
                                htmlFor="drugName"
                                className="flex items-center gap-2 text-sm leading-none font-medium select-none"
                            >
                                Drug Name *
                            </label>
                            <input
                                className="bg-gray-100 px-3 py-3 rounded-2xl"
                                id="drugName"
                                value={formdata.drugName}
                                onChange={(e) => setFormData({ ...formdata, drugName: e.target.value })}
                                placeholder="Enter Drug Name"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col pb-5">
                            <label
                                htmlFor="genericName"
                                className="flex items-center gap-2 text-sm leading-none font-medium select-none"
                            >
                                Generic Name *
                            </label>
                            <input
                                className="bg-gray-100 px-3 py-3 rounded-2xl"
                                id="genericName"
                                value={formdata.genericName}
                                onChange={(e) => setFormData({ ...formdata, genericName: e.target.value })}
                                placeholder="Enter Generic Name"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col pb-5">
                            <label
                                htmlFor="category"
                                className="flex items-center gap-2 text-sm leading-none font-medium select-none"
                            >
                                Category *
                            </label>
                            <input
                                className="bg-gray-100 px-3 py-3 rounded-2xl"
                                id="category"
                                value={formdata.category}
                                onChange={(e) => setFormData({ ...formdata, category: e.target.value })}
                                placeholder="Enter Drug Category"
                            />
                        </div>
                    </div>
                    <div className="flex gap-5 space-y-4">
                        <div className="space-y-2">
                            <div className="flex flex-col pb-5">
                                <label
                                    htmlFor="quantity"
                                    className="flex items-center gap-2 text-sm leading-none font-medium select-none"
                                >
                                    Quantity *
                                </label>
                                <input
                                    className="bg-gray-100 px-3 py-3 rounded-2xl"
                                    id="quantity"
                                    type="number"
                                    value={formdata.quantity}
                                    onChange={(e) => setFormData({ ...formdata, quantity: e.target.value })}
                                    placeholder="Enter Quantity"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex flex-col pb-5">
                                <label
                                    htmlFor="expiryDate"
                                    className="flex items-center gap-2 text-sm leading-none font-medium select-none"
                                >
                                    Expiry Date *
                                </label>
                                <input
                                    className="bg-gray-100 px-3 py-3 rounded-2xl"
                                    id="expiryDate"
                                    type="date"
                                    value={formdata.expiryDate}
                                    onChange={(e) => setFormData({ ...formdata, expiryDate: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 space-y-4">
                        <div className="space-y-4">
                            <div className="flex flex-col pb-5">
                                <label
                                    htmlFor="batchNumber"
                                    className="flex items-center gap-2 text-sm leading-none font-medium select-none"
                                >
                                    Batch Number *
                                </label>
                                <input
                                    className="bg-gray-100 px-3 py-3 rounded-2xl"
                                    id="batchNumber"
                                    value={formdata.batchNumber}
                                    onChange={(e) => setFormData({ ...formdata, batchNumber: e.target.value })}
                                    placeholder="Batch Number"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-col pb-5">
                                <label
                                    htmlFor="price"
                                    className="flex items-center gap-2 text-sm leading-none font-medium select-none"
                                >
                                    Price *
                                </label>
                                <input
                                    className="bg-gray-100 px-3 py-3 rounded-2xl"
                                    id="price"
                                    type="number"
                                    value={formdata.price}
                                    onChange={(e) => setFormData({ ...formdata, price: e.target.value })}
                                    placeholder="Price"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            className="bg-none border border-gray-300 p-3 rounded-2xl font-bold cursor-pointer"
                            onClick={() => {
                                setIsCreateOpen(false);
                                resetForm();
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-gray-900 rounded-2xl p-3 text-white cursor-pointer"
                            onClick={handleCreateInventory}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Adding..." : editingId ?  "Save Changes" : "Add Drug"}
                        </button>
                    </div>
                </div>
            </Modal>

            <div className="py-7">
                <div className="border border-gray-300 rounded-2xl">
                    <div className="p-3 flex justify-between">
                        <div>
                            <h1 className="font-bold text">My Inventory</h1>
                            <p className="text-sm text-gray-500">Your pharmacy's current drug inventory</p>
                        </div>
                        <div className="flex items-center bg-gray-300 rounded-lg gap-3 p-2">
                            <Search className="text-gray-400" />
                            <input
                                type="text"
                                className="text-gray-400 bg-transparent outline-none"
                                placeholder="search inventory"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="pt-10">
                        <table className="w-full">
                            <thead className="text-left">
                                <tr className="border-b border-gray-300">
                                    <th className="p-4 font-semibold text-sm text-gray-700">Drug Name</th>
                                    <th className="p-4 font-semibold text-sm text-gray-700">Generic</th>
                                    <th className="p-4 font-semibold text-sm text-gray-700">Category</th>
                                    <th className="p-4 font-semibold text-sm text-gray-700">Quantity</th>
                                    <th className="p-4 font-semibold text-sm text-gray-700">Batch</th>
                                    <th className="p-4 font-semibold text-sm text-gray-700">Expiry Date</th>
                                    <th className="p-4 font-semibold text-sm text-gray-700">Price</th>
                                    <th className="p-4 font-semibold text-sm text-gray-700">Status</th>
                                    <th className="p-4 font-semibold text-sm text-gray-700 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredInventory.length === 0 ? (
                                    <tr>
                                        <td colSpan={9} className="p-4 text-center text-gray-400">
                                            No inventory items yet.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredInventory.map((item) => (
                                        <tr key={item.id} className="border-b border-gray-300">
                                            <td className="p-4">
                                                <div className="font-semibold text-sm text-gray-700">{item.drugName}</div>
                                            </td>
                                            <td className="p-4 font-semibold text-sm text-gray-700">{item.genericName}</td>
                                            <td className="p-4 font-semibold text-sm text-gray-700">{item.category}</td>
                                            <td className="p-4 font-semibold text-sm text-gray-700">{item.quantity} units</td>
                                            <td className="p-4 font-semibold text-sm text-gray-700">{item.batchNumber}</td>
                                            <td className="p-4 font-semibold text-sm text-gray-700">
                                                {new Date(item.expiryDate).toLocaleDateString()}
                                            </td>
                                            <td className="p-4 font-semibold text-sm text-gray-700">₦{item.price}</td>
                                            <td className="p-4 font-semibold text-sm text-gray-700">
                                                <span
                                                    className={`px-3 py-1 rounded-lg text-xs font-semibold ${statusStyles[item.stockStatus]}`}
                                                >
                                                    {statusLabels[item.stockStatus]}
                                                </span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button
                                                        className="p-2 border border-gray-300 rounded-lg cursor-pointer"
                                                        onClick={() => handleEdit(item)}
                                                    >
                                                        <Edit size={16} />
                                                    </button>
                                                    <button
                                                        className="p-2 bg-red-600 text-white rounded-lg cursor-pointer"
                                                        onClick={() => handleDelete(item.id)}
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyInventory;