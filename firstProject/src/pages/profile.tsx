
import clsx from "clsx";
import { useState } from "react";
import CardUser from "../components/cardUser";

function Userprofile() {
    {/* hover first button */ }
    const [isHoverMouseFirst, setHoverMouseFirst] = useState(false);
    const [isHoverMouseSecond, setHoverMouseSecond] = useState(false);
    return (
        <div className="w-screen h-screen bg-slate-100">
            <div className="flex flex-col justify-center items-center px-12">
                {/* qui c'è il container del profilo e immagine */}
                <div className="h-full w-full flex flex-col bg-slate-100 py-2 px-4 -space-y-36 justify-center items-center">
                    <div className="w-full h-[500px] rounded-3xl">
                        <img src="./src/assets/photo1.jpeg" alt="photo" className="w-full h-full bg-contain object-cover rounded-3xl" />
                    </div>
                    <div className="items-center justify-center rounded-full w-[250px] h-[250px]">
                        <img src="./src/assets/photoProfile.jpeg" alt="photo" className="w-full h-full bg-contain object-cover rounded-full" />
                    </div>
                </div>
                <div className=" flex flex-col gap-4 justify-center items-center">
                    <p className="text-2xl font-bold text-[#637B81]">Albertino Fabriziano</p>
                    <div className=" flex flex-row justify-between gap-4">
                        <button
                            onMouseEnter={() => setHoverMouseFirst(true)}
                            onMouseLeave={() => setHoverMouseFirst(false)}
                            className={clsx(
                                'border-2',
                                'px-2',
                                'w-fit',
                                'h-[50px]',
                                'rounded-lg',
                                isHoverMouseFirst ? 'border-[#637B81] bg-[#637B81] text-base font-medium text-white'
                                    : 'border-[#87b5c1] bg-[#87b5c1] text-base font-medium text-white'
                            )}>
                            <p>
                                Invia un messaggio
                            </p>
                        </button>
                        <button
                            onMouseEnter={() => setHoverMouseSecond(true)}
                            onMouseLeave={() => setHoverMouseSecond(false)}
                            className={clsx(
                                'border-2',
                                'px-2',
                                'w-fit',
                                'h-[50px]',
                                'rounded-lg',
                                isHoverMouseSecond ? 'border-[#637B81] bg-[#637B81] text-base font-medium text-white'
                                    : 'border-[#87b5c1] bg-[#87b5c1] text-base font-medium text-white'
                            )}>
                            <p>
                                Invita negli amici
                            </p>
                        </button>
                    </div>
                    <div className="w-full h-full">
                        <div className="flex flex-row justify-between gap-11 p-0">
                            <CardUser src={"./src/assets/user1.jpeg"} nameUser={"Lorenza Rossi"} />
                            <CardUser src={"./src/assets/user2.jpeg"} nameUser={"Giannino Giliberti"}/>
                            <CardUser src={"./src/assets/user3.jpeg"} nameUser={"Pinco Panco"}/>
                            <CardUser src={"./src/assets/user4.jpeg"} nameUser={"Panco Pinco"}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Userprofile;