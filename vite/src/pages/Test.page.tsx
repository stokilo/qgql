import { lazy, Suspense, useContext } from 'react';
import { DoubleNavbar } from '@/components/DoubleNavbar/DoubleNavbar';
import { DemoForm } from '@/components/DemoForm/DemoForm';
import { HeaderTabs } from '@/components/HeaderTabs/HeaderTabs';
import { LeadGrid } from '@/components/LeadGrid/LeadGrid';
import { FooterContext } from '@/App';

const FooterCentered = lazy(() => import('../components/FooterCentered/FooterCentered'));

export default function TestPage() {
  const [showFooter] = useContext(FooterContext);

  return (
    <>
      <HeaderTabs />
      <LeadGrid navbar={<DoubleNavbar />} form={<DemoForm />} />
      <Suspense fallback={<span>Loading...</span>}>{showFooter && <FooterCentered />}</Suspense>
    </>
  );
}
