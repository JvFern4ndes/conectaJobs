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
    onChangeApplicationStatus: (ApplicationId: string, status: Application['status']) => void;
}

export function ApplicationsBoard({ statusIcon, title, applications, onInactivateApplication, onChangeApplicationStatus }: ApplicationsBoardProps) {
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

    async function handleChangeApplicationStatus() {
        setIsLoading(true);

        const currentStatus = selectedApplication?.status._id;
        let newStatus;

        if (currentStatus === "65632539ef4b5d7b80b07667") {
            newStatus = "6563265eef4b5d7b80b0766a";
        } else if (currentStatus === "6563265eef4b5d7b80b0766a") {
            newStatus = "6563266cef4b5d7b80b0766c";
        } else if (currentStatus === "6563266cef4b5d7b80b0766c") {
            newStatus = "6563272bef4b5d7b80b07676";
        }

        const status = await api.get('/status');
        const abc = status.data.find(obj => obj._id === newStatus)

        await api.patch(`applications/${selectedApplication?._id}`, { status: newStatus });

        toast.success(`A candidatura para ${selectedApplication?.title} teve o status alterado!`)
        onChangeApplicationStatus(selectedApplication!._id, abc);
        setIsLoading(false);
        setIsModalVisible(false);
        console.log(status);
    }

    async function handleInactivateApplication() {
        setIsLoading(true);

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
                onChangeApplicationStatus={handleChangeApplicationStatus}

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
