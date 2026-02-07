import React, { useEffect, useState } from 'react';
import { Section, Container, SectionHeader } from './Layout';

// Types for the API response
interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
  total: {
    [year: string]: number;
  };
  contributions: ContributionDay[];
}

const GithubActivity: React.FC = () => {
  const [data, setData] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Set to 2026 as requested
  const YEAR = 2026; 
  const USERNAME = 'vrindaatalwar';

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=${YEAR}`);
        if (!response.ok) throw new Error('Failed to fetch');
        const json: ApiResponse = await response.json();
        
        setData(json.contributions);
        setTotalContributions(json.total[YEAR] || 0);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Process data into weeks
  const getWeeks = () => {
    const weeks: (ContributionDay | null)[][] = [];
    let currentWeek: (ContributionDay | null)[] = [];

    if (data.length > 0) {
      // Pad the first week if the year doesn't start on Sunday
      const firstDate = new Date(data[0].date);
      const dayOfWeek = firstDate.getDay(); // 0 = Sunday
      
      for (let i = 0; i < dayOfWeek; i++) {
        currentWeek.push(null);
      }
    }

    data.forEach((day) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });

    // Push the last partial week
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

  const weeks = getWeeks();

  // Color mapping based on level (0-4) using the highlight color
  const getColorClass = (level: number) => {
    switch (level) {
      case 1: return 'bg-highlight/30';
      case 2: return 'bg-highlight/50';
      case 3: return 'bg-highlight/75';
      case 4: return 'bg-highlight';
      default: return 'bg-secondary/40'; // Level 0 / Empty
    }
  };

  // Generate Month Labels
  const renderMonthLabels = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // Simply distribute them or place them roughly where the month starts
    // For simplicity in this layout, we can just list them. 
    // However, to align them with the grid is tricky without absolute positioning or calculating week indices.
    // We'll stick to a flex distribution that approximates the grid.
    return (
      <div className="flex justify-between text-[10px] text-text-muted px-2 select-none mb-2">
        {months.map(m => <span key={m}>{m}</span>)}
      </div>
    );
  };

  if (error) {
    return (
        <Section>
            <Container>
                <div className="text-text-secondary text-sm">Unable to load GitHub activity.</div>
            </Container>
        </Section>
    );
  }

  return (
    <Section>
      <Container className="flex flex-col gap-6">
        <SectionHeader 
          title="Github Activities" 
          subtitle="Here's a small sneak-peak into my github" 
        />
        
        <div className="w-full bg-surface/20 border border-border p-4 rounded-xl flex flex-col gap-2 overflow-hidden relative group">
            {/* Loading Overlay */}
            {loading && (
                <div className="absolute inset-0 bg-background/50 flex items-center justify-center z-10 backdrop-blur-[1px]">
                    <div className="w-5 h-5 border-2 border-highlight border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {/* Months */}
            {renderMonthLabels()}

            {/* Heatmap Grid */}
            <div className="flex gap-[3px] overflow-x-auto pb-2 scrollbar-hide">
                {weeks.map((week, wIndex) => (
                    <div key={wIndex} className="flex flex-col gap-[3px]">
                        {week.map((day, dIndex) => {
                             // If day is null (padding), render transparent box
                             if (!day) return <div key={`pad-${dIndex}`} className="w-[10px] h-[10px]" />;
                             
                             return (
                                <div 
                                    key={day.date} 
                                    className={`w-[10px] h-[10px] rounded-[2px] transition-colors duration-200 hover:ring-1 hover:ring-white/50 ${getColorClass(day.level)}`}
                                    title={`${day.date}: ${day.count} contributions`}
                                />
                             );
                        })}
                    </div>
                ))}
            </div>

            {/* Footer / Legend */}
            <div className="flex items-center justify-between text-xs text-text-muted mt-2">
                <span>
                    {loading ? '...' : totalContributions.toLocaleString()} contributions in {YEAR} on <a href={`https://github.com/${USERNAME}`} target="_blank" rel="noreferrer" className="underline hover:text-highlight transition-colors">GitHub</a>.
                </span>
                <div className="flex items-center gap-2">
                    <span>Less</span>
                    <div className="flex gap-[2px]">
                        <div className={`w-[10px] h-[10px] rounded-[2px] ${getColorClass(0)}`}></div>
                        <div className={`w-[10px] h-[10px] rounded-[2px] ${getColorClass(2)}`}></div>
                        <div className={`w-[10px] h-[10px] rounded-[2px] ${getColorClass(4)}`}></div>
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>
      </Container>
    </Section>
  );
};

export default GithubActivity;