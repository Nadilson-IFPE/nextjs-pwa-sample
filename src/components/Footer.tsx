import Image from "next/image";

const Footer = () => {
    return (
            <div className="fixed pb-2 bottom-0 flex h-48 w-full items-end justify-center">
                <a
                    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    By{" "}
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                    />
                </a>
            </div>
    );
}

export default Footer;