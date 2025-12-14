import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { 
  Scale, 
  Users, 
  BrainCircuit, 
  Gavel, 
  ArrowDown, 
  Copyright, 
  Zap, 
  Palette, 
  Lock,
  MessageSquare,
  TrendingUp,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  FileText
} from 'lucide-react';

// --- Visual Components ---

const HeroVisual = () => (
  <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
    {/* Left half - Cinematic */}
    <div className="absolute inset-y-0 left-0 w-1/2 bg-slate-900 overflow-hidden">
      <img 
        src="elsa-original.png"
        alt="Original Disney Creation" 
        className="object-cover w-full h-full opacity-90 transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      <div className="absolute bottom-10 left-10 text-white font-heading font-bold text-3xl opacity-90 drop-shadow-lg">
        Original<br/>Creation
      </div>
    </div>
    
    {/* Right half - AI Generated Glitch */}
    <div className="absolute inset-y-0 right-0 w-1/2 bg-denim overflow-hidden">
      <img 
        src="elsa-ai-23.png"
        alt="AI Generated Art" 
        className="object-cover w-full h-full opacity-90 mix-blend-normal hue-rotate-15 transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
      <div className="absolute top-10 right-10 text-white font-heading font-bold text-3xl opacity-90 text-right drop-shadow-lg">
        Generated<br/>Output
      </div>
    </div>
    
    {/* Divider */}
    <div className="absolute inset-y-0 left-1/2 w-1 bg-white/50 backdrop-blur-md z-10"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center z-20 shadow-lg text-denim font-bold text-xl">
      VS
    </div>
  </div>
);

const DiffusionVisual = () => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 my-8">
    <h3 className="text-center font-heading font-semibold text-denim mb-6">How Diffusion Models "Learn"</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { step: "Step 1: Noise", desc: "Pure random static", blur: "blur-xl", opacity: "opacity-20" },
        { step: "Step 2: Shapes", desc: "Patterns emerge", blur: "blur-md", opacity: "opacity-50" },
        { step: "Step 3: Structure", desc: "Recognizable forms", blur: "blur-sm", opacity: "opacity-80" },
        { step: "Step 4: Image", desc: "Final output", blur: "blur-[1px]", opacity: "opacity-100" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-full aspect-square rounded-lg overflow-hidden bg-slate-200 relative mb-3 border border-slate-200">
             {/* Using a reliable Unsplash image of a cat for the diffusion process */}
             <div className="absolute inset-0 bg-slate-300"></div>
             <img 
                src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=400&q=80" 
                className={`w-full h-full object-cover transition-all duration-500 ${item.blur} ${item.opacity}`} 
                alt={`Diffusion process ${item.step}`}
                loading="lazy"
             />
             {i === 0 && <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-80 mix-blend-overlay"></div>}
          </div>
          <p className="font-bold text-denim text-sm">{item.step}</p>
          <p className="text-xs text-slate-500">{item.desc}</p>
        </div>
      ))}
    </div>
    <div className="mt-6 flex items-center justify-between px-4 py-3 bg-slate-50 rounded-full text-xs md:text-sm font-mono text-slate-600 border border-slate-200 overflow-x-auto">
        <span>Text Prompt</span>
        <span>→</span>
        <span>Encoder</span>
        <span>→</span>
        <span className="font-bold text-accent-purple">Diffusion Process</span>
        <span>→</span>
        <span>Decoder</span>
        <span>→</span>
        <span>Final Image</span>
    </div>
  </div>
);

// --- Content Components ---

