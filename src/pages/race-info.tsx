import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

// Define interfaces for the data structure
// interface Player {
//   matchId: number;
//   team: string;
//   name: string;
// }

// interface Series {
//   id: number;
//   title: string;
//   players: Player[];
// }

interface Match {
  time: string;
  eventNo: number;
  event: string;
  round: string;
  group: number;
  table: number;
  player1: string;
  team1: string;
  result1: number;
  player2: string;
  team2: string;
  result2: number;
}

const seriesData = [
  // Youth Series - Single Table for U-7
  {
    id: 1,
    title: 'Single Youth U-7',
    players: [
      { matchId: 1, team: 'Spinning Star', name: 'Suradech M.' },
      { matchId: 1, team: 'MYA Tigers', name: 'Thura Z.' },
      { matchId: 2, team: 'Thai Lions', name: 'Thanakorn P.' },
      { matchId: 2, team: 'SGP Warriors', name: 'Lee K.' },
      { matchId: 3, team: 'Bangkok Blasters', name: 'Arthit C.' },
      { matchId: 3, team: 'Philippine Eagles', name: 'Carlos D.' },
    ],
  },
  // Youth U-9 Series
  {
    id: 2,
    title: 'Single Youth U-9',
    players: [
      { matchId: 1, team: 'China Dragons', name: 'Zhangwang C.' },
      { matchId: 1, team: 'Vietnam Phoenix', name: 'Nguyen T.' },
      { matchId: 2, team: 'China Dragons', name: 'Jiang Z.' },
      { matchId: 2, team: 'Korea Hawks', name: 'Park J.' },
      { matchId: 3, team: 'China Dragons', name: 'Liu M.' },
      { matchId: 3, team: 'Indonesian Tigers', name: 'Agung B.' },
    ],
  },
  // Youth U-12 Series
  {
    id: 3,
    title: 'Single Youth U-12',
    players: [
      { matchId: 1, team: 'Tokyo Samurai', name: 'Hiroshi S.' },
      { matchId: 1, team: 'Seoul Ninjas', name: 'Kim J.' },
      { matchId: 2, team: 'Tokyo Samurai', name: 'Yuto M.' },
      { matchId: 2, team: 'Seoul Ninjas', name: 'Jin H.' },
      { matchId: 3, team: 'Tokyo Samurai', name: 'Kenta S.' },
      { matchId: 3, team: 'Seoul Ninjas', name: 'Park S.' },
    ],
  },
  // General U-21 Series
  {
    id: 4,
    title: 'Single General U-21',
    players: [
      { matchId: 1, team: 'USA Eagles', name: 'John D.' },
      { matchId: 1, team: 'Canada Moose', name: 'James T.' },
      { matchId: 2, team: 'USA Eagles', name: 'Michael R.' },
      { matchId: 2, team: 'Canada Moose', name: 'David B.' },
      { matchId: 3, team: 'USA Eagles', name: 'Steve W.' },
      { matchId: 3, team: 'Canada Moose', name: 'Tommy C.' },
    ],
  },
  // Additional Series Data for more groups (e.g., U-14, U-18, and so forth)
  {
    id: 5,
    title: 'Single Youth U-14',
    players: [
      { matchId: 1, team: 'German Falcons', name: 'Hans G.' },
      { matchId: 1, team: 'French Roosters', name: 'Pierre L.' },
      { matchId: 2, team: 'German Falcons', name: 'Karl F.' },
      { matchId: 2, team: 'French Roosters', name: 'Jean M.' },
      { matchId: 3, team: 'German Falcons', name: 'Lucas H.' },
      { matchId: 3, team: 'French Roosters', name: 'Claude P.' },
    ],
  },
  {
    id: 6,
    title: 'Single Youth U-16',
    players: [
      { matchId: 1, team: 'Russian Bears', name: 'Ivan K.' },
      { matchId: 1, team: 'Spanish Bulls', name: 'Carlos G.' },
      { matchId: 2, team: 'Russian Bears', name: 'Sergei P.' },
      { matchId: 2, team: 'Spanish Bulls', name: 'Miguel T.' },
      { matchId: 3, team: 'Russian Bears', name: 'Nikolai R.' },
      { matchId: 3, team: 'Spanish Bulls', name: 'Pablo F.' },
    ],
  },
  {
    id: 7,
    title: 'Single Youth U-18',
    players: [
      { matchId: 1, team: 'Brazil Samba', name: 'Felipe N.' },
      { matchId: 1, team: 'Argentina Stars', name: 'Diego A.' },
      { matchId: 2, team: 'Brazil Samba', name: 'Lucas M.' },
      { matchId: 2, team: 'Argentina Stars', name: 'Javier C.' },
      { matchId: 3, team: 'Brazil Samba', name: 'Ricardo B.' },
      { matchId: 3, team: 'Argentina Stars', name: 'Gonzalo D.' },
    ],
  },
  {
    id: 8,
    title: 'Single General U-25',
    players: [
      { matchId: 1, team: 'London Lions', name: 'Oliver T.' },
      { matchId: 1, team: 'Dublin Shamrocks', name: 'Sean C.' },
      { matchId: 2, team: 'London Lions', name: 'James W.' },
      { matchId: 2, team: 'Dublin Shamrocks', name: 'Liam O.' },
      { matchId: 3, team: 'London Lions', name: 'William B.' },
      { matchId: 3, team: 'Dublin Shamrocks', name: 'Patrick M.' },
    ],
  },
  {
    id: 9,
    title: 'Single General Open',
    players: [
      { matchId: 1, team: 'Aussie Kangaroos', name: 'Luke H.' },
      { matchId: 1, team: 'Kiwi Eagles', name: 'Mason R.' },
      { matchId: 2, team: 'Aussie Kangaroos', name: 'Liam J.' },
      { matchId: 2, team: 'Kiwi Eagles', name: 'Ethan W.' },
      { matchId: 3, team: 'Aussie Kangaroos', name: 'Noah D.' },
      { matchId: 3, team: 'Kiwi Eagles', name: 'Oscar P.' },
    ],
  },
  {
    id: 10,
    title: 'Single Masters U-30',
    players: [
      { matchId: 1, team: 'Team Alpha', name: 'Edward M.' },
      { matchId: 1, team: 'Team Bravo', name: 'Henry L.' },
      { matchId: 2, team: 'Team Alpha', name: 'Andrew T.' },
      { matchId: 2, team: 'Team Bravo', name: 'David G.' },
      { matchId: 3, team: 'Team Alpha', name: 'Samuel F.' },
      { matchId: 3, team: 'Team Bravo', name: 'Charles N.' },
    ],
  },
  {
    id: 11,
    title: 'Single General U-35',
    players: [
      { matchId: 1, team: 'Tokyo Titans', name: 'Hiro N.' },
      { matchId: 1, team: 'Seoul Spartans', name: 'Min J.' },
      { matchId: 2, team: 'Tokyo Titans', name: 'Takashi A.' },
      { matchId: 2, team: 'Seoul Spartans', name: 'Lee H.' },
      { matchId: 3, team: 'Tokyo Titans', name: 'Kenshin O.' },
      { matchId: 3, team: 'Seoul Spartans', name: 'Kim S.' },
    ],
  },
  {
    id: 12,
    title: 'Single Legends Open',
    players: [
      { matchId: 1, team: 'Golden Stars', name: 'Rick F.' },
      { matchId: 1, team: 'Silver Knights', name: 'Tom P.' },
      { matchId: 2, team: 'Golden Stars', name: 'Mike W.' },
      { matchId: 2, team: 'Silver Knights', name: 'John C.' },
      { matchId: 3, team: 'Golden Stars', name: 'Frank B.' },
      { matchId: 3, team: 'Silver Knights', name: 'Bill L.' },
    ],
  },
];

