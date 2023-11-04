import { useState } from "react";
import { api } from '../../../utils/api';
import { toast } from "react-toastify";

import { Application } from "../../types/Application";
import { ApplicationModal } from "../ApplicationModal";

import { Board, ApplicationsContainer } from "./styles";

interface ApplicationsBoardProps {
    statusIcon: string;
    title: string;
    applications: Application[];
    onInactivateApplication: (applicationId: string) => void;
}

export function ApplicationsBoard({ statusIcon, title, applications, onInactivateApplication }: ApplicationsBoardProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedApplication, setSelectedApplication] = useState<null | Application>(null);
    const [isLoading, setIsLoading] = useState(false);

    function handleOpenModal(application: Application) {
        setIsModalVisible(true);
        setSelectedApplication(application);
    }

    function handleCloseModal() {
        setIsModalVisible(false);
        setSelectedApplication(null);
    }

    async function handleInactivateApplication() {
        setIsLoading(true);

        await new Promise(resolve => setTimeout(resolve, 3000))
        await api.delete(`applications/${selectedApplication?._id}`)

        toast.success(`A candidatura para ${selectedApplication?.title} foi inativada!`)
        onInactivateApplication(selectedApplication!._id);
        setIsLoading(false);
        setIsModalVisible(false);
    }

    return (
        <Board>
            <ApplicationModal
                visible={isModalVisible}
                application={selectedApplication}
                onClose={handleCloseModal}
                onInactivateApplication={handleInactivateApplication}
                isLoading={isLoading}

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
