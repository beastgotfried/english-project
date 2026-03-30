import { ChapterHeader } from '../components/ChapterHeader';
import { SectionHeading } from '../components/SectionHeading';
import { Paragraph } from '../components/Paragraph';
import { PullQuote } from '../components/PullQuote';
import { ImageBlock } from '../components/ImageBlock';

export function Chapter1() {
  return (
    <section>
      <ChapterHeader number="ONE" title="Literature as the Blueprint" subtitle="For a Developed Nation" />
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <ImageBlock 
          src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2070&auto=format&fit=crop" 
          alt="Ancient manuscript" 
          caption="The intersection of ancient wisdom and modern aspiration." 
        />
        
        <SectionHeading number="1.1" title="The Vision of 2047 Through the Lens of the Past" />
        <Paragraph dropcap>
          The year 2047 marks a century of India’s independence—a milestone envisioned not just as a chronological triumph, but as the realization of Viksit Bharat, a fully developed nation. Yet, the blueprint for our future is inextricably tied to the ink of our past. To understand where we are going, we must consult the architects of our cultural consciousness: our classic storytellers.
        </Paragraph>

        <Paragraph>
          Why does classic Indian literature matter to a futuristic, technology-driven vision? Because while economic policies and technological advancements dictate the framework of a state, literature captures the immutable heartbeat of its people. The stories penned by literary giants like Prem Chand, C. Rajagopalachari, and an array of regional visionaries are not merely historical artifacts. They are living repositories of the Indian ethos.
        </Paragraph>
        
        <PullQuote>
          "To build a Viksit Bharat, we must look back to our texts to ensure that our rapid modernization is anchored securely by our timeless cultural heritage."
        </PullQuote>
        
        <SectionHeading number="1.1.2" title="Defining Development: Beyond Infrastructure" />
        <Paragraph>
          True development extends far beyond the physical infrastructure of bridges, highways, and smart cities; it fundamentally relies on the cultivation of human capital. What good is a prosperous, technologically advanced society if it loses its capacity for empathy, moral resilience, and ethical grounding?
        </Paragraph>
        
        <ImageBlock 
          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop" 
          alt="Elder hands" 
          caption="Human values breathe life into the soul of a nation." 
        />
        
        <SectionHeading number="1.2" title='The Thematic Pillars: "Virasat bhi, Vikas bhi"' />
        <Paragraph>
          The journey toward a fully developed India is supported by four foundational pillars, each deeply reflected in the nation’s literary heritage:
        </Paragraph>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-[#D4C4B0]">
            <h4 className="font-serif font-bold text-xl mb-3 text-[#1E3A5F]">RESILIENCE</h4>
            <p className="text-sm opacity-80 leading-relaxed">Collective national strength is forged through individual struggles. Harnessing historical challenges to fuel Atmanirbharta.</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-[#D4C4B0]">
            <h4 className="font-serif font-bold text-xl mb-3 text-[#1E3A5F]">CULTURAL ROOTS</h4>
            <p className="text-sm opacity-80 leading-relaxed">The village remains the spiritual center. True development requires an unwavering connection to ancestral wisdom and dignity of labor.</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-[#D4C4B0]">
            <h4 className="font-serif font-bold text-xl mb-3 text-[#1E3A5F]">LOCAL EMPOWERMENT</h4>
            <p className="text-sm opacity-80 leading-relaxed">Local hands create global strength. Empowering the agrarian base and local artisans creates a self-sustaining economy.</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-[#D4C4B0]">
            <h4 className="font-serif font-bold text-xl mb-3 text-[#1E3A5F]">EMPATHY</h4>
            <p className="text-sm opacity-80 leading-relaxed">Sabka Saath, Sabka Vikas. Compassion creates prosperity and is measured by cross-cultural understanding and communal harmony.</p>
          </div>
        </div>

        <SectionHeading number="1.3" title="The Master Storytellers as Visionaries" />
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
