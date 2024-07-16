import { lazy, Suspense, useContext } from 'react';
import { useAtom } from 'jotai/react/useAtom';
import { DoubleNavbar } from '@/components/DoubleNavbar/DoubleNavbar';
import { DemoForm } from '@/components/DemoForm/DemoForm';
import { HeaderTabs } from '@/components/HeaderTabs/HeaderTabs';
import { LeadGrid } from '@/components/LeadGrid/LeadGrid';
import { FooterContext } from '@/App';
import { showFooterAtom } from '@/store/global-store';

const FooterCentered = lazy(() => import('../components/FooterCentered/FooterCentered'));

export default function TestPage() {
  const [showFooter] = useContext(FooterContext);
  const [showFooter2] = useAtom(showFooterAtom);

  return (
    <>
      <HeaderTabs />
      <LeadGrid navbar={<DoubleNavbar />} form={<DemoForm />} />
      <Suspense fallback={<span>Loading...</span>}>{showFooter2 && <FooterCentered />}</Suspense>
      <span>
        showFooter {showFooter} showFooter2 {showFooter2}
      </span>
    </>
  );
}