const PaperContent = () => (
    <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        <div className="border-b border-slate-200 pb-8 mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                <FileText size={14}/> Academic Analysis
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-denim">Generative AI v. Copyright</h2>
            <p className="text-slate-500 mt-2 font-serif italic">A Deep Dive into the Disney & Universal v. Midjourney Litigation</p>
        </div>

        <div className="prose prose-slate prose-lg max-w-none font-sans text-slate-700 space-y-8 leading-relaxed text-justify">
            
            {/* I. Introduction */}
            <div>
                <h3 className="text-xl font-heading font-bold text-denim mb-4">I. Introduction</h3>
                
                <h4 className="text-lg font-bold text-slate-800 mb-2">1. Background: Generative AI Meets the Creative Industry</h4>
                <p>
                    The rapid advancement of generative artificial intelligence (AI) is fundamentally reshaping the creative industry. Image-generation models such as Midjourney, Stable Diffusion, and DALL·E are now widely used in film pre-visualization, advertising design, game concept art, and digital marketing workflows. While these tools significantly reduce production costs and lower barriers to entry for creative work, they also place unprecedented pressure on existing copyright frameworks. As Yang and Zhang argue, the future trajectory of generative AI depends on two unresolved copyright questions: whether the use of copyrighted works for AI training qualifies as fair use, and whether AI-generated outputs themselves should be eligible for copyright protection (Yang & Zhang, 2024). These issues challenge long-standing assumptions about authorship, originality, and ownership that underpin copyright law in creative production.
                </p>
                <p className="mt-4">
                    This tension is amplified by the technical realities of generative AI systems, which require vast quantities of training data—much of it copyrighted—to function effectively. As Desai and Riedl emphasize, breakthroughs in large-scale AI models have intensified the long-standing clash between copyright law and computer science, particularly as commercial AI systems increasingly rely on copyrighted material scraped from the open internet (Desai & Riedl, 2024). The gap between rapidly evolving technological capabilities and comparatively slow-moving legal doctrine suggests that copyright law may not yet be fully equipped to address the realities of generative AI in creative industries.
                </p>

                <h4 className="text-lg font-bold text-slate-800 mt-6 mb-2">2. Importance: Why the Case Matters</h4>
                <p>
                    Against this backdrop, the lawsuit jointly filed by Disney and Universal against Midjourney represents a pivotal moment in the legal governance of generative AI. This case marks the first time two major Hollywood studios have collectively challenged a generative AI company, alleging that its model training practices and image outputs unlawfully exploit highly commercialized intellectual properties such as Mickey Mouse, Elsa, and the Minions. Unlike earlier disputes involving individual artists or publishers, this litigation directly targets the industrial-scale use of copyrighted visual material and the commercial deployment of AI systems trained on such content.
                </p>
                <p className="mt-4">
                    The significance of the case lies not only in its legal novelty, but also in its economic stakes. Character-based intellectual property forms the foundation of Disney and Universal’s licensing-driven business models, supporting global markets in film, merchandise, and theme parks. By challenging Midjourney’s ability to generate images that closely resemble protected characters and visual styles, the plaintiffs raise broader concerns about derivative works, brand dilution, and the erosion of intellectual property control in the age of generative AI. As a result, the case has the potential to reshape how copyright law mediates the relationship between AI developers and rights holders across the creative economy.
                </p>
            </div>

            {/* II. Technology & Legal Background */}
            <div>
                <h3 className="text-xl font-heading font-bold text-denim mb-4 pt-4 border-t border-slate-100">II. Technology & Legal Background</h3>
                <p className="italic text-slate-500 mb-4">
                    Understanding how generative AI models operate and how copyright law traditionally conceptualizes copying, transformation, and derivative works is essential to evaluating the legal issues raised in the lawsuit.
                </p>

                <h4 className="text-lg font-bold text-slate-800 mb-2">1. How Generative AI Models Work</h4>
                <p>
                    Generative AI image models are trained on massive datasets that include images sourced from the public web, many of which are protected by copyright. During training, however, these systems do not store or retrieve individual images. Instead, deep learning models learn statistical representations by adjusting numerical parameters, or weights, that encode patterns across the training data (LeCun et al., 2015). In diffusion-based models, such as those underlying Midjourney, training occurs in a compressed latent space, further distancing learned representations from any single image (Rombach et al., 2022).
                </p>
                <p className="mt-4">
                    When generating an output, the model does not copy an existing image. Rather, it begins with random noise and incrementally produces an image that aligns probabilistically with patterns learned during training. Nonetheless, research has shown that diffusion models can, in certain circumstances, reproduce or closely approximate specific training images, a phenomenon known as memorization (Carlini et al., 2023). From a legal perspective, this possibility complicates claims that AI-generated images are always wholly novel, particularly when outputs resemble protected characters or recognizable visual elements.
                </p>

                <h4 className="text-lg font-bold text-slate-800 mt-6 mb-2">2. Copyright Framework Relevant to AI</h4>
                <p>
                    U.S. copyright law grants rights holders exclusive rights of reproduction and preparation of derivative works (17 U.S.C. § 106). These rights frame the central legal questions in this case: whether the use of copyrighted images during AI training constitutes unauthorized copying, and whether AI-generated images that closely resemble protected characters qualify as infringing derivative works.
                </p>
                <p className="mt-4">
                    Generative AI developers often invoke the fair use doctrine as a defense. Fair use requires courts to weigh four factors, including the purpose and character of the use, the nature of the copyrighted work, the amount used, and the effect on the potential market (Campbell v. Acuff-Rose Music, Inc., 1994). These factors are particularly contested in the AI context, where training and outputs are typically commercial and often involve highly creative works. Recent Supreme Court precedent has further narrowed the scope of “transformative use,” emphasizing that commercial uses competing in the same market as the original warrant closer scrutiny (Andy Warhol Foundation v. Goldsmith, 2023).
                </p>

                <h4 className="text-lg font-bold text-slate-800 mt-6 mb-2">3. Ongoing Legal Uncertainty</h4>
                <p>
                    Despite the rapid adoption of generative AI, U.S. copyright law provides no AI-specific statutory guidance on the legality of training or output similarity. Courts remain divided on how existing doctrines apply to large-scale computational uses of copyrighted works, leaving significant legal uncertainty (Congressional Research Service, 2023). Within this context, Disney & Universal v. Midjourney serves as a critical test case that may clarify how copyright law addresses AI training and AI-generated images in character-driven creative industries.
                </p>
            </div>

            {/* IV. Impact Analysis */}
            <div>
                <h3 className="text-xl font-heading font-bold text-denim mb-4 pt-4 border-t border-slate-100">IV. Impact Analysis</h3>
                <p>
                    The outcome of Disney & Universal v. Midjourney will have far-reaching implications not only for the parties involved, but also for the broader creative economy, the AI industry, and the public’s access to creative tools. By addressing whether large-scale AI training and character-like outputs infringe copyright, the case sits at the intersection of economic interests, technological innovation, and cultural production.
                </p>

                <h4 className="text-lg font-bold text-slate-800 mt-6 mb-2">1. Impact on Hollywood and Copyright Holders</h4>
                <p>
                    For major studios such as Disney and Universal, intellectual property—particularly character-based IP—forms the backbone of their business models. Licensing revenues derived from film franchises, merchandise, and theme parks represent a multi-billion-dollar industry and depend heavily on the studios’ ability to control how iconic characters are reproduced and commercialized (The Walt Disney Company, 2024). From this perspective, AI image generators that allow users to create near-identical depictions of protected characters without authorization pose a direct economic threat.
                </p>
                <p className="mt-4">
                    The studios argue that generative AI systems effectively bypass established licensing markets by enabling the mass production of character imagery without compensation to rights holders. News coverage of the lawsuit emphasizes that the plaintiffs view such outputs as market substitutes for licensed artwork, undermining both present and future licensing opportunities (Reuters, 2025). If courts were to endorse this view, the case could strengthen copyright holders’ ability to police AI-generated look-alikes and preserve the economic value of character IP.
                </p>
                <p className="mt-4">
                    Beyond Disney and Universal, the case may also set a precedent for other major studios, including Warner Bros. and Sony, which rely on similar licensing-driven models. As commentators have noted, a ruling in favor of the studios could encourage further litigation across the entertainment industry, signaling that courts are willing to scrutinize AI-generated content that closely resembles protected works (Perrigo, 2025).
                </p>

                <h4 className="text-lg font-bold text-slate-800 mt-6 mb-2">2. Impact on the AI Industry</h4>
                <p>
                    For AI companies, the most immediate implication of the case concerns the legality and cost of training data. If courts determine that training on copyrighted images without permission constitutes infringement, AI developers may be required to license training datasets. According to the Congressional Research Service (CRS), such a shift could fundamentally alter existing AI business models by increasing development costs and limiting access to large-scale data (Congressional Research Service [CRS], 2023).
                </p>
                <p className="mt-4">
                    Rising compliance and licensing costs could, in turn, accelerate market consolidation within the AI industry. Large technology firms with substantial financial resources—such as Google or OpenAI—would be better positioned to absorb licensing expenses, while smaller startups could struggle to remain competitive. U.S. regulators have already expressed concern that AI-related compliance burdens may reinforce the dominance of existing market leaders, reducing competition and innovation (Federal Trade Commission, 2023).
                </p>
                <p className="mt-4">
                    Open-source and community-driven AI projects may face even greater risks. Scholars have warned that licensing regimes designed around commercial actors could unintentionally marginalize open-source models, such as Stable Diffusion, which rely on broad access to training data and decentralized development (Samuelson, 2023). As a result, the case has implications not only for commercial AI firms but also for the future diversity of AI development ecosystems.
                </p>

                <h4 className="text-lg font-bold text-slate-800 mt-6 mb-2">3. Impact on Creators and Designers</h4>
                <p>
                    The case also has significant consequences for individual creators, including illustrators, concept artists, and designers. Surveys of creative workers indicate widespread concern that generative AI tools threaten job security by automating tasks traditionally performed by human artists (CREAATIF, 2023). For these professionals, a ruling that limits unlicensed AI training could be seen as strengthening their bargaining position and reinforcing the value of human-created work.
                </p>
                <p className="mt-4">
                    At the same time, generative AI offers productivity gains that many creative professionals already rely on, particularly in industries such as filmmaking, advertising, and digital marketing. Industry reports suggest that AI tools are increasingly used for storyboarding, concept development, and rapid visual iteration, significantly lowering production costs and timelines (McKinsey Global Institute, 2023). From this perspective, overly restrictive legal outcomes could constrain tools that have become embedded in creative workflows.
                </p>
                <p className="mt-4">
                    This tension is especially relevant in communication and media industries, where professionals are expected to balance efficiency, originality, and ethical responsibility. The outcome of the case may influence how designers and marketers assess the legal risks of using AI-generated visuals, shaping professional norms around attribution, originality, and intellectual property.
                </p>

                <h4 className="text-lg font-bold text-slate-800 mt-6 mb-2">4. Impact on Society and the Public Interest</h4>
                <p>
                    Beyond industry stakeholders, the case raises broader questions about public access to creative tools and cultural participation. Generative AI has been widely praised for democratizing creativity by lowering barriers to entry and enabling non-experts to produce high-quality visual content (Eloundou et al., 2023). Limiting AI capabilities through strict copyright enforcement could reduce these benefits, particularly for independent creators and small organizations.
                </p>
                <p className="mt-4">
                    At the same time, unrestricted AI image generation poses societal risks, including misinformation, deepfakes, and the unauthorized appropriation of cultural identities. International policy organizations have warned that generative AI can undermine information integrity and public trust if left unregulated (OECD, 2024). Ethical concerns surrounding representation, authorship, and consent further complicate the public interest calculus (Floridi et al., 2018).
                </p>
                <p className="mt-4">
                    Ultimately, Disney & Universal v. Midjourney highlights the challenge of balancing innovation with meaningful protection for creators and rights holders. Rather than framing the issue as a binary choice between technological progress and copyright enforcement, the case underscores the need for nuanced legal and policy approaches that reflect the complex social and economic impacts of generative AI.
                </p>
            </div>
        </div>

        {/* References */}
        <div className="mt-12 pt-8 border-t-2 border-slate-100 bg-slate-50/50 -mx-8 -mb-8 p-8 rounded-b-2xl text-sm text-slate-500">
            <h5 className="font-heading font-bold text-slate-700 mb-4 uppercase text-xs tracking-wider">References</h5>
            <ul className="space-y-3 font-mono text-xs break-words">
                <li>Yang, S. A., & Zhang, A. H. (2024). Generative AI and Copyright: A Dynamic Perspective. https://doi.org/10.48550/arxiv.2402.17801</li>
                <li>Desai, D. R., & Riedl, M. (2024). BETWEEN COPYRIGHT AND COMPUTER SCIENCE: THE LAW AND ETHICS OF GENERATIVE AI. Northwestern Journal of Technology and Intellectual Property, 22(1), 55–108.</li>
                <li>LeCun, Y., Bengio, Y. & Hinton, G. Deep learning. Nature 521, 436–444 (2015). https://doi.org/10.1038/nature14539</li>
                <li>Rombach, R., Blattmann, A., Lorenz, D., Esser, P., & Ommer, B. (2022). High-Resolution Image Synthesis with Latent Diffusion Models. Proceedings (IEEE Computer Society Conference on Computer Vision and Pattern Recognition. Online), 10674–10685.</li>
                <li>Carlini, N., Hayes, J., Nasr, M., Jagielski, M., Sehwag, V., Tramèr, F., Balle, B., Ippolito, D., & Wallace, E. (2023). Extracting Training Data from Diffusion Models. https://doi.org/10.48550/arxiv.2301.13188</li>
                <li>Campbell v. Acuff-Rose Music, Inc., 510 U.S. 569 (1994).</li>
                <li>Andy Warhol Foundation for the Visual Arts, Inc. v. Goldsmith, 598 U.S. (2023).</li>
                <li>Congressional Research Service. (2023). Generative Artificial Intelligence and Copyright Law (LSB10922).</li>
                <li>The Walt Disney Company. (2024). Fiscal Year 2024 Annual Financial Report.</li>
                <li>Reuters. (2025). Disney and Universal sue AI firm Midjourney over copyright.</li>
                <li>Perrigo, B. (2025). The Hollywood vs. AI Legal Battle Is Just Beginning. Time.</li>
                <li>Federal Trade Commission. (2023). Generative AI Raises Competition Concerns.</li>
                <li>Samuelson, P. (2023). Generative AI meets copyright. Science, 381(6654), 158-161.</li>
                <li>CREAATIF. (2023). Survey on AI in the Creative Industries.</li>
                <li>McKinsey Global Institute. (2023). The economic potential of generative AI: The next productivity frontier.</li>
                <li>Eloundou, T., Manning, S., Mishkin, P., & Rock, D. (2023). GPTs are GPTs: An early look at the labor market impact potential of large language models.</li>
                <li>OECD. (2024). Artificial Intelligence and Responsible Business Conduct.</li>
                <li>Floridi, L., Cowls, J., Beltrametti, M., et al. (2018). AI4People—An Ethical Framework for a Good AI Society. Minds and Machines, 28, 689–707.</li>
            </ul>
        </div>
    </div>
);

