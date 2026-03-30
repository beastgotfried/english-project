import { ChapterHeader } from '../components/ChapterHeader';
import { SectionHeading } from '../components/SectionHeading';
import { Paragraph } from '../components/Paragraph';
import { PullQuote } from '../components/PullQuote';
import { ImageBlock } from '../components/ImageBlock';
import { StoryAnalysis } from '../components/StoryAnalysis';

export function Chapter2() {
  return (
    <section>
      <ChapterHeader number="TWO" title="Resilience That Builds a Nation" subtitle="The Spirit of Atmanirbharta" />
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <ImageBlock src="https://images.unsplash.com/photo-1532375810565-9e5c47000315?q=80&w=1974&auto=format&fit=crop" alt="Resilience" caption="Transforming demographic struggle into a demographic dividend." />
        
        <SectionHeading number="2.1" title="Defining National Resilience" />
        <Paragraph dropcap>
          A population becomes a dividend only when forged in the crucible of resilience. Our classic protagonists endure poverty and calamities, emerging with their humanity intact.
        </Paragraph>
        
        <PullQuote>
          "A developed nation is not built by a dependent populace, but by empowered individuals who take ownership of their destinies."
        </PullQuote>
        
        <StoryAnalysis title="The Child" author="Prem Chand" />
        <Paragraph>
          Gangu's quiet rebellion dismantles entrenched social prejudices. For India to actualize its dream, freeing citizens from the ghosts of caste and stigma is an economic necessity.
        </Paragraph>
        
        <StoryAnalysis title="Miracle" author="Kartar Singh Duggal" />
        <ImageBlock src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" alt="Community" caption="The halting of the train was not magic; it was supreme collective will." />
        
        <Paragraph>
          The "miracle" of Viksit Bharat will be engineered through the relentless, everyday hard work of its citizens—scientists, farmers, and teachers alike.
        </Paragraph>
        
        <StoryAnalysis title="Kabuliwala" author="Rabindranath Tagore" />
        <Paragraph>
          True national strength is measured by the capacity to extend empathy beyond one's own borders, bridging the gap for the next generation.
        </Paragraph>
      </div>
    </section>
  );
}
