import * as React from "react";
import {
  SingleEliminationBracket,
  Match,
  SVGViewer,
  createTheme
} from "@g-loot/react-tournament-brackets";
import Navbar from "../components/Navbar";
import '../styles/globals.css';

// Define types for match data
interface MatchData {
  id: string;
  nextMatchId: string | null;
  tournamentRoundText: string;
  participants: Participant[];
}

interface Participant {
  name: string;
  resultText: string;
  isWinner: boolean;
  points: number;
}

// Define the theme configuration
const GlootTheme = createTheme({
  textColor: { main: "#000000", highlighted: "#FFFFFF", dark: "#FFFF" },
  matchBackground: { wonColor: "#fe0000", lostColor: "#000000" },
  score: {
    background: {
      wonColor: "#FFFFFF",
      lostColor: "#FFFFFF"
    },
    text: { highlightedWonColor: "#000000", highlightedLostColor: "#000000" }
  },
  border: {
    color: "#000000",
    highlightedColor: "#000000"
  },
  roundHeader: { backgroundColor: "#000000", fontColor: "#000000" },
  connectorColor: "#646464",
  connectorColorHighlight: "#646464",
  svgBackground: "#646464"
});

const exportedSmallBracket = [
  {
    id: "Runoff1_M3",
    nextMatchId: "M3",
    tournamentRoundText: "1",
    participants: [
      {
        name: "TournamentParticipant1",
        resultText: "Win",
        isWinner: false,
        points: 0
      },
      {
        name: "TournamentParticipant2",
        resultText: "Win",
        isWinner: false,
        points: 0
      }
    ]
  },
  {
    id: "Runoff2_M3",
    nextMatchId: "M3",
    tournamentRoundText: "1",
    participants: [
      {
        name: "TournamentParticipant9",
        resultText: "Win",
        isWinner: false,
        points: 0
      },
      {
        name: "TournamentParticipant10",
        resultText: "Win",
        isWinner: false,
        points: 0
      }
    ]
  },
  {
    id: "Runoff1_M4",
    nextMatchId: "M4",
    tournamentRoundText: "1",
    participants: [
      {
        name: "TournamentParticipant3",
        resultText: "Win",
        isWinner: false,
        points: 0
      },
      {
        name: "TournamentParticipant4",
        resultText: "Win",
        isWinner: false,
        points: 0
      }
    ]
  },
  {
    id: "Runoff2_M4",
    nextMatchId: "M4",
    tournamentRoundText: "1",
    participants: [
      {
        name: "TournamentParticipant11",
        resultText: "Win",
        isWinner: false,
        points: 0
      },
      {
        name: "TournamentParticipant12",
        resultText: "Win",
        isWinner: false,
        points: 0
      }
    ]
  },
  {
    id: "Runoff1_null_M5",
    nextMatchId: "M5",
    tournamentRoundText: "1",
    participants: [
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0
      },
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0
      }
    ]
  },
  {
    id: "Runoff2_null_M5",
    nextMatchId: "M5",
    tournamentRoundText: "1",
    participants: [
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0
      },
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0
      }
    ]
  },
  {
    id: "Runoff1_null_M6",
    nextMatchId: "M6",
    tournamentRoundText: "1",
    participants: [
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0
      },
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0
      }
    ]
  },
  {
    id: "Runoff2_null_M6",
    nextMatchId: "M6",
    tournamentRoundText: "1",
    participants: [
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0
      },
      {
        name: "-",
        resultText: "Win",
        isWinner: false,
        points: 0
      }
    ]
  },
  {
    id: "M3",
    nextMatchId: "M1",
    tournamentRoundText: "2",
    participants: []
  },
  {
    id: "M4",
    nextMatchId: "M1",
    tournamentRoundText: "2",
    participants: []
  },
  {
    id: "M5",
    nextMatchId: "M2",
    tournamentRoundText: "2",
    participants: [
      {
        name: "TournamentParticipant5",
        resultText: "Win",
        isWinner: false,
        points: 0
      },
      {
        name: "TournamentParticipant6",
        resultText: "Win",
        isWinner: false,
        points: 0
      }
    ]
  },
  {
    id: "M6",
    nextMatchId: "M2",
    tournamentRoundText: "2",
    participants: [
      {
        name: "TournamentParticipant7",
        resultText: "Win",
        isWinner: false,
        points: 0
      },
      {
        name: "TournamentParticipant8",
        resultText: "Win",
        isWinner: false,
        points: 0
      }
    ]
  },
  {
    id: "M1",
    nextMatchId: "M0",
    tournamentRoundText: "3",
    participants: []
  },
  {
    id: "M2",
    nextMatchId: "M0",
    tournamentRoundText: "3",
    participants: []
  },
  {
    id: "M0",
    nextMatchId: null,
    tournamentRoundText: "4",
    participants: []
  }
];

const RaceTree: React.FC = () => {
  const [isClient, setIsClient] = React.useState(false);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setIsClient(true); // Detects if the component is rendered on the client

    if (typeof window !== "undefined") {
      // Set initial dimensions
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);

      const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  if (!isClient) return null; // Prevents SSR issues by rendering only on the client

  // Event handlers for match clicks
  const handleMatchClick = (match: MatchData) => {
    console.log(match);
  };

  const handlePartyClick = (participant: Participant) => {
    console.log(participant);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <div className="text-center text-white p-8">
        <h1 className="text-4xl font-bold">
          15 Asian (Pacific) Veteran Table Tennis Championship
        </h1>
        <h2 className="text-2xl mt-4">RACE TREE - YOUTH</h2>
        <h3 className="text-5xl mt-2 text-red-500">UNDER 15</h3>
      </div>
      <div className="flex-grow flex justify-center items-center min-h-screen p-5">
        <div className="bg-black shadow-lg rounded-lg p-5 w-full max-w-7xl">
          <div className="w-full overflow-x-auto">
            <SingleEliminationBracket
              theme={GlootTheme}
              matches={exportedSmallBracket}
              matchComponent={Match}
              svgWrapper={({ children, ...props }: { children: React.ReactNode } & React.SVGProps<SVGSVGElement>) => (
                <SVGViewer
                  width={width}
                  height={height}
                  background="#646464"
                  SVGBackground="#646464"
                  {...props}
                >
                  {children}
                </SVGViewer>
              )}
              onMatchClick={handleMatchClick}
              onPartyClick={handlePartyClick}
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceTree;