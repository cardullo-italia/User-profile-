import clsx from "clsx";
import { useState } from "react";

interface Images {
    src : string;
    nameUser: string;
}

const CardUser: React.FC<Images> = ({src, nameUser}) => {
    const [isHoverMouseFirst, setHoverMouseFirst] = useState(false);
    return (
        <div className="rounded-md border-2 w-[200px] h-[200px] p-5 m-10 bg-slate-300">
            <div className="flex flex-col gap-2 justify-center items-center">
                <div className="w-[100px] h-[100px]">
                    <img src={src} className="w-full h-full bg-contain object-cover rounded-full" />
                </div>
                <p className="text-bold text-black">{nameUser}</p>
                <button
                    onMouseEnter={() => setHoverMouseFirst(true)}
                    onMouseLeave={() => setHoverMouseFirst(false)}
                    className={clsx(
                        'border-2',
                        'px-4',
                        'w-fit',
                        'h-100',
                        'rounded-lg',
                        isHoverMouseFirst ? 'border-[#637B81] bg-[#637B81] text-base font-medium text-white'
                            : 'border-[#87b5c1] bg-[#87b5c1] text-base font-medium text-white'
                    )}>
                    <p>
                        Vedi Profilo
                    </p>
                </button>
            </div>
        </div>
    )
}

export default CardUser;