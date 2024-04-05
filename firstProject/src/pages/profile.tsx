function Userprofile() {
    return (
        <div className="w-screen h-screen bg-slate-200">
            <div className="flex flex-col justify-center items-center px-12">
                {/* qui c'è il container del profilo e immagine */}
                <div className="h-full w-full flex flex-col bg-slate-200 py-2 px-4 -space-y-36 justify-center items-center">
                    <div className="w-full h-[500px] rounded-3xl">
                        <img src="./src/assets/photo1.jpeg" alt="photo" className="w-full h-full bg-contain object-cover rounded-3xl" />
                    </div>
                    <div className="items-center justify-center rounded-full w-[250px] h-[250px]">
                        <img src="./src/assets/photoProfile.jpeg" alt="photo" className="w-full h-full bg-contain object-cover rounded-full" />
                    </div>
                </div>
                <div className="text-2xl font-bold">
                        <p>Italia M.D. Cardullo</p>
                </div>
            </div>
        </div>
    )
}

export default Userprofile;