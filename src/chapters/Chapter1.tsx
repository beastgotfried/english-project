import { ChapterHeader } from '../components/ChapterHeader';
import { SectionHeading } from '../components/SectionHeading';
import { Paragraph } from '../components/Paragraph';
import { PullQuote } from '../components/PullQuote';
import { ImageBlock } from '../components/ImageBlock';

export function Chapter1() {
  return (
    <section>
      <ChapterHeader number="ONE" title="Literature as the Blueprint" subtitle="Introduction" />
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <ImageBlock src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2070&auto=format&fit=crop" alt="Ancient manuscript" caption="The intersection of ancient wisdom and modern aspiration." />
        
        <SectionHeading number="1.1" title="The Vision of 2047" />
        <Paragraph dropcap>
          The year 2047 marks a century of India's independence. To understand our future, we must consult the architects of our cultural consciousness.
        </Paragraph>
        
        <PullQuote>
          "To build a Viksit Bharat, we must look back to our texts to ensure that our rapid modernization is anchored securely by our timeless cultural heritage."
        </PullQuote>
        
        <Paragraph>
          True development extends far beyond physical infrastructure; it fundamentally relies on the cultivation of human capital. What good is a technologically advanced society if it loses its capacity for empathy and moral resilience?
        </Paragraph>
        
        <ImageBlock src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop" alt="Elder hands" caption="Human values breathe life into the soul of a nation." />
        
        <SectionHeading number="1.2" title='The Thematic Pillars' />
        <Paragraph>
          Our journey is supported by four pillars: Resilience, Cultural Roots, Local Empowerment, and Empathy. We must balance heritage with modernity—Virasat bhi, Vikas bhi.
        </Paragraph>
        
        <SectionHeading number="1.3" title="The Master Storytellers" />
        <Paragraph>
          Visionaries like Prem Chand and C. Rajagopalachari anticipated the moral challenges of nation-building. Their stories serve as the ultimate ethical guardrail in our race to build smart cities and dominate global supply chains.
        </Paragraph>
        
        <PullQuote>
          "If Viksit Bharat is the destination, these literary masterpieces are the navigational stars."
        </PullQuote>
      </div>
    </section>
  );
}
