import React from 'react';
import { MacbookScroll } from '@/components/ui/macbook';
import ScrollDownIndicator from "@/components/ui/scroll-arrow";
import Link from 'next/link';

const Page = () => {
    return (
        <div>
            <MacbookScroll
                title={
                    <div className="flex">
                        <span>Welcome <br /> Scroll Down to start Exploring!</span>
                        <ScrollDownIndicator />
                    </div>
                }
                badges={[
                    <Link href="https://github.com/raj978" target="_blank" rel="noopener noreferrer">
                        <GitHubLogo className="h-8 w-8" />
                    </Link>,
                    <Link href="https://linkedin.com/in/rajat-mahesh-gupta" target="_blank" rel="noopener noreferrer">
                        <LinkedInLogo className="h-8 w-8" />
                    </Link>,
                    <Link href="https://drive.google.com/file/d/1yamaAFZ5UYfF6ZUextz85sCHtmQMXk6S/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <ResumeDownloadIcon className="h-8 w-8" />
                    </Link>,
                ]}

            />
        </div>
    );
};


export default Page;

const ResumeDownloadIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M6 2C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8.41421C20 8.01639 19.842 7.63486 19.5607 7.35355L14.6464 2.43934C14.3651 2.15804 13.9836 2 13.5858 2H6Z"
                fill="currentColor"
            />
            <path
                d="M14 2.5V7C14 7.55228 14.4477 8 15 8H19.5L14 2.5Z"
                fill="currentColor"
            />
            <path
                d="M12 11C11.4477 11 11 11.4477 11 12V16.5858L9.70711 15.2929C9.31658 14.9024 8.68342 14.9024 8.29289 15.2929C7.90237 15.6834 7.90237 16.3166 8.29289 16.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L15.7071 16.7071C16.0976 16.3166 16.0976 15.6834 15.7071 15.2929C15.3166 14.9024 14.6834 14.9024 14.2929 15.2929L13 16.5858V12C13 11.4477 12.5523 11 12 11Z"
                fill="currentColor"
            />
        </svg>
    );
};

const LinkedInLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.23 0H1.77C0.79 0 0 0.77 0 1.72V22.27C0 23.23 0.79 24 1.77 24H22.23C23.21 24 24 23.23 24 22.27V1.72C24 0.77 23.21 0 22.23 0ZM7.09 20.45H3.56V9H7.09V20.45ZM5.32 7.5C4.19 7.5 3.28 6.59 3.28 5.46C3.28 4.33 4.19 3.42 5.32 3.42C6.45 3.42 7.36 4.33 7.36 5.46C7.36 6.59 6.45 7.5 5.32 7.5ZM20.45 20.45H16.91V14.5C16.91 13.24 16.89 11.63 15.26 11.63C13.61 11.63 13.36 12.95 13.36 14.41V20.45H9.82V9H13.22V10.41H13.27C13.75 9.5 14.88 8.55 16.5 8.55C19.64 8.55 20.45 10.68 20.45 13.64V20.45Z"
                fill="currentColor"
            />
        </svg>
    );
};

const GitHubLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12C0 17.303 3.438 21.8 8.207 23.385C8.805 23.485 9.025 23.145 9.025 22.845C9.025 22.575 9.015 21.875 9.01 20.875C5.672 21.575 4.968 19.575 4.968 19.575C4.422 18.275 3.633 17.975 3.633 17.975C2.545 17.275 3.722 17.285 3.722 17.285C4.922 17.375 5.548 18.525 5.548 18.525C6.622 20.225 8.348 19.775 9.025 19.475C9.125 18.725 9.422 18.225 9.75 17.925C7.1 17.625 4.3 16.525 4.3 11.775C4.3 10.425 4.8 9.325 5.6 8.525C5.5 8.225 5.1 6.925 5.7 5.225C5.7 5.225 6.7 4.925 9.025 6.575C9.925 6.325 10.925 6.225 11.925 6.225C12.925 6.225 13.925 6.325 14.825 6.575C17.15 4.925 18.15 5.225 18.15 5.225C18.75 6.925 18.35 8.225 18.25 8.525C19.05 9.325 19.55 10.425 19.55 11.775C19.55 16.525 16.75 17.625 14.1 17.925C14.525 18.325 14.925 19.125 14.925 20.325C14.925 21.925 14.915 22.525 14.915 22.845C14.915 23.145 15.135 23.485 15.735 23.385C20.505 21.8 24 17.303 24 12C24 5.373 18.627 0 12 0Z"
                fill="currentColor"
            />
        </svg>
    );
};
