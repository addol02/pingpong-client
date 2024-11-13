import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import '../styles/globals.css';

// Define interfaces for the data structure
// interface Match {
//   game1: number;
//   game2: number;
//   game3: number;
// }

// interface Player {
//   name: string;
//   country: string;
//   flagUrl: string;
//   points: number;
//   rank: number;
//   matches: Match[];
// }

// interface Group {
//   groupName: string;
//   players: Player[];
// }

// interface Series {
//   title: string;
//   groups: Group[];
// }

const seriesData = [
  // Youth Division
  {
    title: 'Single Youth U-7',
    groups: [
      {
        groupName: 'Group A',
        players: [
          { name: 'Suradech M.', country: 'THA', flagUrl: 'https://www.worldometers.info/img/flags/th-flag.gif', points: 3, rank: 1, matches: [{ game1: 11, game2: 7, game3: 11 }] },
          { name: 'Thura Z.', country: 'MYA', flagUrl: 'https://www.worldometers.info/img/flags/bm-flag.gif', points: 2, rank: 2, matches: [{ game1: 7, game2: 11, game3: 5 }] },
          { name: 'Zhangwang C.', country: 'CHN', flagUrl: 'https://www.worldometers.info/img/flags/ch-flag.gif', points: 1, rank: 3, matches: [{ game1: 11, game2: 9, game3: 11 }] }
        ],
      },
      {
        groupName: 'Group B',
        players: [
          { name: 'Player A', country: 'SGP', flagUrl: 'https://www.worldometers.info/img/flags/sn-flag.gif', points: 3, rank: 1, matches: [{ game1: 11, game2: 9, game3: 8 }] },
          { name: 'Player B', country: 'VIE', flagUrl: 'https://www.worldometers.info/img/flags/vm-flag.gif', points: 2, rank: 2, matches: [{ game1: 8, game2: 11, game3: 9 }] },
          { name: 'Player C', country: 'IDN', flagUrl: 'https://www.worldometers.info/img/flags/id-flag.gif', points: 1, rank: 3, matches: [{ game1: 10, game2: 7, game3: 11 }] }
        ],
      },
    ],
  },
  {
    title: 'Single Youth U-9',
    groups: [
      {
        groupName: 'Group A',
        players: [
          { name: 'Akira S.', country: 'JPN', flagUrl: 'https://www.worldometers.info/img/flags/ja-flag.gif', points: 3, rank: 1, matches: [{ game1: 11, game2: 6, game3: 10 }] },
          { name: 'Jin W.', country: 'KOR', flagUrl: 'https://www.worldometers.info/img/flags/ks-flag.gif', points: 2, rank: 2, matches: [{ game1: 10, game2: 11, game3: 7 }] },
          { name: 'Carlos R.', country: 'PHI', flagUrl: 'https://www.worldometers.info/img/flags/rp-flag.gif', points: 1, rank: 3, matches: [{ game1: 9, game2: 8, game3: 11 }] }
        ],
      },
      {
        groupName: 'Group B',
        players: [
          { name: 'Samuel O.', country: 'NGA', flagUrl: 'https://www.worldometers.info/img/flags/ni-flag.gif', points: 3, rank: 1, matches: [{ game1: 11, game2: 7, game3: 11 }] },
          { name: 'Michael T.', country: 'USA', flagUrl: 'https://www.worldometers.info/img/flags/us-flag.gif', points: 2, rank: 2, matches: [{ game1: 8, game2: 11, game3: 10 }] },
          { name: 'David B.', country: 'CAN', flagUrl: 'https://www.worldometers.info/img/flags/ca-flag.gif', points: 1, rank: 3, matches: [{ game1: 9, game2: 11, game3: 9 }] }
        ],
      },
    ],
  },
  {
    title: 'Single Youth U-12',
    groups: [
      {
        groupName: 'Group A',
        players: [
          { name: 'Liam T.', country: 'USA', flagUrl: 'https://www.worldometers.info/img/flags/us-flag.gif', points: 3, rank: 1, matches: [{ game1: 10, game2: 9, game3: 11 }] },
          { name: 'Marco B.', country: 'ITA', flagUrl: 'https://www.worldometers.info/img/flags/it-flag.gif', points: 2, rank: 2, matches: [{ game1: 11, game2: 7, game3: 8 }] },
          { name: 'Raul G.', country: 'ESP', flagUrl: 'https://www.worldometers.info/img/flags/sp-flag.gif', points: 1, rank: 3, matches: [{ game1: 7, game2: 11, game3: 6 }] }
        ],
      },
      {
        groupName: 'Group B',
        players: [
          { name: 'Pierre L.', country: 'FRA', flagUrl: 'https://www.worldometers.info/img/flags/fr-flag.gif', points: 3, rank: 1, matches: [{ game1: 11, game2: 5, game3: 11 }] },
          { name: 'Takumi H.', country: 'JPN', flagUrl: 'https://www.worldometers.info/img/flags/ja-flag.gif', points: 2, rank: 2, matches: [{ game1: 8, game2: 11, game3: 7 }] },
          { name: 'Chen W.', country: 'CHN', flagUrl: 'https://www.worldometers.info/img/flags/ch-flag.gif', points: 1, rank: 3, matches: [{ game1: 7, game2: 9, game3: 8 }] }
        ],
      },
    ],
  },
  // General Division
  {
    title: 'Single General U-21',
    groups: [
      {
        groupName: 'Group A',
        players: [
          { name: 'John D.', country: 'GBR', flagUrl: 'https://www.worldometers.info/img/flags/uk-flag.gif', points: 3, rank: 1, matches: [{ game1: 11, game2: 8, game3: 11 }] },
          { name: 'Pierre L.', country: 'FRA', flagUrl: 'https://www.worldometers.info/img/flags/fr-flag.gif', points: 2, rank: 2, matches: [{ game1: 8, game2: 10, game3: 9 }] },
          { name: 'Takumi H.', country: 'JPN', flagUrl: 'https://www.worldometers.info/img/flags/ja-flag.gif', points: 1, rank: 3, matches: [{ game1: 10, game2: 7, game3: 8 }] }
        ],
      },
      {
        groupName: 'Group B',
        players: [
          { name: 'Carlos T.', country: 'BRA', flagUrl: 'https://www.worldometers.info/img/flags/br-flag.gif', points: 3, rank: 1, matches: [{ game1: 9, game2: 11, game3: 10 }] },
          { name: 'Ivan K.', country: 'RUS', flagUrl: 'https://www.worldometers.info/img/flags/rs-flag.gif', points: 2, rank: 2, matches: [{ game1: 11, game2: 8, game3: 7 }] },
          { name: 'Sergei L.', country: 'RUS', flagUrl: 'https://www.worldometers.info/img/flags/rs-flag.gif', points: 1, rank: 3, matches: [{ game1: 7, game2: 11, game3: 9 }] }
        ],
      },
    ],
  },
  {
    title: 'Single General U-25',
    groups: [
      {
        groupName: 'Group A',
        players: [
          { name: 'Oliver S.', country: 'GER', flagUrl: 'https://www.worldometers.info/img/flags/gm-flag.gif', points: 3, rank: 1, matches: [{ game1: 11, game2: 10, game3: 9 }] },
          { name: 'Jin K.', country: 'KOR', flagUrl: 'https://www.worldometers.info/img/flags/ks-flag.gif', points: 2, rank: 2, matches: [{ game1: 9, game2: 11, game3: 8 }] },
          { name: 'Hassan A.', country: 'EGY', flagUrl: 'https://www.worldometers.info/img/flags/eg-flag.gif', points: 1, rank: 3, matches: [{ game1: 8, game2: 9, game3: 10 }] }
        ],
      },
      {
        groupName: 'Group B',
        players: [
          { name: 'Ali R.', country: 'UAE', flagUrl: 'https://www.worldometers.info/img/flags/ae-flag.gif', points: 3, rank: 1, matches: [{ game1: 11, game2: 9, game3: 8 }] },
          { name: 'Mohammed S.', country: 'SAU', flagUrl: 'https://www.worldometers.info/img/flags/sa-flag.gif', points: 2, rank: 2, matches: [{ game1: 7, game2: 8, game3: 10 }] },
          { name: 'David W.', country: 'CAN', flagUrl: 'https://www.worldometers.info/img/flags/ca-flag.gif', points: 1, rank: 3, matches: [{ game1: 9, game2: 11, game3: 7 }] }
        ],
      },
    ],
  },
  {
    title: 'Single General U-31',
    groups: [
      {
        groupName: 'Group A',
        players: [
          { name: 'Rajiv N.', country: 'IND', flagUrl: 'https://www.worldometers.info/img/flags/in-flag.gif', points: 3, rank: 1, matches: [{ game1: 11, game2: 7, game3: 11 }] },
          { name: 'Alex P.', country: 'AUS', flagUrl: 'https://www.worldometers.info/img/flags/as-flag.gif', points: 2, rank: 2, matches: [{ game1: 8, game2: 10, game3: 7 }] },
          { name: 'Jean L.', country: 'FRA', flagUrl: 'https://www.worldometers.info/img/flags/fr-flag.gif', points: 1, rank: 3, matches: [{ game1: 9, game2: 8, game3: 10 }] }
        ],
      },
      {
        groupName: 'Group B',
        players: [
          { name: 'Carlos M.', country: 'ESP', flagUrl: 'https://www.worldometers.info/img/flags/sp-flag.gif', points: 3, rank: 1, matches: [{ game1: 9, game2: 10, game3: 11 }] },
          { name: 'Chen W.', country: 'CHN', flagUrl: 'https://www.worldometers.info/img/flags/ch-flag.gif', points: 2, rank: 2, matches: [{ game1: 8, game2: 9, game3: 7 }] },
          { name: 'Ivan T.', country: 'RUS', flagUrl: 'https://www.worldometers.info/img/flags/rs-flag.gif', points: 1, rank: 3, matches: [{ game1: 7, game2: 11, game3: 8 }] }
        ],
      },
    ],
  },
];

