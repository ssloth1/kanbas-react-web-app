import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
    return (
        <span className="mb-2 position-relative">
            <FaCheckCircle style={{ top: "4px" }}
                className="text-success me-1 position-absolute fs-5" />
            <FaCircle className="text-white me-2 fs-6" />
        </span>
    );
}
