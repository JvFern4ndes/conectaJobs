import { Application } from "../../types/Application";
import { Board, ApplicationsContainer } from "./styles";

interface ApplicationsBoardProps {
    statusIcon: string;
    title: string;
    applications: Application[];
}

export function ApplicationsBoard({ statusIcon, title, applications }: ApplicationsBoardProps) {

    return (
        <Board>
                <header>
                    <img src={statusIcon} alt="Status icon" />
                    <strong>{title}</strong>
                    <span>(1)</span>
                </header>

                <ApplicationsContainer>
                    {applications.map((application) => (
                        <button type="button" key={application._id}>
                            <strong>{application.title}</strong>
                            <span>{application.company}</span>
                        </button>
                    ))}
                </ApplicationsContainer>
            </Board>
    )
}