// --- Main App Component ---

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Intersection Observer to update active nav link
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.4 });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen bg-bg-dot-pattern">
      <Navbar activeSection={activeSection} />

      {/* 1. Hero Section */}
      <Section id="hero" className="bg-paper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-bold tracking-wide">
              CASE STUDY 2025
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-denim leading-tight">
              When Mickey Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-denim to-accent-purple">Midjourney</span>
            </h1>
            <p className="font-heading text-xl text-slate-700 font-medium">
              How a single lawsuit is forcing Hollywood and AI companies to rethink creativity, ownership, and fairness.
            </p>
            <div className="text-lg text-slate-600 leading-relaxed max-w-lg space-y-4">
              <p>
                The widespread adoption of AI will inevitably bring new legal challenges, particularly in areas such as copyright, intellectual property, and creative ethics. AI-generated content is often trained on and derived from large volumes of online resources, raising questions about the lawful use of original works and the ownership of resulting content.
              </p>
              <p>
                In June 2025, Disney, Universal and other major studios sued AI image generator Midjourney in federal court in Los Angeles. 
                They say the tool creates "innumerable" copies of characters like Darth Vader, Elsa and the Minions, turning decades of investment into what they call a "bottomless pit of plagiarism."
              </p>
              <p>
                This site unpacks what the case is about, how Midjourney actually works, who is affected, and what paths forward might exist for both AI developers and creative industries.
              </p>
            </div>
            
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 text-denim font-bold select-none cursor-default">
                Scroll to explore <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </Section>

      {/* 2. Case Snapshot */}
      <Section id="case" className="bg-slate-50">
        <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-denim mb-4">The Case in 60 Seconds</h2>
            <div className="h-1 w-20 bg-accent-pink mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-denim">
                <div className="w-12 h-12 bg-denim/10 rounded-full flex items-center justify-center mb-6 text-denim">
                    <Scale />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-800 mb-4">Who is suing whom?</h3>
                <div className="space-y-4 text-sm text-slate-600">
                    <p><strong className="text-denim block mb-1">Plaintiffs:</strong> Disney Enterprises, Marvel, Lucasfilm, Twentieth Century Fox, Universal, DreamWorks, etc.</p>
                    <p><strong className="text-denim block mb-1">Defendant:</strong> Midjourney Inc., a San Francisco–based AI image generator with ~21M users and $300M revenue in 2024.</p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-accent-purple">
                <div className="w-12 h-12 bg-accent-purple/10 rounded-full flex items-center justify-center mb-6 text-accent-purple">
                    <Copyright />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-800 mb-4">Key Allegations</h3>
                <ul className="space-y-3 text-sm text-slate-600 list-disc list-outside pl-4">
                    <li>Midjourney scraped "millions of copyrighted images" from the studios’ libraries without permission to train its model.</li>
                    <li>The tool lets users generate highly specific images of protected characters (like Elsa or Darth Vader) from simple prompts, functioning as a "virtual vending machine" for unlicensed copies.</li>
                </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-accent-pink">
                <div className="w-12 h-12 bg-accent-pink/10 rounded-full flex items-center justify-center mb-6 text-accent-pink">
                    <Gavel />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-800 mb-4">What the studios want</h3>
                <ul className="space-y-3 text-sm text-slate-600 list-disc list-outside pl-4">
                    <li>Preliminary injunction to stop Midjourney from offering services without effective copyright protections.</li>
                    <li>Statutory damages up to $150,000 per infringed work, plus profits.</li>
                </ul>
            </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute left-0 top-1/2 w-full h-0.5 bg-slate-200 -z-0"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-xs md:text-sm">
                <div className="flex flex-col items-center gap-2 bg-white p-2 z-10 text-center">
                    <span className="w-4 h-4 rounded-full bg-denim"></span>
                    <span className="font-bold text-denim">Jun 11, 2025</span>
                    <span className="text-slate-500">Lawsuit filed in<br/>C.D. California</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white p-2 z-10 text-center">
                    <span className="w-4 h-4 rounded-full bg-accent-purple"></span>
                    <span className="font-bold text-accent-purple">Aug 6-8, 2025</span>
                    <span className="text-slate-500">Midjourney files Answer,<br/>denying liability</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white p-2 z-10 text-center">
                    <span className="w-4 h-4 rounded-full bg-slate-400"></span>
                    <span className="font-bold text-slate-500">Sept 2025</span>
                    <span className="text-slate-500 max-w-[200px]">Other suits (artists, later Warner Bros) follow</span>
                </div>
                <div className="flex flex-col items-center gap-2 bg-white p-2 z-10 text-center">
                    <span className="w-4 h-4 rounded-full bg-accent-pink"></span>
                    <span className="font-bold text-accent-pink">Dec 11, 2025</span>
                    <span className="text-slate-500 max-w-[200px]">Disney & OpenAI announce $1B deal, licensing Sora</span>
                </div>
            </div>
        </div>
      </Section>

      {/* 3. How AI Works */}
      <Section id="tech" className="bg-paper">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="font-heading text-4xl font-bold text-denim mb-6">From Noise to Image: <br/><span className="text-accent-purple">What the AI Is Actually Doing</span></h2>
                <div className="space-y-6 text-lg text-slate-600">
                    <p>
                        Midjourney doesn’t store a folder of Disney or Universal images and pull them out on demand. Instead, it learns <strong>patterns</strong> from billions of pictures during training.
                    </p>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-3">
                        <p>1. When you type a prompt like "a heroic space cat in a spacesuit," the system turns your text into numbers the model understands (<strong>encoding</strong>).</p>
                        <p>2. Starts from pure <strong>visual noise</strong>.</p>
                        <p>3. Gradually removes the noise while adding structure that matches patterns it learned during training (<strong>diffusion</strong>).</p>
                        <p>4. Turns that internal representation back into a final image (<strong>decoding</strong>).</p>
                    </div>
                    <p className="text-base italic bg-denim/5 p-4 rounded-lg border-l-4 border-denim">
                        "The problem is: if its training data contained lots of Elsa-like dresses, Vader-like helmets, or Minion-style shapes, the patterns it produces can drift close to those characters — even when the company says it never 'stores' them."
                    </p>
                </div>
            </div>
            
            <div>
                <DiffusionVisual />
                
                <div className="mt-8 bg-slate-800 text-white p-6 rounded-2xl">
                    <h4 className="font-heading font-bold mb-2 flex items-center gap-2">
                        <MessageSquare size={20} className="text-accent-pink"/>
                        So is it copying, or creating?
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm opacity-90">
                        <div className="p-3 bg-white/10 rounded-lg">
                            <span className="block font-bold text-accent-pink mb-1">Copying</span>
                            If outputs match a frame from Frozen almost exactly.
                        </div>
                        <div className="p-3 bg-white/10 rounded-lg">
                            <span className="block font-bold text-green-400 mb-1">Creating</span>
                            If it only captures general style (big eyes, soft colors) without specific details.
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </Section>

      {/* 4. Legal Issues */}
      <Section id="legal" className="bg-white">
        <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-denim mb-4">What Exactly Are They Fighting About?</h2>
            <div className="h-1 w-20 bg-accent-purple mx-auto rounded-full"></div>
        </div>

        {/* Legal Background */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8 text-slate-600 bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div>
                <h3 className="font-heading text-xl font-bold text-denim mb-3 flex items-center gap-2">
                    <Gavel className="w-5 h-5"/> Copyright Framework Relevant to AI
                </h3>
                <p className="leading-relaxed">
                    U.S. copyright law grants rights holders exclusive rights of reproduction and preparation of derivative works (17 U.S.C. § 106). These rights frame the central legal questions in this case: whether the use of copyrighted images during AI training constitutes unauthorized copying, and whether AI-generated images that closely resemble protected characters qualify as infringing derivative works.
                </p>
                <p className="mt-3 leading-relaxed">
                    Generative AI developers often invoke the fair use doctrine as a defense. Fair use requires courts to weigh four factors, including the purpose and character of the use, the nature of the copyrighted work, the amount used, and the effect on the potential market (Campbell v. Acuff-Rose Music, Inc., 1994). These factors are particularly contested in the AI context, where training and outputs are typically commercial and often involve highly creative works.
                </p>
            </div>
            <div className="pt-6 border-t border-slate-200">
                <h3 className="font-heading text-xl font-bold text-denim mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5"/> Ongoing Legal Uncertainty
                </h3>
                <p className="leading-relaxed">
                    Despite the rapid adoption of generative AI, U.S. copyright law provides no AI-specific statutory guidance on the legality of training or output similarity. Courts remain divided on how existing doctrines apply to large-scale computational uses of copyrighted works, leaving significant legal uncertainty (Congressional Research Service, 2023). Within this context, Disney & Universal v. Midjourney serves as a critical test case that may clarify how copyright law addresses AI training and AI-generated images in character-driven creative industries.
                </p>
            </div>
        </div>

        {/* Fair Use Factors Grid */}
        <div className="mb-16">
            <h3 className="font-heading text-2xl font-bold text-center text-denim mb-8">The Four Factors of Fair Use</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-yellow-400 h-full">
                    <div className="font-heading font-bold text-lg text-slate-800 mb-2">1. Purpose</div>
                    <p className="text-sm text-slate-600">Transformative uses help, but commercial services like Midjourney face higher scrutiny.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-red-400 h-full">
                    <div className="font-heading font-bold text-lg text-slate-800 mb-2">2. Nature of the Work</div>
                    <p className="text-sm text-slate-600">Creative works receive the strongest protection, making this factor favor the studios.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-orange-400 h-full">
                    <div className="font-heading font-bold text-lg text-slate-800 mb-2">3. Amount Used</div>
                    <p className="text-sm text-slate-600">Even partial copying can count against fair use if it captures the “heart” of iconic designs.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-red-500 h-full">
                    <div className="font-heading font-bold text-lg text-slate-800 mb-2">4. Market Effect</div>
                    <p className="text-sm text-slate-600">Often the most important factor. If AI outputs substitute for licensed character art, this strongly weighs against fair use.</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-denim/10 text-denim px-5 py-3 rounded-full text-sm font-bold border border-denim/20">
                    <BrainCircuit size={18} />
                    Fair use has no fixed formula — it always depends on context.
                </div>
            </div>
        </div>

        {/* The Conflict Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Studios */}
            <div className="bg-paper p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-denim text-white rounded-lg"><Lock size={20}/></div>
                    <div className="leading-tight">
                        <h3 className="font-heading text-xl font-bold text-denim">Studios' Claims</h3>
                        <span className="text-xs text-slate-500 font-bold uppercase">Direct & Secondary Infringement</span>
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Unlicensed Training</h4>
                        <p className="text-sm text-slate-600">The complaint says Midjourney copied "millions of copyrighted images" into its training set without consent.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Look-alike Outputs</h4>
                        <p className="text-sm text-slate-600">Users can get near-replicas of trademark characters with prompts like "Elsa from Frozen standing in the snow," which the studios say are unauthorized derivatives.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Business Model</h4>
                        <p className="text-sm text-slate-600">Midjourney charges subscriptions but doesn’t share revenue with the rights holders whose works trained the model.</p>
                    </div>
                </div>
                <blockquote className="mt-8 pt-6 border-t border-slate-200 italic text-slate-500 text-sm">
                    "Piracy is piracy, and the fact that it is done by an AI company does not make it any less illegal."
                    <footer className="not-italic font-bold text-slate-700 mt-2">– Disney’s Legal Director</footer>
                </blockquote>
            </div>

            {/* Right: Midjourney */}
            <div className="bg-paper p-8 rounded-2xl border border-slate-100 shadow-sm">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-accent-purple text-white rounded-lg"><BrainCircuit size={20}/></div>
                    <div className="leading-tight">
                        <h3 className="font-heading text-xl font-bold text-denim">Midjourney's Response</h3>
                        <span className="text-xs text-slate-500 font-bold uppercase">Fair Use & Innovation</span>
                    </div>
                </div>
                 <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Transformative Use</h4>
                        <p className="text-sm text-slate-600">Midjourney argues training is like an artist learning by studying many works; the model learns concepts, not copies.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Free Expression</h4>
                        <p className="text-sm text-slate-600">Its Answer says the studios’ theory would "chill lawful expression" and give big IP owners too much control over AI research.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 mb-1">Everyone benefits</h4>
                        <p className="text-sm text-slate-600">Some commentary notes that Disney itself is exploring generative tools internally, so studios want AI benefits but tighter rules when others use their IP.</p>
                    </div>
                </div>
            </div>
        </div>
      </Section>

      {/* 5. Who Is Affected */}
      <Section id="impact" className="bg-paper relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-denim/5 rounded-full blur-3xl -z-10"></div>

        <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-denim mb-4">Beyond the Courtroom: Who Has Skin in the Game?</h2>
            <div className="h-1 w-20 bg-accent-pink mx-auto rounded-full mb-6"></div>
            <p className="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed">
                The outcome of Disney & Universal v. Midjourney will have far-reaching implications not only for the parties involved, but also for the broader creative economy, the AI industry, and the public’s access to creative tools. By addressing whether large-scale AI training and character-like outputs infringe copyright, the case sits at the intersection of economic interests, technological innovation, and cultural production.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                {
                    icon: <Zap className="w-8 h-8 text-white"/>,
                    bg: "bg-denim",
                    title: "Hollywood Studios & Copyright Holders",
                    points: [
                      "Risk losing control over iconic characters if AI tools normalize 'free' look-alikes.",
                      "Beyond Disney and Universal, the case also set a precedent for other major studios, including Warner Bros. and Sony, which rely on similar licensing-driven models.",
                      "However, they also see AI as a way to cut costs in VFX, storyboarding, and marketing."
                    ],
                    impact: "Brand control vs Innovation"
                },
                {
                    icon: <BrainCircuit className="w-8 h-8 text-white"/>,
                    bg: "bg-accent-purple",
                    title: "Midjourney & AI Startups",
                    points: [
                      "Case may decide whether training on public web data is allowed by default or needs licensing.",
                      "If a generative AI output infringes a copyright in an existing work, both the AI user and the AI company could potentially be liable under current law. (For instance, the user might be directly liable for prompting the AI program to generate an infringing output. It may be challenging to analyze the user's liability in some cases, since the user might not have direct access to—or even be aware of—a copyrighted work purportedly infringed by an AI output. The AI company could also potentially face liability under the doctrine of 'vicarious infringement.' Vicarious infringement applies to defendants who have 'the right and ability to supervise the infringing activity' and 'a direct financial interest in such activities.')",
                      "A strict ruling could make small AI players unviable if they must negotiate expensive licenses for training sets. AI-related compliance burdens may reinforce the dominance of existing market leaders, reducing competition and innovation."
                    ],
                    impact: "Business survival vs Responsibility"
                },
                {
                    icon: <Palette className="w-8 h-8 text-white"/>,
                    bg: "bg-accent-pink",
                    title: "Artists & Creative Workers",
                    points: [
                      "According to researchers, more than two-thirds of workers in the creative industries believe AI has undermined their job security. Some already sued Midjourney and other AI tools for training on their art.",
                      "This case could either strengthen their arguments or push courts towards a more tech-friendly reading of fair use."
                    ],
                    impact: "Job security vs New tools"
                },
                {
                    icon: <Users className="w-8 h-8 text-white"/>,
                    bg: "bg-slate-500",
                    title: "Everyday Users & Fan Communities",
                    points: [
                      "If the studios win big, platforms might aggressively filter prompts, blocking fan-style art of famous characters. Strict copyright enforcement could limit public access to generative AI tools that have lowered barriers to creative participation.",
                      "If Midjourney’s defense wins, fans may enjoy more freedom, but official licensing models could be harder to enforce."
                    ],
                    impact: "Freedom vs Rules"
                }
            ].map((card, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                    <div className={`w-14 h-14 ${card.bg} rounded-2xl flex items-center justify-center mb-6 shadow-md`}>
                        {card.icon}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-800 mb-4 leading-tight">{card.title}</h3>
                    <ul className="space-y-3 mb-6 flex-grow">
                        {card.points.map((p, idx) => (
                            <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-1.5 flex-shrink-0"></span>
                                {p}
                            </li>
                        ))}
                    </ul>
                    <div className="pt-4 border-t border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        So What? <span className="text-denim block normal-case font-semibold text-sm mt-1">{card.impact}</span>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* 6. Futures */}
      <Section id="futures" className="bg-white">
        <h2 className="font-heading text-4xl font-bold text-denim mb-12 text-center">Three Possible Futures</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
                <div className="absolute inset-0 bg-denim rounded-2xl transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
                <div className="relative bg-white border-2 border-slate-100 rounded-2xl p-8 h-full">
                    <div className="inline-block px-3 py-1 bg-denim/10 text-denim text-xs font-bold rounded-full mb-4">SCENARIO A</div>
                    <h3 className="font-heading text-xl font-bold text-slate-800 mb-2">Studios Win Strong Injunction</h3>
                    <p className="text-sm text-slate-600 mb-4">Court says training and outputs are infringement unless licensed.</p>
                    <p className="text-sm text-slate-500">AI companies rush to sign expensive deals with big rights holders; smaller players disappear; open-source models risk being sidelined.</p>
                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-denim">
                        <ShieldAlert size={16}/> Safer for studios, heavier for AI
                    </div>
                </div>
            </div>

            <div className="group relative">
                <div className="absolute inset-0 bg-accent-purple rounded-2xl transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
                <div className="relative bg-white border-2 border-slate-100 rounded-2xl p-8 h-full">
                    <div className="inline-block px-3 py-1 bg-accent-purple/10 text-accent-purple text-xs font-bold rounded-full mb-4">SCENARIO B</div>
                    <h3 className="font-heading text-xl font-bold text-slate-800 mb-2">Midjourney Wins on Fair Use</h3>
                    <p className="text-sm text-slate-600 mb-4">Court treats training on public data as fair use if outputs are "sufficiently different."</p>
                    <p className="text-sm text-slate-500">Studios shift focus to contract and platform policies instead of copyright lawsuits.</p>
                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-accent-purple">
                        <TrendingUp size={16}/> Freer for AI, more risk for creators
                    </div>
                </div>
            </div>

            <div className="group relative">
                <div className="absolute inset-0 bg-accent-pink rounded-2xl transform translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
                <div className="relative bg-white border-2 border-slate-100 rounded-2xl p-8 h-full">
                    <div className="inline-block px-3 py-1 bg-accent-pink/10 text-accent-pink text-xs font-bold rounded-full mb-4">SCENARIO C</div>
                    <h3 className="font-heading text-xl font-bold text-slate-800 mb-2">Settlement + New Models</h3>
                    <p className="text-sm text-slate-600 mb-4">Case never reaches a clean doctrinal decision.</p>
                    <p className="text-sm text-slate-500">Parties settle with revenue-sharing or opt-in licensing, and the real "law" emerges through private deals and industry standards.</p>
                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-accent-pink">
                        <Scale size={16}/> Messy but maybe most realistic
                    </div>
                </div>
            </div>
        </div>
      </Section>

      {/* 7. Recommendations */}
      <Section id="recommendations" className="bg-denim text-white">
        <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-12 text-center">Our Recommendations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                <div className="space-y-4">
                    <div className="flex justify-center md:justify-start">
                        <div className="p-3 bg-white/10 rounded-xl"><BrainCircuit/></div>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-accent-pink">For AI Companies</h3>
                    <ul className="text-sm text-slate-200 opacity-90 space-y-2 list-disc list-inside">
                        <li>Adopt transparent but protected training data reporting: high-level categories and key sources instead of raw datasets.</li>
                        <li>Offer opt-out and paid opt-in programs for major rights holders and individual artists.</li>
                        <li>Build stronger prompt filters and output detectors for obvious character clones.</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-center md:justify-start">
                        <div className="p-3 bg-white/10 rounded-xl"><Copyright/></div>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-accent-purple">For Rights Holders</h3>
                    <ul className="text-sm text-slate-200 opacity-90 space-y-2 list-disc list-inside">
                        <li>Experiment with official "licensed AI packs": paid bundles that allow limited use of characters for fan creators and indie studios. Disney is already testing licensing-based AI partnerships (with OpenAI)—suggesting a market path alongside litigation.</li>
                        <li>Use lawsuits strategically to set boundaries, but avoid framing all AI use as "piracy," which can alienate audiences and creators.</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-center md:justify-start">
                        <div className="p-3 bg-white/10 rounded-xl"><Gavel/></div>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-blue-200">For Policymakers & Courts</h3>
                    <ul className="text-sm text-slate-200 opacity-90 space-y-2 list-disc list-inside">
                        <li>Clarify whether AI training counts as fair use, maybe distinguishing between non-commercial research and large-scale commercial products.</li>
                        <li>Encourage industry standards for documentation and audit trails in training pipelines.</li>
                        <li>Support funding for artists’ unions and legal aid in AI-related disputes, not just big corporate plaintiffs.</li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
                <p className="text-lg md:text-xl font-medium leading-relaxed">
                    "Instead of choosing between <span className="text-accent-pink font-bold">stopping AI</span> and <span className="text-accent-purple font-bold">letting it run free</span>, this case invites a more nuanced path that balances innovation with meaningful protection."
                </p>
            </div>
        </div>
      </Section>
      
      {/* 8. Full Paper */}
      <Section id="paper" className="bg-slate-50">
        <PaperContent />
      </Section>

      {/* 9. About */}
      <Section id="about" className="bg-paper border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl font-bold text-slate-800 mb-6">About This Project</h2>
            <div className="prose prose-slate mx-auto">
                <p className="text-slate-600 mb-6">
                    This site was created as a final project for a course on Digital Media and Law by Lele&Rosie. Our goal was to turn a traditional research paper into an accessible explainer site for classmates who are not lawyers or engineers, but who will work with AI in their future communication and media careers.
                </p>
                <div className="flex justify-center gap-6 mb-6">
                   <a href="https://www.linkedin.com/in/yingcheng-rosie-wang-a7b061390" target="_blank" rel="noopener noreferrer" className="text-denim hover:text-accent-purple font-bold transition-colors">
                      Connect with Rosie
                   </a>
                   <a href="https://www.linkedin.com/in/lele-xu-979817359/" target="_blank" rel="noopener noreferrer" className="text-denim hover:text-accent-purple font-bold transition-colors">
                      Connect with Lele
                   </a>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-left">
                    <p className="text-slate-700 italic">
                        "Building this project helped us see that the real conflict is not 'Hollywood vs. technology,' but how to share power fairly between the people who create stories, the companies that distribute them, and the tools that remix them."
                    </p>
                </div>
            </div>
            
            <div className="mt-12 text-xs text-slate-400">
                <p>© 2025 Digital Media Law Final Project</p>
                <p className="mt-2">Educational Use Only</p>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default App;
