import { ChapterHeader } from '../components/ChapterHeader';
import { SectionHeading } from '../components/SectionHeading';
import { Paragraph } from '../components/Paragraph';
import { PullQuote } from '../components/PullQuote';
import { ImageBlock } from '../components/ImageBlock';
import { StoryAnalysis } from '../components/StoryAnalysis';

export function Chapter5() {
  return (
    <section>
      <ChapterHeader number="FIVE" title="Compassion Creates Prosperity" subtitle="Sabka Saath, Sabka Vikas" />
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <ImageBlock src="https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?q=80&w=2070&auto=format&fit=crop" alt="Community" caption="Economic prosperity, if confined to a privileged few, is inherently fragile." />
        
        <SectionHeading number="5.1" title="Rethinking Wealth" />
        <Paragraph dropcap>
          A nation cannot be considered fully developed if its economic ascendancy leaves its most vulnerable citizens in the shadows. Empathy is the catalyst for eradicating inequality.
        </Paragraph>
        
        <PullQuote>
          "A society's ultimate net worth is calculated by the well-being of its most marginalized members."
        </PullQuote>
        
        <StoryAnalysis title="The Price of Flowers" author="Prabhat Kumar Mukhopadhyay" />
        <Paragraph>
          Our global interactions must be guided by profound cross-cultural empathy. A Viksit Bharat must cultivate a culture of giving without expectation.
        </Paragraph>
        
        <StoryAnalysis title="Brother Abdul Rahman" author="Amarlal Hingorani" />
        <ImageBlock src="https://images.unsplash.com/photo-1542838686-37ed7a928b04?q=80&w=2070&auto=format&fit=crop" alt="Diversity" caption="Compassion operates on the supreme universal truth that love is the highest law." />
        
        <Paragraph>
          India's staggering diversity is its greatest strength. National integration is non-negotiable; a united India can conquer any challenge.
        </Paragraph>
        
        <StoryAnalysis title="Idgah" author="Prem Chand" />
        <Paragraph>
          Building a Viksit Bharat requires investing our national resources in long-term, sustainable care for our citizens, honoring the intergenerational contract.
        </Paragraph>
      </div>
    </section>
  );
}
