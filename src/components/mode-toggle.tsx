import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const sunClasses =
        theme === "dark" ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100";
    const moonClasses =
        theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="relative rounded-full w-10 h-10 flex items-center justify-center"
                    variant="outline"
                    size="icon"
                    title={`Current theme: ${theme}`} // Optional tooltip
                >
                    <Sun className={`absolute h-5 w-5 transition-all duration-500 ease-in-out ${sunClasses}`} />
                    <Moon className={`absolute h-5 w-5 transition-all duration-500 ease-in-out ${moonClasses}`} />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
