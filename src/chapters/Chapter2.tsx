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
        <ImageBlock 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2074&auto=format&fit=crop" 
          alt="Resilience" 
          caption="Transforming demographic struggle into a demographic dividend." 
        />
        
        <SectionHeading number="2.1" title="Defining National Resilience" />
        <Paragraph dropcap>
          As India envisions its century of independence in 2047, its most cited asset is its demographic dividend—the powerhouse of a young population. However, numbers alone do not build a Viksit Bharat. A population becomes a dividend only when it is forged in the crucible of resilience.
        </Paragraph>
        
        <PullQuote>
          "A developed nation is not built by a dependent populace, but by empowered individuals who take ownership of their destinies."
        </PullQuote>
        
        <StoryAnalysis title="The Child" author="Prem Chand" />
        <Paragraph>
          In Prem Chand’s *The Child*, we meet Gangu, a Brahmin servant who defies social expectations by marrying a stigmatized woman and joyfully accepting her child as his own. His quiet rebellion is a masterclass in dismantling entrenched social prejudices. For India to actualize its dream, this dismantling of historical prejudice is an economic necessity.
        </Paragraph>
        
        <Paragraph>
          As we build smart cities, we must be wary of intellectual hypocrisy. Prem Chand reminds us that national integration is not achieved through policy alone; it requires a collective softening of the heart.
        </Paragraph>

        <StoryAnalysis title="Miracle" author="Kartar Singh Duggal" />
        <ImageBlock 
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
          alt="Community" 
          caption="The halting of the train was not magic; it was supreme collective will." 
        />
        
        <Paragraph>
          Kartar Singh Duggal’s *Miracle* juxtaposes ancient myth with modern reality: villagers lying on railway tracks to stop a speeding train to feed freedom fighters. This refusal to yield is the bedrock of India’s historical narrative.
        </Paragraph>

        <PullQuote>
          "The ‘miracle’ of Viksit Bharat will be engineered through the relentless, everyday hard work of its citizens."
        </PullQuote>
        
        <StoryAnalysis title="Kabuliwala" author="Rabindranath Tagore" />
        <Paragraph>
          Rabindranath Tagore’s *Kabuliwala* illustrates the transcendent nature of human connection through the friendship between Abdur Rahman and little Mini. It serves as a reminder of our foundational philosophy: *Vasudhaiva Kutumbakam*.
        </Paragraph>
        
        <Paragraph>
          The development of a nation is an intergenerational project. The sacrifices made by today’s citizens are the foundational investments for the youth of 2047. True prosperity is achieved when one generation selflessly bridges the gap for the next.
        </Paragraph>
      </div>
    </section>
  );
}
