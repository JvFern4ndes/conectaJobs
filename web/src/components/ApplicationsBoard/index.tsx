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

    function handleOpenModal() {
        setIsModalVisible(true);
    }

    return (
        <Board>
            <ApplicationModal visible={isModalVisible} />

            <header>
                <img src={statusIcon} alt="Status icon" />
                <strong>{title}</strong>
                <span>({applications.length})</span>
            </header>

            {applications.length > 0 && (
                <ApplicationsContainer>
                    {applications.map((application) => (
                        <button type="button" key={application._id} onClick={handleOpenModal}>
                            <strong>{application.title}</strong>
                            <span>{application.company}</span>
                        </button>
                    ))}
                </ApplicationsContainer>
            )}
        </Board>
    )
}
