import { X } from "lucide-react"


type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string; 
    description: string; 
    children: React.ReactNode;
};

function Modal({ isOpen, onClose, title, description, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

            <div className="bg-white rounded-xl shadow-xl w-full max-w-xl max-h-[90vh] overflow-y-auto">

                {/* Header */}
                <div className="flex justify-between items-center p-5"> 
                    <div>
                    <h2 className="text-xl font-bold mb-3">{title}</h2> 
                    <p className="text-gray-500">{description}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-2xl text-gray-500 hover:text-black cursor-pointer"
                    >
                        <X />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    {children}
                </div>

            </div>

        </div>
    );
}

export default Modal;