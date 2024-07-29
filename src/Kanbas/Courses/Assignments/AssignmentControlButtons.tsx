import React from 'react';
import GreenCheckmark from "./GreenCheckmark";
import { IoEllipsisVertical, IoTrash } from "react-icons/io5";

export default function AssignmentControlButtons({ handleDelete }: { handleDelete: () => void }) {
    return (
        <div className="float-end ps-5">
            <GreenCheckmark />
            <IoTrash className="fs-4 me-3" onClick={handleDelete} />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}