// Schedule data generation
let groupCounter = 1;
const scheduleData: Match[] = seriesData.flatMap((series) => {
  const matches: Match[] = [];
  let table = 1;

  for (let i = 0; i < series.players.length; i += 2) {
    if (series.players[i + 1]) {
      matches.push({
        time: '8:30',
        eventNo: i / 2 + 1,
        event: series.title,
        round: 'R1',
        group: groupCounter++,
        table: table++,
        player1: series.players[i].name,
        team1: series.players[i].team,
        result1: 2,
        player2: series.players[i + 1].name,
        team2: series.players[i + 1].team,
        result2: 0,
      });
    }
  }
  return matches;
});

export default function RaceInfo() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredData = scheduleData.filter((match) =>
    match.player1.toLowerCase().includes(searchTerm.toLowerCase()) ||
    match.team1.toLowerCase().includes(searchTerm.toLowerCase()) ||
    match.player2.toLowerCase().includes(searchTerm.toLowerCase()) ||
    match.team2.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      <Navbar />
      <div style={searchBarContainer}>
        <input
          type="text"
          placeholder="Search by team or player name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchBarStyle}
        />
      </div>
      <div style={tableContainer}>
        <h2 style={tableTitleStyle}>Program of the Day</h2>
        <div style={tableWrapper}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={headerCellStyle}>Time</th>
                <th style={headerCellStyle}>No.</th>
                <th style={headerCellStyle}>Event</th>
                <th style={headerCellStyle}>Round</th>
                <th style={headerCellStyle}>Group</th>
                <th style={headerCellStyle}>Table</th>
                <th style={headerCellStyle}>Name Player</th>
                <th style={headerCellStyle}>Team 1</th>
                <th style={headerCellStyle}>Result</th>
                <th style={headerCellStyle}>Name Player</th>
                <th style={headerCellStyle}>Team 2</th>
                <th style={headerCellStyle}>Result</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((match, index) => (
                <tr key={index} style={index % 2 === 0 ? rowStyle : alternateRowStyle}>
                  <td style={cellStyle}>{match.time}</td>
                  <td style={cellStyle}>{match.eventNo}</td>
                  <td style={cellStyle}>{match.event}</td>
                  <td style={cellStyle}>{match.round}</td>
                  <td style={cellStyle}>{match.group}</td>
                  <td style={cellStyle}>{match.table}</td>
                  <td style={cellStyle}>{match.player1}</td>
                  <td style={cellStyle}>{match.team1}</td>
                  <td style={cellStyle}>{match.result1}</td>
                  <td style={cellStyle}>{match.player2}</td>
                  <td style={cellStyle}>{match.team2}</td>
                  <td style={cellStyle}>{match.result2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Styles
const containerStyle: React.CSSProperties = {
  fontFamily: 'Poppins, sans-serif',
  backgroundColor: '#000',
  color: '#fff',
};

const searchBarContainer: React.CSSProperties = {
  padding: '20px',
  textAlign: 'center',
};

const searchBarStyle: React.CSSProperties = {
  padding: '8px',
  width: '100%',
  maxWidth: '600px',
  borderRadius: '4px',
  border: '1px solid #444',
  marginBottom: '20px',
  backgroundColor: '#000',
  color: '#fff',
};

const tableContainer: React.CSSProperties = {
  padding: '20px',
};

const tableTitleStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '20px',
  fontSize: '1.5em',
};

const tableWrapper: React.CSSProperties = {
  overflowX: 'auto',
  width: '100%',
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
};

// Table cell styles
const headerCellStyle: React.CSSProperties = {
  padding: '10px',
  backgroundColor: '#444',
  color: '#fff',
  fontWeight: 'bold',
  textAlign: 'center',
};

const cellStyle: React.CSSProperties = {
  padding: '8px',
  border: '1px solid #444',
  textAlign: 'center',
};

const rowStyle: React.CSSProperties = {
  backgroundColor: '#1B1D2D',
};

const alternateRowStyle: React.CSSProperties = {
  backgroundColor: '#2B2D3D',
};
