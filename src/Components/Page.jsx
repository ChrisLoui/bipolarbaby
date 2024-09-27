import { forwardRef } from "react";

const Page = forwardRef((props, ref) => {
    return (
        <div className="demoPage bg-white h-full" ref={ref}>
            <div className="h-full">
                {props.children}
            </div>
        </div>
    );
});

export default Page;