import { IoEllipsisVertical, IoTrash } from 'react-icons/io5';
import GreenCheckmark from './GreenCheckmark';

export default function AssignmentControlButtons({
    assignmentId,
    deleteAssignment,
    editAssignment,
}: {
    assignmentId: string;
    deleteAssignment: (assignmentId: string) => void;
    editAssignment: (assignmentId: string) => void;
}) {
    console.log('AssignmentControlButtons props:', { assignmentId, deleteAssignment, editAssignment });

    return (
        <div className="float-end">
            <IoTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)} />
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