const seriesOptions: Record<string, string[]> = {
  'All Divisions': [
    'All Series',
    'Single Youth U-7',
    'Single Youth U-9',
    'Single Youth U-12',
    'Single Youth U-15',
    'Double Youth U-15',
    'Single General U-21',
    'Single General U-25',
    'Single General U-31',
    'Single General U-40',
    'Single General U-50',
    'Single General U-60',
    'Double General U-120',
  ],
  Youth: [
    'All Series',
    'Single Youth U-7',
    'Single Youth U-9',
    'Single Youth U-12',
    'Single Youth U-15',
    'Double Youth U-15',
  ],
  General: [
    'All Series',
    'Single General U-21',
    'Single General U-25',
    'Single General U-31',
    'Single General U-40',
    'Single General U-50',
    'Single General U-60',
    'Double General U-120',
  ],
};

export default function Scoreboard() {
  const [division, setDivision] = useState<string>('All Divisions');
  const [series, setSeries] = useState<string>('All Series');
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for search term


  // Filter series data based on division, series, and search term
  const filteredSeries = seriesData
    .filter((ser) => {
      if (division === 'All Divisions' && series === 'All Series') {
        return true;
      }
      if (division === 'All Divisions') {
        return ser.title === series;
      }
      if (series === 'All Series') {
        return ser.title.toLowerCase().includes(division.toLowerCase());
      }
      return ser.title === series && ser.title.toLowerCase().includes(division.toLowerCase());
    })
    .map((ser) => ({
      ...ser,
      groups: ser.groups.filter((group) =>
        group.players.some((player) =>
          player.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ),
    }))
    .filter((ser) => ser.groups.length > 0);

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#000' }}>
      <Navbar />

      {/* Filter and Search Section */}
      <div style={{ padding: '10px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <select
          value={division}
          onChange={(e) => {
            const newDivision = e.target.value;
            setDivision(newDivision);
            setSeries('All Series'); // Reset series to "All Series" when the division changes
          }}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #FFFFFF',
            backgroundColor: '#1B1D2D',
            color: '#FFFFFF',
            minWidth: '120px',
          }}
        >
          <option>All Divisions</option>
          <option>Youth</option>
          <option>General</option>
        </select>

        <select
          value={series}
          onChange={(e) => setSeries(e.target.value)}
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #FFFFFF',
            backgroundColor: '#1B1D2D',
            color: '#FFFFFF',
            minWidth: '120px',
          }}
        >
          {(seriesOptions[division] || ['All Series']).map((seriesOption, idx) => (
            <option key={idx} value={seriesOption}>{seriesOption}</option>
          ))}
        </select>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by player name..."
          style={{
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #FFFFFF',
            backgroundColor: '#1B1D2D',
            color: '#FFFFFF',
            minWidth: '200px',
          }}
        />
      </div>

      {/* Display Series and Groups */}
      {filteredSeries.map((ser) => (
        <div key={ser.title} style={{ margin: '20px auto', width: '90%', maxWidth: '800px', backgroundColor: '#1B1D2D', borderRadius: '8px' }}>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.8rem', textAlign: 'center', padding: '10px 0' }}>{ser.title}</h2>
          {ser.groups.map((group) => (
            <div key={group.groupName} style={{ margin: '20px 0', padding: '10px', backgroundColor: '#2B2D3D', borderRadius: '8px' }}>
              <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', textAlign: 'center', marginBottom: '10px' }}>{group.groupName}</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '12px', color: '#FFFFFF', textAlign: 'center', backgroundColor: '#333' }}>Country</th>
                      <th style={{ padding: '12px', color: '#FFFFFF', textAlign: 'center', backgroundColor: '#333' }}>Name</th>
                      <th style={{ padding: '12px', color: '#FFFFFF', textAlign: 'center', backgroundColor: '#333' }}>Game 1</th>
                      <th style={{ padding: '12px', color: '#FFFFFF', textAlign: 'center', backgroundColor: '#333' }}>Game 2</th>
                      <th style={{ padding: '12px', color: '#FFFFFF', textAlign: 'center', backgroundColor: '#333' }}>Game 3</th>
                      <th style={{ padding: '12px', color: '#FFFFFF', textAlign: 'center', backgroundColor: '#333' }}>Points</th>
                      <th style={{ padding: '12px', color: '#FFFFFF', textAlign: 'center', backgroundColor: '#333' }}>Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.players.map((player, idx) => (
                      <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? '#2B2D3D' : '#1B1D2D' }}>
                        <td style={{ padding: '12px', textAlign: 'center' }}>
                          <Image
                            src={player.flagUrl}
                            alt={`${player.country} Flag`}
                            width={24}
                            height={16} // Adjust the height as needed
                          />
                        </td>                        <td style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', color: '#FFFFFF' }}>{player.name}</td>
                        <td style={{ padding: '12px', textAlign: 'center', color: '#FF4D4D' }}>{player.matches[0].game1 || '-'}</td>
                        <td style={{ padding: '12px', textAlign: 'center', color: '#FF4D4D' }}>{player.matches[0].game2 || '-'}</td>
                        <td style={{ padding: '12px', textAlign: 'center', color: '#FF4D4D' }}>{player.matches[0].game3 || '-'}</td>
                        <td style={{ padding: '12px', textAlign: 'center', color: '#FFFFFF' }}>{player.points}</td>
                        <td style={{ padding: '12px', textAlign: 'center', color: '#FFFFFF' }}>{player.rank}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Responsive CSS for Mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 1.5rem;
          }
          h3 {
            font-size: 1.3rem;
          }
          table th,
          table td {
            font-size: 0.8rem;
          }
        }
        @media (max-width: 480px) {
          h2,
          h3 {
            font-size: 1.2rem;
          }
          table th,
          table td {
            font-size: 0.7rem;
          }
          select {
            padding: 6px;
          }
        }
      `}</style>
    </div>
  );
}
