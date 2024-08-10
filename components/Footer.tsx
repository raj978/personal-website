import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
            <small className="mb-2 block text-xs">
                &copy; 2030 Rajat. All rights reserved.
            </small>
            <p className="text-xs">
                This site was built with <Link href="https://react.dev" className="underline" target="_blank">React</Link> & <Link href="https://nextjs.org" className="underline" target="_blank">Next.js</Link>, <Link href="https://typescriptlang.org" className="underline" target="_blank">TypeScript</Link>, <Link href="https://tailwindcss.com" className="underline" target="_blank">Tailwind CSS</Link>, <Link href="https://www.npmjs.com/package/clsx" className="underline" target="_blank">clsx</Link> and <Link href="https://framer.com/motion/" className="underline" target="_blank">Framer Motion</Link>.
            </p>
            <p className="text-xs">The source code for this website can be found on <Link href="https://github.com/raj978/personal-website" className="underline" target="_blank">GitHub</Link>. | Last Updated on : August 2024</p>
        </footer>
    );
}
