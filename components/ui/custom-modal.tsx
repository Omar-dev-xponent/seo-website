import { X } from "lucide-react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl">
        {/* Close Button (Positioned Outside) */}
        <button
          onClick={onClose}
          className="absolute -top-10 -right-8 text-white bg-black/70 hover:bg-black rounded-full p-1"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
