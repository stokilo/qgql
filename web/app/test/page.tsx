import { DoubleNavbar } from '@/components/DoubleNavbar/DoubleNavbar';
import { DemoForm } from '@/components/DemoForm/DemoForm';
import { FooterCentered } from '@/components/FooterCentered/FooterCentered';
import { HeaderTabs } from '@/components/HeaderTabs/HeaderTabs';

export default function HomePage2() {
    return (
        <>
            <HeaderTabs />
            <DoubleNavbar></DoubleNavbar>
            <DemoForm />
            <FooterCentered />
            {/* <Welcome /> */}
            {/* <ColorSchemeToggle /> */}
        </>
    );
}
