import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';

// interface PropsType {
//     text: string;
// }

type PropsType = {
    text?: string;
    isOpen?: boolean;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    handleIsOpen?: () => void;
    children?: ReactNode;
}

interface UserInfo {
    _id: string;
    name: string;
    email: string;
    picture: string;
    isAdmin: boolean;
}


const Layout = (props: PropsType) => {
    const { text, isOpen, setIsOpen, handleIsOpen, children } = props;
    const [userInfo, setUserInfo] = useState<UserInfo>();

    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;