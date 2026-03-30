import { ChapterHeader } from '../components/ChapterHeader';
import { SectionHeading } from '../components/SectionHeading';
import { Paragraph } from '../components/Paragraph';
import { PullQuote } from '../components/PullQuote';
import { ImageBlock } from '../components/ImageBlock';
import { StoryAnalysis } from '../components/StoryAnalysis';

export function Chapter4() {
  return (
    <section>
      <ChapterHeader number="FOUR" title="Local Hands, Global Strength" subtitle="Vocal for Local" />
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <ImageBlock src="https://images.unsplash.com/photo-1584824486509-112e4181ffe7?q=80&w=2070&auto=format&fit=crop" alt="Artisan" caption="True macro-economic strength must be cultivated from the soil up." />
        
        <SectionHeading number="4.1" title="Decentralized Growth" />
        <Paragraph dropcap>
          The true economic engine of India lies in its decentralized workforce. When local hands are equipped with modern tools, they transform from mere laborers into micro-entrepreneurs.
        </Paragraph>
        
        <PullQuote>
          "A nation built on thousands of self-reliant, empowered local economies possesses an unbreakable economic fortitude."
        </PullQuote>
        
        <StoryAnalysis title="The Talking Plough" author="Poonkunnam Varkey" />
        <Paragraph>
          Modernization must not sever the emotional bond between the cultivator and the land. Absolute food security is a non-negotiable prerequisite for global strength.
        </Paragraph>
        
        <StoryAnalysis title="Bhadari" author="Laxminath Bezboroa" />
        <ImageBlock src="https://images.unsplash.com/photo-1517594422361-5e18a40060f3?q=80&w=2070&auto=format&fit=crop" alt="Domestic" caption="Strong, stable families are the bedrock of a strong nation." />
        
        <Paragraph>
          Economic prosperity cannot mask a fractured social fabric. We must prioritize social infrastructure to resolve domestic complexities healthily.
        </Paragraph>
        
        <StoryAnalysis title="The Flood" author="Thakazhi Sivasankara Pillai" />
        <Paragraph>
          A macro-economy isn't truly "developed" if its grassroots populations are left defenseless against nature's fury. Local hands must be empowered to protect the environment.
        </Paragraph>
      </div>
    </section>
  );
}
