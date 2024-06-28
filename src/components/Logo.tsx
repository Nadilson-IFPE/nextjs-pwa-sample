import Image from "next/image";
import app_icon from '/public/icons/icon-512x512.png';

const Logo = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center p-5">
                <Image
                    src={app_icon}
                    alt="Nadilson's Next.js PWA Sample logo"
                    width={400}
                    height={400}
                    aria-label="Nadilson's Next.js PWA Sample logo"
                    priority />
            </div>
        </>
    );
}

export default Logo;