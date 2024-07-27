import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import GreyUnpublish from "./GreyUnpublish";

export default function ModulesControls() {
    return (
        <div id="wd-modules-controls" className="container-fluid">
            <div className="row justify-content-end g-2">
                <div className="col-auto">
                    <button id="wd-add-module-btn" className="btn btn-lg btn-danger">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Module
                    </button>
                </div>
                <div className="col-auto">
                    <div className="dropdown">
                        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
                            type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <GreenCheckmark />
                            Publish All
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
                                    <GreenCheckmark />
                                    Publish all modules and items
                                </a>
                            </li>
                            <li>
                                <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
                                    <GreenCheckmark />
                                    Publish modules only
                                </a>
                            </li>
                            <li>
                                <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
                                    <GreyUnpublish />
                                    Unpublish all modules and items
                                </a>
                            </li>
                            <li>
                                <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
                                    <GreyUnpublish />
                                    Unpublish modules only
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-auto">
                    <button id="wd-view-progress" className="btn btn-lg btn-secondary">
                        View Progress
                    </button>
                </div>
                <div className="col-auto">
                    <button id="wd-collapse-all" className="btn btn-lg btn-secondary">
                        Collapse All
                    </button>
                </div>
            </div>
        </div>
    );
}
