import { useContext } from 'react';
import { DoubleNavbar } from '@/components/DoubleNavbar/DoubleNavbar';
import { DemoForm } from '@/components/DemoForm/DemoForm';
import { FooterCentered } from '@/components/FooterCentered/FooterCentered';
import { HeaderTabs } from '@/components/HeaderTabs/HeaderTabs';
import { LeadGrid } from '@/components/LeadGrid/LeadGrid';
import { FooterContext } from '@/App';

export default function TestPage() {
  const [showFooter] = useContext(FooterContext);

  console.dir(showFooter);
  return (
    <>
      <HeaderTabs />
      <LeadGrid navbar={<DoubleNavbar />} form={<DemoForm />} />
      <div>
        <span>showFooter? {showFooter}</span>
      </div>
      {showFooter && <FooterCentered />}
    </>
  );
}
