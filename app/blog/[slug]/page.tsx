import { notFound } from "next/navigation";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { blogPosts } from "../../helpers/config";
import ResponsiveMenu from "../../components/ResponsiveMenu";
import Footer from "../../components/Footer";
import ReadingProgress from "../../components/ReadingProgress";
import blog1 from "../../images/blog-1.webp";
import blog2 from "../../images/blog-2.webp";
import blog3 from "../../images/blog-3.webp";

const imageMap: Record<string, StaticImageData> = {
  "blog-1": blog1,
  "blog-2": blog2,
  "blog-3": blog3,
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const Heading = ({ children }: { children: React.ReactNode }) => (
  <Typography
    variant="h4"
    sx={{
      color: "common.white",
      fontFamily: "var(--font-space-grotesk), sans-serif",
      fontWeight: 600,
      fontSize: { xs: "20px", md: "24px" },
      mt: 6,
      mb: 2,
    }}
  >
    {children}
  </Typography>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <Typography
    sx={{
      color: "grey.300",
      fontFamily: "var(--font-inter), sans-serif",
      fontSize: { xs: 15, md: 17 },
      lineHeight: 1.8,
      mb: 2.5,
    }}
  >
    {children}
  </Typography>
);

const Ul = ({ items }: { items: string[] }) => (
  <Box
    component="ul"
    sx={{
      pl: 3,
      mb: 2.5,
      "& li": {
        color: "grey.300",
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: { xs: 15, md: 17 },
        lineHeight: 1.8,
        mb: 1,
      },
    }}
  >
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </Box>
);

const articleContent: Record<string, React.ReactNode> = {
  "building-a-design-system-that-scales": (
    <>
      <P>
        As products grow, so do the challenges of maintaining consistency. What
        starts as a handful of reusable components can quickly evolve into dozens
        of patterns, competing implementations, and subtle design inconsistencies
        spread across multiple teams.
      </P>
      <P>
        A design system is often viewed as a collection of UI components, but
        successful systems provide much more than that. They establish a shared
        language between design and engineering, reduce duplicated effort, and
        create a foundation that allows teams to move faster without sacrificing
        quality.
      </P>

      <Heading>The Challenge of Growth</Heading>
      <P>
        Most products don&apos;t begin with a dedicated design system. Teams move
        quickly, prioritize shipping features, and optimize for short-term
        delivery. Over time, this often results in multiple versions of similar
        components, inconsistent styling decisions, and increasing maintenance
        costs.
      </P>
      <P>Common symptoms include:</P>
      <Ul
        items={[
          "Several button variations serving the same purpose",
          "Inconsistent spacing and typography across pages",
          "Repeated styling logic throughout the codebase",
          "Accessibility behaviors implemented differently between teams",
          "Increased effort required to maintain and update UI patterns",
        ]}
      />
      <P>
        These issues rarely appear overnight. Instead, they accumulate gradually
        as products evolve.
      </P>

      <Heading>Start with Foundations</Heading>
      <P>
        Before building components, establish foundational design decisions.
      </P>
      <P>These often include:</P>
      <Ul
        items={[
          "Color tokens",
          "Typography scales",
          "Spacing systems",
          "Border radius values",
          "Elevation and shadow patterns",
          "Interaction states",
        ]}
      />
      <P>
        By defining these primitives first, teams can build components on top of
        a consistent foundation rather than introducing new values with every
        implementation.
      </P>
      <P>
        When foundational decisions are centralized, updates become significantly
        easier. A single change can propagate throughout the entire system
        instead of requiring manual updates across dozens of screens.
      </P>

      <Heading>Components Are Products</Heading>
      <P>
        One of the most valuable mindset shifts is treating components as
        products rather than implementation details.
      </P>
      <P>Well-designed components should be:</P>
      <Ul
        items={[
          "Flexible without being overly complex",
          "Accessible by default",
          "Well documented",
          "Consistent across use cases",
          "Easy to adopt",
        ]}
      />
      <P>
        A component&apos;s success isn&apos;t measured by how many props it
        supports. It&apos;s measured by how effectively it solves common
        interface problems while remaining simple to use.
      </P>
      <P>
        The goal is not to create infinitely customizable components. The goal
        is to create reliable building blocks that encourage consistency.
      </P>

      <Heading>Documentation Matters</Heading>
      <P>
        Even the best component library will struggle without clear
        documentation.
      </P>
      <P>Documentation should answer questions such as:</P>
      <Ul
        items={[
          "When should this component be used?",
          "When should it not be used?",
          "What variants are available?",
          "What accessibility considerations exist?",
          "What common patterns should teams follow?",
        ]}
      />
      <P>
        Good documentation reduces uncertainty and helps maintain consistency as
        organizations grow.
      </P>
      <P>
        More importantly, it lowers the barrier to adoption for new team
        members.
      </P>

      <Heading>Design and Engineering Partnership</Heading>
      <P>
        Design systems are most successful when they are owned collaboratively.
      </P>
      <P>
        Designers contribute visual language, interaction patterns, and
        usability considerations. Engineers contribute implementation details,
        accessibility expertise, and long-term maintainability.
      </P>
      <P>
        Neither discipline can create an effective design system in isolation.
      </P>
      <P>
        Strong collaboration helps ensure that components are both visually
        consistent and technically sustainable.
      </P>

      <Heading>Measure Adoption, Not Component Count</Heading>
      <P>
        A common mistake is evaluating success based on the number of components
        created.
      </P>
      <P>
        A large component library does not necessarily indicate a healthy system.
      </P>
      <P>More meaningful indicators include:</P>
      <Ul
        items={[
          "Reduced implementation time for new features",
          "Improved consistency across products",
          "Increased accessibility compliance",
          "Higher component adoption rates",
          "Reduced UI-related defects",
        ]}
      />
      <P>
        The goal is not to build more components. The goal is to make product
        development easier and more consistent.
      </P>

      <Heading>Looking Ahead</Heading>
      <P>
        Design systems are never truly finished. They evolve alongside products,
        teams, and user needs.
      </P>
      <P>
        The most successful systems balance stability with flexibility. They
        provide enough structure to maintain consistency while remaining
        adaptable to future requirements.
      </P>
      <P>
        When approached thoughtfully, a design system becomes more than a UI
        library. It becomes a shared foundation that enables teams to build
        better products faster, with greater confidence and consistency.
      </P>
    </>
  ),
  "from-components-to-platforms": (
    <>
      <P>
        Many engineering initiatives begin with a simple goal: solve a problem
        that exists today.
      </P>
      <P>A new component is created to improve consistency.</P>
      <P>A utility is introduced to reduce duplication.</P>
      <P>
        A shared pattern emerges because multiple teams need the same
        functionality.
      </P>
      <P>Over time, these individual solutions begin to form something larger.</P>
      <P>A platform.</P>
      <P>
        The most impactful engineering work often isn&apos;t a single feature or
        component. It&apos;s the foundation that enables entire teams to build
        faster, more consistently, and with greater confidence.
      </P>

      <Heading>The Evolution of Shared Systems</Heading>
      <P>Most platforms don&apos;t start as platforms.</P>
      <P>They begin as practical solutions to recurring problems.</P>
      <P>A design system starts with a few reusable components.</P>
      <P>A shared API layer begins with common data-fetching logic.</P>
      <P>
        A deployment pipeline emerges from a desire to reduce manual work.
      </P>
      <P>As adoption grows, these solutions become infrastructure.</P>
      <P>
        What was once built for a single team becomes a resource that supports
        many.
      </P>
      <P>
        The challenge shifts from solving a local problem to supporting an
        ecosystem.
      </P>

      <Heading>Beyond Reusability</Heading>
      <P>Reusability is often the first goal of shared systems.</P>
      <P>Build it once.</P>
      <P>Use it everywhere.</P>
      <P>While important, reusability alone isn&apos;t enough.</P>
      <P>Successful platforms provide:</P>
      <Ul
        items={[
          "Consistency",
          "Reliability",
          "Documentation",
          "Discoverability",
          "Governance",
        ]}
      />
      <P>
        Teams should not only be able to use a platform—they should want to use
        it.
      </P>
      <P>The best platforms make adoption feel natural.</P>

      <Heading>Reducing Complexity at Scale</Heading>
      <P>As organizations grow, complexity increases.</P>
      <P>More teams.</P>
      <P>More products.</P>
      <P>More requirements.</P>
      <P>
        Without shared foundations, every team is forced to solve similar
        problems independently.
      </P>
      <P>This often leads to:</P>
      <Ul
        items={[
          "Duplicate implementations",
          "Inconsistent user experiences",
          "Increased maintenance costs",
          "Slower development cycles",
        ]}
      />
      <P>
        Platforms help centralize common concerns so teams can focus on building
        product value rather than rebuilding infrastructure.
      </P>
      <P>A strong platform doesn&apos;t eliminate complexity.</P>
      <P>It absorbs complexity.</P>

      <Heading>Platforms as Multipliers</Heading>
      <P>
        One of the most valuable characteristics of platform work is leverage.
      </P>
      <P>A feature may benefit thousands of users.</P>
      <P>
        A platform improvement may benefit every engineer working on every
        future feature.
      </P>
      <P>The impact compounds over time.</P>
      <P>
        A well-designed component library can accelerate dozens of product
        initiatives.
      </P>
      <P>
        An improved deployment workflow can save countless hours across
        engineering teams.
      </P>
      <P>
        A shared foundation creates value far beyond its original
        implementation.
      </P>

      <Heading>Adoption Is the Real Measure of Success</Heading>
      <P>Platform teams often focus on what they build.</P>
      <P>The more important question is whether anyone uses it.</P>
      <P>Adoption is the clearest signal of success.</P>
      <P>Engineers naturally gravitate toward systems that are:</P>
      <Ul
        items={[
          "Easy to understand",
          "Well documented",
          "Reliable",
          "Flexible",
          "Consistent",
        ]}
      />
      <P>
        If teams continually work around a platform, the issue is rarely
        adoption itself.
      </P>
      <P>
        It&apos;s usually a sign that the platform isn&apos;t solving the right
        problems.
      </P>
      <P>The best platforms earn trust through usefulness.</P>

      <Heading>Building for the Future</Heading>
      <P>
        One of the unique challenges of platform work is balancing current needs
        with future growth.
      </P>
      <P>Build too narrowly and the platform becomes restrictive.</P>
      <P>Build too broadly and it becomes unnecessarily complex.</P>
      <P>
        Finding the right balance requires understanding not only today&apos;s
        requirements, but also the direction of the organization.
      </P>
      <P>The goal isn&apos;t to predict the future perfectly.</P>
      <P>It&apos;s to create foundations that can evolve alongside it.</P>

      <Heading>Looking Ahead</Heading>
      <P>Components solve immediate problems.</P>
      <P>Platforms create long-term leverage.</P>
      <P>
        The transition from one to the other is rarely defined by a single
        project. Instead, it happens gradually through thoughtful decisions,
        shared standards, and a commitment to reducing friction for others.
      </P>
      <P>
        The most effective engineering organizations don&apos;t just build
        products.
      </P>
      <P>They build the foundations that make great products possible.</P>
      <P>That&apos;s where platforms begin.</P>
    </>
  ),
  "designing-for-developer-experience": (
    <>
      <P>
        When teams discuss user experience, the conversation usually focuses on
        customers.
      </P>
      <P>How quickly can users complete a task?</P>
      <P>How intuitive is the interface?</P>
      <P>How accessible is the product?</P>
      <P>
        These are important questions, but there&apos;s another experience that
        often has a significant impact on product quality: developer experience.
      </P>
      <P>
        The tools, systems, and workflows engineers use every day shape how
        quickly teams can deliver value. They influence code quality,
        consistency, maintainability, and even employee satisfaction.
      </P>
      <P>
        A thoughtful developer experience doesn&apos;t just make engineers
        happier. It makes products better.
      </P>

      <Heading>Developer Experience Is Product Design</Heading>
      <P>Developer experience is often associated with tooling.</P>
      <P>Build systems.</P>
      <P>CI pipelines.</P>
      <P>Component libraries.</P>
      <P>Documentation.</P>
      <P>
        While these are important, developer experience is ultimately a design
        problem.
      </P>
      <P>Every workflow has users.</P>
      <P>Every API has consumers.</P>
      <P>Every component library has an audience.</P>
      <P>
        The same principles that create great customer experiences can be
        applied to internal engineering systems.
      </P>
      <P>Clear interfaces. Consistent patterns. Predictable behavior.</P>
      <P>The goal is to make the right path the easiest path.</P>

      <Heading>Reducing Friction</Heading>
      <P>Small sources of friction add up quickly.</P>
      <P>A confusing component API.</P>
      <P>Missing documentation.</P>
      <P>Inconsistent patterns.</P>
      <P>Slow build times.</P>
      <P>
        Individually, these problems may seem minor. Collectively, they create a
        constant tax on development.
      </P>
      <P>
        Over time, teams spend more energy navigating complexity than solving
        customer problems.
      </P>
      <P>
        Improving developer experience often means removing unnecessary
        decisions.
      </P>
      <P>
        When systems are intuitive, engineers can focus on building instead of
        figuring out how to build.
      </P>

      <Heading>The Value of Shared Foundations</Heading>
      <P>
        Many developer experience improvements come from investing in shared
        foundations.
      </P>
      <P>Examples include:</P>
      <Ul
        items={[
          "Design systems",
          "Reusable component libraries",
          "Consistent coding standards",
          "Automated testing",
          "Documentation",
          "Development tooling",
        ]}
      />
      <P>
        These investments rarely produce immediate customer-facing features.
      </P>
      <P>However, they create leverage.</P>
      <P>
        A small improvement made once can benefit every engineer and every
        future project.
      </P>
      <P>The impact compounds over time.</P>

      <Heading>Documentation Is a Feature</Heading>
      <P>Documentation is often treated as an afterthought.</P>
      <P>
        In reality, it is one of the most important parts of any developer
        experience.
      </P>
      <P>Good documentation reduces uncertainty.</P>
      <P>It helps engineers make decisions confidently.</P>
      <P>
        It accelerates onboarding and improves adoption of shared systems.
      </P>
      <P>
        Most importantly, it allows knowledge to scale beyond the individuals
        who originally built the system.
      </P>
      <P>
        A great component with poor documentation often feels unusable.
      </P>
      <P>
        A good component with excellent documentation can become indispensable.
      </P>

      <Heading>Automation Creates Momentum</Heading>
      <P>The best developer experiences remove repetitive work.</P>
      <P>
        Automation allows teams to spend less time on manual processes and more
        time solving meaningful problems.
      </P>
      <P>This can take many forms:</P>
      <Ul
        items={[
          "Automated testing",
          "Code generation",
          "Continuous integration",
          "Linting and formatting",
          "Deployment pipelines",
        ]}
      />
      <P>The goal is not automation for its own sake.</P>
      <P>The goal is creating momentum.</P>
      <P>
        Every task that happens automatically is one less task competing for an
        engineer&apos;s attention.
      </P>

      <Heading>Building for Future Teams</Heading>
      <P>
        One of the most overlooked aspects of developer experience is that the
        primary beneficiaries are often future engineers.
      </P>
      <P>The engineer joining six months from now.</P>
      <P>The teammate maintaining a feature two years later.</P>
      <P>
        The developer trying to understand a decision they weren&apos;t involved
        in making.
      </P>
      <P>
        Thoughtful systems create clarity long after the original implementation
        is complete.
      </P>
      <P>Good developer experience is an investment in future productivity.</P>

      <Heading>Looking Ahead</Heading>
      <P>Products evolve quickly.</P>
      <P>Teams grow.</P>
      <P>Requirements change.</P>
      <P>
        The engineering organizations that scale most effectively are often the
        ones that treat developer experience as a first-class concern.
      </P>
      <P>
        When engineers can move quickly with confidence, everyone benefits.
      </P>
      <P>Teams collaborate more effectively.</P>
      <P>Products become more consistent.</P>
      <P>Customers receive better experiences.</P>
      <P>
        Developer experience is ultimately about removing friction between an
        idea and its implementation.
      </P>
      <P>
        The easier it is to build the right thing, the more likely great
        products are to emerge.
      </P>
    </>
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = articleContent[slug];

  return (
    <>
      <ReadingProgress />
      <ResponsiveMenu />

      {/* Hero image — full bleed, nav overlays it */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 280, sm: 380, md: 500 },
          overflow: "hidden",
          "& img": { transition: "transform 0.6s ease" },
          "&:hover img": { transform: "scale(1.04)" },
        }}
      >
        <Image
          src={imageMap[post.image]}
          alt={post.title}
          fill
          priority
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        {/* Gradient fades image into page background */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(8,13,26,0.2) 40%, rgba(8,13,26,1) 100%)",
          }}
        />
      </Box>

      <Box
        component="main"
        sx={{
          backgroundColor: "background.default",
          pb: { xs: 10, md: 16 },
        }}
      >
        <Container sx={{ maxWidth: "740px !important" }}>
          {/* Back link */}
          <Link
            href="/#blog"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.75,
              color: "grey.500",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 14,
              fontWeight: 500,
              mb: 6,
              "& .arrow": { transition: "transform 0.3s" },
              "&:hover": {
                color: "grey.300",
                "& .arrow": { transform: "translateX(-4px)" },
              },
            }}
          >
            <Box component="span" className="arrow" aria-hidden>
              ←
            </Box>{" "}
            Back
          </Link>

          {/* Article header */}
          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Typography
                sx={{
                  color: "primary.main",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                {post.category}
              </Typography>
              <Typography
                sx={{
                  color: "grey.600",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                · {post.readTime} min read
              </Typography>
              {post.date && (
                <Typography
                  sx={{
                    color: "grey.600",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: 12,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    ml: "auto",
                  }}
                >
                  {post.date}
                </Typography>
              )}
            </Box>

            <Typography
              variant="h2"
              sx={{
                color: "common.white",
                fontSize: { xs: "28px", md: "40px" },
                lineHeight: 1.15,
                mb: 3,
              }}
            >
              {post.title}
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {post.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "grey.400",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: 12,
                    borderRadius: "999px",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.08)",
              mb: 6,
            }}
          />

          {/* Article body */}
          <Box>{content}</Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
