import { ChapterHeader } from '../components/ChapterHeader';
import { SectionHeading } from '../components/SectionHeading';
import { Paragraph } from '../components/Paragraph';
import { PullQuote } from '../components/PullQuote';
import { ImageBlock } from '../components/ImageBlock';
import { StoryAnalysis } from '../components/StoryAnalysis';

export function Chapter3() {
  return (
    <section>
      <ChapterHeader number="THREE" title="The Roots That Sustain Us" subtitle="Pride in Our Virasat" />
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <ImageBlock src="https://images.unsplash.com/photo-1592496001020-d31bd830651f?q=80&w=2070&auto=format&fit=crop" alt="Village" caption="The rural heartland is the foundational bedrock of national identity." />
        
        <SectionHeading number="3.1" title="Anchoring Identity" />
        <Paragraph dropcap>
          The true soul of India resides in its villages. True modernization is not synonymous with Westernization; our ancient ethos champions mindful consumption and reverence for the environment.
        </Paragraph>
        
        <StoryAnalysis title="The Curd-Seller" author="Masti Venkatesa Iyengar" />
        <Paragraph>
          Empowering grassroots economic agents is fundamental to achieving a self-reliant economy. There is an inherent nobility in honest labor that commands respect.
        </Paragraph>
        
        <PullQuote>
          "A truly developed India requires a cultural reaffirmation of the dignity of all labor, no matter how small or traditional."
        </PullQuote>
        
        <StoryAnalysis title="The Nose-Jewel" author="C. Rajagopalachari" />
        <ImageBlock src="https://images.unsplash.com/photo-1549468057-5ce7af8bbbf7?q=80&w=2070&auto=format&fit=crop" alt="Sparrows" caption="The blind pursuit of wealth poisons the mind and destabilizes the home." />
        
        <Paragraph>
          True development demands a model of sustainable growth that prioritizes human well-being over the relentless hoarding of hollow assets.
        </Paragraph>
        
        <StoryAnalysis title="A Horse and Two Goats" author="R.K. Narayan" />
        <Paragraph>
          As we pave new highways, the monumental heritage of our past must stand resolute. Our ancient heritage is never simply for sale.
        </Paragraph>
      </div>
    </section>
  );
}
