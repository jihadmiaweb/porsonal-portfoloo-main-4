import LeftContact from "./leftContact"
import RightContact from "./rightContact"

function MainContact() {
    return <>
        <div id="contact" className="dark:bg-gray-950 pb-20 pt-20 md:gap-5 lg:px-8 text-white overflow-hidden border-y-[1px] border-transparent px-8 [border-image:linear-gradient(to_right,#0D1224,#9ca3af,#0D1224)_1] flex flex-col lg:flex-row">
            <LeftContact />
            <RightContact />
        </div>
    </>
}

export default MainContact