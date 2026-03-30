import { ChapterHeader } from '../components/ChapterHeader';
import { SectionHeading } from '../components/SectionHeading';
import { Paragraph } from '../components/Paragraph';
import { PullQuote } from '../components/PullQuote';
import { ImageBlock } from '../components/ImageBlock';
import { StoryAnalysis } from '../components/StoryAnalysis';

export function Chapter4() {
  return (
    <section>
      <ChapterHeader number="FOUR" title="Local Hands, Global Strength" subtitle="Vocal for Local and Grassroots Empowerment" />
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <ImageBlock 
          src="https://images.unsplash.com/photo-1590541574751-24075556272e?q=80&w=2070&auto=format&fit=crop" 
          alt="Artisan" 
          caption="True macro-economic strength must be cultivated from the soil up." 
        />
        
        <SectionHeading number="4.1" title="Decentralized Growth: The Micro-Foundations" />
        <Paragraph dropcap>
          The narrative of a rising global power is often dominated by massive conglomerates. However, the true economic engine of India lies in its decentralized workforce. To achieve Viksit Bharat, the philosophy of “Vocal for Local” must be elevated from a slogan to a structural reality.
        </Paragraph>
        
        <PullQuote>
          "A nation built on thousands of self-reliant, empowered local economies possesses an unbreakable economic fortitude."
        </PullQuote>
        
        <StoryAnalysis title="The Talking Plough" author="Poonkunnam Varkey" />
        <Paragraph>
          In *The Talking Plough*, a simple agricultural implement is elevated into a silent partner in the sacred act of cultivating life. As Indian agriculture stands on the precipice of an AI and drone revolution, this tale reminds us that technological modernization must not sever the spiritual bond between the cultivator and the land.
        </Paragraph>
        
        <Paragraph>
          Absolute food security is a non-negotiable prerequisite for global strength. Empowering the agricultural sector is not charity; it is the most critical investment in our future. National security begins in the furrowed fields.
        </Paragraph>

        <StoryAnalysis title="Bhadari" author="Laxminath Bezboroa" />
        <ImageBlock 
          src="https://images.unsplash.com/photo-1506869640319-fe1a24afb011?q=80&w=2070&auto=format&fit=crop" 
          alt="Domestic" 
          caption="Strong, stable families are the bedrock of a strong nation." 
        />
        
        <Paragraph>
          Bezboroa’s *Bhadari* shifts focus to the unpolished reality of the rural domestic sphere. It illustrates that the emotional health of a country is tied to the stability of its households. Resolving domestic complexities through community support is vital for a mature, cohesive nation.
        </Paragraph>

        <StoryAnalysis title="The Flood" author="Thakazhi Sivasankara Pillai" />
        <Paragraph>
          *The Flood* is a devastating portrayal of survival that highlights the vulnerability of the marginalized and nature when disaster strikes. A macro-economy cannot be considered “developed” if its grassroots populations are left defenseless against nature’s fury.
        </Paragraph>
        
        <PullQuote>
          "Local hands must be empowered not only to produce, but to protect."
        </PullQuote>

        <Paragraph>
          Development must be linked to environmental stewardship. SUSTAINABILITY is essential to ensure that our march toward prosperity does not trigger the destruction of our own foundations.
        </Paragraph>
      </div>
    </section>
  );
}
