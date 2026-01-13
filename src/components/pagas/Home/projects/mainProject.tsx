
import CartProject from "@/components/pagas/Home/projects/cartProject"
import HeaderProject from "./headerProject"

function MainProject() {
    return <>
        <div id="portfolio" className=" px-8 dark:bg-gray-950 text-white ">
            <HeaderProject />
            <CartProject />
        </div>
    </>
}

export default MainProject