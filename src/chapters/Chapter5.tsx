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
        <ImageBlock 
          src="https://images.unsplash.com/photo-1488521787920-7a48d80ef812?q=80&w=2070&auto=format&fit=crop" 
          alt="Community" 
          caption="Economic prosperity, if confined to a privileged few, is inherently fragile." 
        />
        
        <SectionHeading number="5.1" title="Rethinking Wealth: Inclusive Growth" />
        <Paragraph dropcap>
          As India marches toward its centenary, the metrics of success are often quantified in trillion-dollar GDP targets. However, the guiding philosophy of a Viksit Bharat demands a fundamental re-evaluation. *Sabka Saath, Sabka Vikas* is an acknowledgment that economic prosperity is fragile if it leaves the vulnerable in the shadows.
        </Paragraph>
        
        <PullQuote>
          "A society’s ultimate net worth is calculated by the well-being of its most marginalized members."
        </PullQuote>
        
        <StoryAnalysis title="The Price of Flowers" author="Prabhat Kumar Mukhopadhyay" />
        <Paragraph>
          Set in London, this story follows an Indian narrator and a poverty-stricken British family. It strips away the labels of “colonizer” and “colonized” to focus on shared human vulnerability. For a developing India, this perfectly encapsulates the ethos of *Vasudhaiva Kutumbakam*.
        </Paragraph>
        
        <Paragraph>
          The story is a vital lesson in philanthropy. A Viksit Bharat must cultivate a culture where those with resources feel a moral compulsion to give back—not for acclaim, but for the spiritual prosperity that comes from uplifting another.
        </Paragraph>

        <StoryAnalysis title="Brother Abdul Rahman" author="Amarlal Hingorani" />
        <ImageBlock 
          src="https://images.unsplash.com/photo-1594818821917-c14820170bb6?q=80&w=2070&auto=format&fit=crop" 
          alt="Diversity" 
          caption="Compassion operates on the supreme universal truth that love is the highest law." 
        />
        
        <Paragraph>
          Abdul Rahman represents the ultimate antidote to communalism. He views every living creature as an extension of the divine. India’s staggering diversity is its greatest strength, but national integration is non-negotiable. While laws maintain order, compassion creates unity.
        </Paragraph>

        <StoryAnalysis title="Idgah" author="Prem Chand" />
        <Paragraph>
          Prem Chand’s *Idgah* is a masterclass in long-term moral investment. Young Hamid chooses to buy iron tongs for his grandmother instead of fleeting toys for himself. Building a Viksit Bharat requires similar maturity—investing in sustainable “tongs” like healthcare and education.
        </Paragraph>
        
        <PullQuote>
          "The ultimate measure of a society is how its youngest citizens treat its oldest."
        </PullQuote>

        <Paragraph>
          The soul of a developed India will not be found in its bank vaults, but in the deep, empathetic bonds shared across its kitchen fires.
        </Paragraph>
      </div>
    </section>
  );
}
