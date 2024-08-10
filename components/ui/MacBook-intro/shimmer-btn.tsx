import React from "react";
import {LinkPreview} from "@/components/ui/link-preview";
import {resumeUrl} from "@/lib/data";

const ShimmerButton = () => {
    return (
        <LinkPreview url={resumeUrl} aria-label="Resume">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800  bg-[linear-gradient(110deg,#696969,40%,#808080,50%,#696969)] dark:bg-[linear-gradient(110deg,#000,40%,#2e3a4a,50%,#000000)] bg-[length:200%_100%] px-6 font-large text-white dark:text-slate-200 hover:text-green-400 dark:hover:text-accent transition-colors focus:outline-none focus:ring-4 focus:ring-slate-200 focus:ring-offset-4 focus:ring-offset-slate-50">
                Resume
            </button>
        </LinkPreview>
    );
};

export default ShimmerButton;
