import { Article } from './types';

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    title: "SpaceX's Starship Achieves Orbit in Historic Fourth Flight Test",
    summary: "The massive rocket successfully completed its mission objectives, splashing down in the Indian Ocean and marking a major milestone for interplanetary travel.",
    content: `<p>In a stunning display of engineering prowess, SpaceX's Starship, the largest and most powerful rocket ever built, has successfully reached orbit during its fourth integrated flight test. The launch took place at the Starbase facility in Boca Chica, Texas, drawing millions of viewers from around the globe.</p>
    <p>The primary goal of this mission was to demonstrate the survivability of the vehicle during atmospheric re-entry. Previous attempts had ended in rapid unscheduled disassemblies, but today's flight proved that the iterative design process is yielding results.</p>
    <p>"This is a monumental day for humanity's future among the stars," said a SpaceX spokesperson. The success paves the way for the Artemis III mission, which aims to return astronauts to the lunar surface.</p>`,
    category: 'Technology',
    author: 'Sarah Jenkins',
    publishedAt: '2024-05-20T14:30:00Z',
    imageUrl: 'https://picsum.photos/id/1/800/600',
    isFeatured: true,
    readTime: 5,
    comments: [
      { id: 'c1', user: 'TechEnthusiast', text: 'Incredible achievement for SpaceX!', timestamp: '2 hours ago' }
    ]
  },
  {
    id: '2',
    title: "Global Summit on Climate Action Begins in Geneva",
    summary: "World leaders gather to discuss urgent measures to combat rising temperatures and commit to stricter carbon emission goals by 2030.",
    content: `<p>Delegates from over 190 countries have converged in Geneva today for the commencement of the Global Climate Action Summit. The stakes have never been higher, with recent reports from the IPCC indicating that the window to limit global warming to 1.5 degrees Celsius is rapidly closing.</p><p>Key topics on the agenda include renewable energy transition financing for developing nations, stricter penalties for industrial pollution, and the preservation of critical biodiversity hotspots.</p>`,
    category: 'International',
    author: 'David Chen',
    publishedAt: '2024-05-19T09:00:00Z',
    imageUrl: 'https://picsum.photos/id/24/800/600',
    isTrending: true,
    readTime: 4,
    comments: []
  },
  {
    id: '3',
    title: "National Cricket Team Announces Squad for Upcoming World Cup",
    summary: "Selectors have made some surprising inclusions and exclusions in the final 15-man squad set to travel to India next month.",
    content: `<p>The National Cricket Board has officially announced the squad for the upcoming ICC World Cup. Fans were left surprised by the inclusion of 19-year-old pacer, Liam O'Connor, who has only played two domestic seasons.</p><p>Veterans of the sport have praised the bold decision, citing the need for fresh blood in the bowling attack. "It's a gamble, but one that could pay off handsomely on the turning tracks of the subcontinent," remarked former captain James Anderson.</p>`,
    category: 'Sports',
    author: 'Rahul Dravid',
    publishedAt: '2024-05-18T16:45:00Z',
    imageUrl: 'https://picsum.photos/id/99/800/600',
    readTime: 3,
    comments: []
  },
  {
    id: '4',
    title: "New Budget Proposal Focuses on Infrastructure and Healthcare",
    summary: "The Finance Ministry unveiled the new fiscal budget, promising significant renovations to public transport and new hospitals nationwide.",
    content: `<p>The government presented its annual budget to Parliament today, outlining a strategy focused on "Rebuilding for Resilience". A record 15% of the total budget has been allocated to healthcare, with plans to build ten new specialized hospitals in rural areas.</p>`,
    category: 'National',
    author: 'Priya Sharma',
    publishedAt: '2024-05-20T10:15:00Z',
    imageUrl: 'https://picsum.photos/id/59/800/600',
    isTrending: true,
    readTime: 6,
    comments: []
  },
  {
    id: '5',
    title: "Tech Giant Unveils Revolutionary AI Assistant",
    summary: "The new model promises to understand context better than any predecessor, integrating seamlessly with smart home devices.",
    content: `<p>Silicon Valley was abuzz today as TechCorp revealed "Nexus," their latest artificial intelligence model. Unlike previous iterations, Nexus claims to possess "contextual continuity," allowing it to remember conversations over weeks and understand subtle nuances in tone.</p>`,
    category: 'Technology',
    author: 'Mark Benson',
    publishedAt: '2024-05-21T08:00:00Z',
    imageUrl: 'https://picsum.photos/id/60/800/600',
    readTime: 4,
    comments: []
  },
  {
    id: '6',
    title: "Local Art Festival Draws Record Crowds",
    summary: "The annual city art festival celebrated creativity with over 500 installations and live performances, boosting local tourism.",
    content: `<p>Colors, music, and joy filled the streets this weekend as the 10th Annual City Art Festival took place. Organizers estimate that over 50,000 visitors attended, a significant increase from last year.</p>`,
    category: 'Entertainment',
    author: 'Elena Gomez',
    publishedAt: '2024-05-19T18:30:00Z',
    imageUrl: 'https://picsum.photos/id/129/800/600',
    readTime: 2,
    comments: []
  },
  {
    id: '7',
    title: "Stock Markets Rally as Inflation Data Shows Improvement",
    summary: "Investors are optimistic as the latest consumer price index reports lower-than-expected inflation numbers for the quarter.",
    content: `<p>Global markets saw a sea of green today. The Dow Jones Industrial Average climbed 400 points following the release of the April CPI data.</p>`,
    category: 'Business',
    author: 'Robert Sterling',
    publishedAt: '2024-05-20T15:00:00Z',
    imageUrl: 'https://picsum.photos/id/160/800/600',
    readTime: 3,
    comments: []
  },
  {
    id: '8',
    title: "Championship Final: City United vs. Rovers Preview",
    summary: "An in-depth look at the tactical battle expected in tomorrow's grand finale at the National Stadium.",
    content: `<p>It all comes down to this. City United's high press versus Rovers' counter-attacking mastery. The tactical analysis suggests a tight game decided by midfield control.</p>`,
    category: 'Sports',
    author: 'Tom Ford',
    publishedAt: '2024-05-21T11:20:00Z',
    imageUrl: 'https://picsum.photos/id/177/800/600',
    isTrending: true,
    readTime: 4,
    comments: []
  }
];
