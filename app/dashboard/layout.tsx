import clsx from "clsx";
import { FC, HTMLAttributes, ReactNode } from "react";
import Sidenav from "../ui/dashboard/sidenav";

interface ILayoutProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className: string;
}

const Layout: FC<ILayoutProps> = (props) => {
    const { children, className, ...propsDiv } = props;
    return (
        <div
            {...propsDiv}
            className={clsx(
                'flex h-screen flex-col md:flex-row md:overflow-hidden',
                className
            )}
        >
            <div className={clsx('w-full flex-none md:w-64')}>
                <Sidenav />
            </div>
            <div className={clsx(
                'flex-grow p-6 md:overflow-y-auto md:p-12'
            )}>
                {children}
            </div>
        </div>
    )
}

export default Layout;