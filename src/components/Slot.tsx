import {ReactElement, Suspense} from 'react';
import {Slot} from '@croct/plug-react';

type HomeBannerContent = {
  title: string,
  subtitle: string,
  cta: {
      label: string,
      link: string,
  },
};

export default function OnboardingPage(): ReactElement {
    return (
        <Suspense fallback="✨ Personalizing content...">
            <Slot id="home-banner">
                {({title, subtitle, cta}: HomeBannerContent) => (
                    <div>
                        <strong>{title}</strong>
                        <p>{subtitle}</p>
                        <a href={cta.link}>{cta.label}</a>
                    </div>
                )}
            </Slot>
        </Suspense>
    )
}