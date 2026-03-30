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
        <ImageBlock 
          src="https://images.unsplash.com/photo-1592496001020-d31bd830651f?q=80&w=2070&auto=format&fit=crop" 
          alt="Village" 
          caption="The rural heartland is the foundational bedrock of national identity." 
        />
        
        <SectionHeading number="3.1" title="Anchoring Identity in Cultural Heritage" />
        <Paragraph dropcap>
          It has long been said that the true soul of India resides in its villages. As the nation accelerates toward the urbanized, technologically advanced vision of 2047, it is dangerously easy to view the village as a relic of the past. However, classic Indian literature forces a radical shift in this perspective.
        </Paragraph>
        
        <PullQuote>
          "The rural heartland is the foundational bedrock of national identity—the vital soil from which the towering aspirations of a modern republic must grow."
        </PullQuote>
        
        <StoryAnalysis title="The Curd-Seller" author="Masti Venkatesa Iyengar" />
        <Paragraph>
          In *The Curd-Seller*, we follow the rhythmic journey of a rural woman who walks miles to sell her curds. It is a profound study of indigenous micro-economics built on local trust and human interaction. Empowering these grassroots economic agents is fundamental to achieving a self-reliant economy.
        </Paragraph>
        
        <Paragraph>
          Beyond economics, it's a meditation on the dignity of labor. There is an inherent nobility in her daily toil that commands respect. A truly developed India requires a cultural reaffirmation of the dignity of all labor.
        </Paragraph>

        <StoryAnalysis title="The Nose-Jewel" author="C. Rajagopalachari" />
        <ImageBlock 
          src="https://images.unsplash.com/photo-1549468057-5ce7af8bbbf7?q=80&w=2070&auto=format&fit=crop" 
          alt="Sparrows" 
          caption="The blind pursuit of wealth poisons the mind and destabilizes the home." 
        />
        
        <Paragraph>
          *The Nose-Jewel* uses an allegory of sparrows to contrast nature’s wisdom with human avarice. Rajaji’s warning is razor-sharp: the blind pursuit of wealth, divorced from ethics, leads to paranoia and decay. True development demands a model of sustainable growth that prioritizes human well-being.
        </Paragraph>

        <PullQuote>
          "A prosperous future is not one where we possess everything we desire, but one where we have the wisdom to desire only what sustains us."
        </PullQuote>
        
        <StoryAnalysis title="A Horse and Two Goats" author="R.K. Narayan" />
        <Paragraph>
          R.K. Narayan’s *A Horse and Two Goats* captures the comedic yet profound collision between global capital and rural India. It challenges a developing India to engage with the world confidently, welcoming partnerships but doing so on our own terms.
        </Paragraph>
        
        <Paragraph>
          Despite his poverty, the protagonist Muni possesses an inherent dignity linked to his land and ancestors. As we pave new highways, the monumental heritage of our past—our languages, arts, and philosophies—must stand resolute. While India is ready to trade with the world, its ancient heritage is never simply for sale.
        </Paragraph>
      </div>
    </section>
  );
}
