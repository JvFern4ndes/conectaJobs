import { useState } from "react";

import { Application } from "../../types/Application";
import { ApplicationModal } from "../ApplicationModal";

import { Board, ApplicationsContainer } from "./styles";

interface ApplicationsBoardProps {
    statusIcon: string;
    title: string;
    applications: Application[];
}

export function ApplicationsBoard({ statusIcon, title, applications }: ApplicationsBoardProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedApplication, setSelectedApplication] = useState<null | Application>(null);

    function handleOpenModal(application: Application) {
        setIsModalVisible(true);
        setSelectedApplication(application);
    }

    function handleCloseModal() {
        setIsModalVisible(false);
        setSelectedApplication(null);
    }

    return (
        <Board>
            <ApplicationModal
                visible={isModalVisible}
                application={selectedApplication}
                onClose={handleCloseModal}
            />

            <header>
                <img src={statusIcon} alt="Status icon" />
                <strong>{title}</strong>
                <span>({applications.length})</span>
            </header>

            {applications.length > 0 && (
                <ApplicationsContainer>
                    {applications.map((application) => (
                        <button type="button" key={application._id} onClick={() => handleOpenModal(application)}>
                            <strong>{application.title}</strong>
                            <span>{application.company}</span>
                        </button>
                    ))}
                </ApplicationsContainer>
            )}
        </Board>
    )
}
