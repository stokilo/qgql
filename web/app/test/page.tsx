import { DoubleNavbar } from '@/components/DoubleNavbar/DoubleNavbar';
import { DemoForm } from '@/components/DemoForm/DemoForm';
import { FooterCentered } from '@/components/FooterCentered/FooterCentered';
import { HeaderTabs } from '@/components/HeaderTabs/HeaderTabs';
import { LeadGrid } from '@/components/LeadGrid/LeadGrid';

export default function HomePage2() {
    return (
        <>
            <HeaderTabs />
            <LeadGrid navbar={<DoubleNavbar />} form={<DemoForm />}/>
            <FooterCentered />
            {/* <Welcome /> */}
            {/* <ColorSchemeToggle /> */}
        </>
    );
}
