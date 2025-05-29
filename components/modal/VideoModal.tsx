import CustomModal from "../ui/custom-modal";

interface VideoModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <iframe
        className="w-full h-[500px]"
        src="https://www.youtube.com/embed/vXCSOMEhCkI?si=WY_HqDL5SCgy_9hP"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      />
    </CustomModal>
  );
};

export default VideoModal;
