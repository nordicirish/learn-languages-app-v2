
import { Button } from "@/components/ui/button"
export default function ButtonVariants() {
  return (
    <div className="flex flex-col p-4 space-y-4 max-w-[18.75rem]">
      <Button variant="default">Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondaryOutline">Secondary outline</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="dangerOutline">Danger outline</Button>
      <Button variant="super">Super</Button>
      <Button variant="superOutline">Super outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="sideBar">SideBar</Button>
      <Button variant="sideBarOutline">SideBar outline</Button>
    </div>
  )
    
}
