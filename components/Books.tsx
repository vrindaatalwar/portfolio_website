import React, { useState } from 'react';
import { Section, Container, SectionHeader } from './Layout';

interface BookData {
  id: number;
  title: string;
  spineColor: string;
  spineTextColor: string;
  coverUrl: string;
}

const booksList: BookData[] = [
  { 
    id: 1, 
    title: "Almanack of Naval Ravikant", 
    spineColor: "bg-[#bfbfbf]", 
    spineTextColor: "text-black",
    coverUrl: "https://m.media-amazon.com/images/I/713b5yD1kUL._AC_UF1000,1000_QL80_.jpg"
  },
  { 
    id: 2, 
    title: "Steal Like an Artist", 
    spineColor: "bg-[#1c1c1c]", 
    spineTextColor: "text-white",
    coverUrl: "https://m.media-amazon.com/images/I/91r5X-w81EL._AC_UF1000,1000_QL80_.jpg"
  },
  { 
    id: 3, 
    title: "The creative Act of Being", 
    spineColor: "bg-[#808080]", 
    spineTextColor: "text-white",
    coverUrl: "https://m.media-amazon.com/images/I/A1YhM3oRFbL._AC_UF1000,1000_QL80_.jpg"
  },
  { 
    id: 4, 
    title: "Show Your Work!", 
    spineColor: "bg-[#fbbf24]", 
    spineTextColor: "text-black",
    coverUrl: "https://m.media-amazon.com/images/I/71AFD7d1wQL._AC_UF1000,1000_QL80_.jpg"
  },
  { 
    id: 5, 
    title: "Ikigai", 
    spineColor: "bg-[#9ca3af]", 
    spineTextColor: "text-white",
    coverUrl: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg"
  },
  { 
    id: 6, 
    title: "How To", 
    spineColor: "bg-[#d1d5db]", 
    spineTextColor: "text-black",
    coverUrl: "https://m.media-amazon.com/images/I/71sH3o3NlQL._AC_UF1000,1000_QL80_.jpg"
  }
];

interface BookItemProps {
  data: BookData;
  isOpen: boolean;
  onClick: () => void;
}

const BookItem: React.FC<BookItemProps> = ({ 
  data, 
  isOpen, 
  onClick 
}) => {
  return (
    <div 
      onClick={onClick}
      className={`
        relative h-64 sm:h-80 cursor-pointer shadow-md transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex-shrink-0 overflow-hidden group
        ${isOpen 
          ? 'w-48 sm:w-60 translate-y-0 z-10 rounded-r-md rounded-l-sm' 
          : 'w-10 sm:w-12 hover:-translate-y-2 z-0 rounded-sm'
        }
        ${data.spineColor}
      `}
    >
        {/* Spine Content (Visible when closed) */}
         <div className={`absolute inset-0 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
            {/* Simple vertical text spine without heavy textures to match the clean look */}
            <div className="absolute inset-0 flex items-center justify-center p-2">
                 <span 
                className={`
                    [writing-mode:vertical-rl] text-xs sm:text-sm font-bold tracking-wide
                    ${data.spineTextColor} whitespace-nowrap overflow-visible
                `}
                >
                {data.title}
                </span>
            </div>
         </div>


      {/* Cover Content (Visible when open) */}
      <div 
        className={`
          absolute inset-0 w-full h-full bg-white
          transition-all duration-500
          ${isOpen ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <img 
          src={data.coverUrl} 
          alt={data.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Subtle shadow overlay for depth */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
      </div>
    </div>
  );
};

const Books: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(4);

  return (
    <Section id="timepass">
      <Container className="flex flex-col gap-6">
        <SectionHeader 
          title="Books I love :p"
          subtitle="Here are some of the books i love <3" 
        />
        
        {/* Scrollable Container with centered alignment behavior if few items */}
        <div className="w-full overflow-x-auto pb-6 pt-4 scrollbar-hide">
            <div className="flex items-end gap-3 min-w-max mx-auto px-2">
                {booksList.map((book) => (
                <BookItem 
                    key={book.id} 
                    data={book} 
                    isOpen={activeId === book.id} 
                    onClick={() => setActiveId(activeId === book.id ? null : book.id)} 
                />
                ))}
            </div>
        </div>
      </Container>
    </Section>
  );
};

export default Books;