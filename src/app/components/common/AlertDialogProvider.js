import React, {useState} from "react";
import Dialog from "./Dialog";

export const AlertDialogContext = React.createContext(null);

export default function AlertDialogProvider(props) {
    const [content, setContent] = useState(null);

    return (
        <AlertDialogContext.Provider value={{content, show: (newContent) => setContent(newContent)}}>
            {props.children}
            <AlertDialogContext.Consumer>
                {(context) => <Dialog close={() => context.show(null)} show={!!context?.content}>{context?.content}</Dialog>}
            </AlertDialogContext.Consumer>
        </AlertDialogContext.Provider>
    );
}
