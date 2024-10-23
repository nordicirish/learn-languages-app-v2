import { Footer } from "./footer";
import { Header } from "./header";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Layout behaviour - Components that are not children will not rerender when children rerender */}
        <Header />
        <main className= "flex-1 flex flex-col items-center justify-center">{children}</main>
        <Footer />
      </div>
    );
}    
export default MarketingLayout	