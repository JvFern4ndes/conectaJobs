import { Overlay } from "./styles";

interface ApplicationModalProps {
    visible: boolean;
}

export function ApplicationModal({ visible }: ApplicationModalProps) {
    if (!visible) {
        return null;
    }

    return (
        <Overlay>
            <h1>ApplicationModal</h1>
        </Overlay>
    )
}
