import { MdCancel } from "react-icons/md";

export default function GreyUnpublish() {
    return (
        <span className="me-1 position-relative">
            <MdCancel style={{ top: "3.5px", color: "grey" }} className="position-absolute fs-5 me-1 fs-7" />
            <span className="me-4 fs-6"></span>
        </span>
    );
}
