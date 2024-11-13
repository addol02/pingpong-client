import Navbar from '../components/Navbar';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/globals.css';

interface Player {
  matchId: number;
  country: string;
  flagUrl: string;
  name: string;
  game1: number;
  game2: number;
  game3: number;
}

// interface Series {
//   id: number;
//   title: string;
//   players: Player[];
// }
const seriesData = [
  {
    id: 1,
    title: 'Single Youth U-7',
    players: [
      { matchId: 1, country: 'THA', flagUrl: 'https://www.worldometers.info/img/flags/th-flag.gif', name: 'Suradech M.', game1: 11, game2: 5, game3: 11 },
      { matchId: 1, country: 'MYA', flagUrl: 'https://www.worldometers.info/img/flags/bm-flag.gif', name: 'Thura Z.', game1: 9, game2: 11, game3: 5 },
      { matchId: 2, country: 'THA', flagUrl: 'https://www.worldometers.info/img/flags/th-flag.gif', name: 'Thanakorn P.', game1: 8, game2: 11, game3: 9 },
      { matchId: 2, country: 'SGP', flagUrl: 'https://www.worldometers.info/img/flags/sn-flag.gif', name: 'Lee K.', game1: 11, game2: 9, game3: 11 },
      { matchId: 3, country: 'THA', flagUrl: 'https://www.worldometers.info/img/flags/th-flag.gif', name: 'Arthit C.', game1: 10, game2: 6, game3: 11 },
      { matchId: 3, country: 'PHI', flagUrl: 'https://www.worldometers.info/img/flags/rp-flag.gif', name: 'Carlos D.', game1: 11, game2: 11, game3: 9 },
    ],
  },
  {
    id: 2,
    title: 'Single Youth U-9',
    players: [
      { matchId: 1, country: 'CHN', flagUrl: 'https://www.worldometers.info/img/flags/ch-flag.gif', name: 'Zhangwang C.', game1: 11, game2: 9, game3: 11 },
      { matchId: 1, country: 'VIE', flagUrl: 'https://www.worldometers.info/img/flags/vm-flag.gif', name: 'Nguyen T.', game1: 7, game2: 11, game3: 8 },
      { matchId: 2, country: 'CHN', flagUrl: 'https://www.worldometers.info/img/flags/ch-flag.gif', name: 'Jiang Z.', game1: 10, game2: 11, game3: 11 },
      { matchId: 2, country: 'KOR', flagUrl: 'https://www.worldometers.info/img/flags/ks-flag.gif', name: 'Park J.', game1: 8, game2: 9, game3: 7 },
      { matchId: 3, country: 'CHN', flagUrl: 'https://www.worldometers.info/img/flags/ch-flag.gif', name: 'Liu M.', game1: 11, game2: 11, game3: 10 },
      { matchId: 3, country: 'IDN', flagUrl: 'https://www.worldometers.info/img/flags/id-flag.gif', name: 'Agung B.', game1: 9, game2: 8, game3: 11 },
    ],
  },
  {
    id: 3,
    title: 'Single Youth U-12',
    players: [
      { matchId: 1, country: 'JPN', flagUrl: 'https://www.worldometers.info/img/flags/ja-flag.gif', name: 'Hiroshi S.', game1: 10, game2: 11, game3: 9 },
      { matchId: 1, country: 'KOR', flagUrl: 'https://www.worldometers.info/img/flags/ks-flag.gif', name: 'Kim J.', game1: 11, game2: 7, game3: 11 },
      { matchId: 2, country: 'JPN', flagUrl: 'https://www.worldometers.info/img/flags/ja-flag.gif', name: 'Yuto M.', game1: 9, game2: 11, game3: 10 },
      { matchId: 2, country: 'KOR', flagUrl: 'https://www.worldometers.info/img/flags/ks-flag.gif', name: 'Jin H.', game1: 11, game2: 6, game3: 11 },
      { matchId: 3, country: 'JPN', flagUrl: 'https://www.worldometers.info/img/flags/ja-flag.gif', name: 'Kenta S.', game1: 11, game2: 8, game3: 9 },
      { matchId: 3, country: 'KOR', flagUrl: 'https://www.worldometers.info/img/flags/ks-flag.gif', name: 'Park S.', game1: 8, game2: 11, game3: 11 },
    ],
  },
  {
    id: 4,
    title: 'Single General U-21',
    players: [
      { matchId: 1, country: 'USA', flagUrl: 'https://www.worldometers.info/img/flags/us-flag.gif', name: 'John D.', game1: 8, game2: 11, game3: 11 },
      { matchId: 1, country: 'CAN', flagUrl: 'https://www.worldometers.info/img/flags/ca-flag.gif', name: 'James T.', game1: 11, game2: 9, game3: 8 },
      { matchId: 2, country: 'USA', flagUrl: 'https://www.worldometers.info/img/flags/us-flag.gif', name: 'Michael R.', game1: 10, game2: 8, game3: 11 },
      { matchId: 2, country: 'CAN', flagUrl: 'https://www.worldometers.info/img/flags/ca-flag.gif', name: 'David B.', game1: 11, game2: 11, game3: 9 },
      { matchId: 3, country: 'USA', flagUrl: 'https://www.worldometers.info/img/flags/us-flag.gif', name: 'Steve W.', game1: 9, game2: 8, game3: 10 },
      { matchId: 3, country: 'CAN', flagUrl: 'https://www.worldometers.info/img/flags/ca-flag.gif', name: 'Tommy C.', game1: 11, game2: 10, game3: 11 },
    ],
  },
];

const seriesOptions: Record<string, string[]> = {
  All: [
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
  Youth: ['All Series', 'Single Youth U-7', 'Single Youth U-9', 'Single Youth U-12', 'Single Youth U-15', 'Double Youth U-15'],
  General: ['All Series', 'Single General U-21', 'Single General U-25', 'Single General U-31', 'Single General U-40', 'Single General U-50', 'Single General U-60', 'Double General U-120'],
};

export default function Home() {
  const [division, setDivision] = useState<string>('All Division');
  const [series, setSeries] = useState<string>('All Series');
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for search term

  // Handle change for division and reset series
  // const handleDivisionChange = (newDivision: string) => {
  //   setDivision(newDivision);
  //   setSeries('All Series'); // Reset series to 'All Series' when division changes
  // };

  const filteredSeries = seriesData
    .filter((ser) => {
      if (division === 'All Division' && series === 'All Series') {
        return true;
      }
      if (division === 'All Division') {
        return ser.title === series;
      }
      if (series === 'All Series') {
        return ser.title.toLowerCase().includes(division.toLowerCase());
      }
      return (
        ser.title.toLowerCase().includes(division.toLowerCase()) &&
        ser.title === series
      );
    })
    .map((ser) => {
      const filteredMatches = ser.players.reduce<Player[]>((acc, player, index) => {
        if (index % 2 === 0) {
          const opponent = ser.players[index + 1];
          if (
            (player && player.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (opponent && opponent.name.toLowerCase().includes(searchTerm.toLowerCase()))
          ) {
            acc.push(player, opponent);
          }
        }
        return acc;
      }, []);

      return { ...ser, players: filteredMatches };
    })
    .filter((ser) => ser.players.length > 0);

  return (
    <div style={{ position: 'relative', height: '100vh', backgroundImage: 'url(https://img5.pic.in.th/file/secure-sv1/homebgcover.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <Navbar />

      <div style={{ position: 'absolute', top: '40%', left: '5%', color: 'white', fontFamily: 'Impact, sans-serif', maxWidth: '80%' }}>
        <h1 style={{
          fontSize: '8vw',
          fontWeight: 'thin',
          backgroundImage: 'url(https://img5.pic.in.th/file/secure-sv1/bgtext1.png)',
          backgroundSize: 'cover',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
          lineHeight: '0.9'
        }}>
          ITC GLOBAL
        </h1>
        <h2 style={{
          fontSize: '3vw',
          fontWeight: '500',
          backgroundColor: '#ffffff',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
          lineHeight: '0.9'
        }}>
          Table Tennis Championship 2024
        </h2>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          flexWrap: 'wrap',
          zIndex: 2,
          flexDirection: 'row',
          gap: '40px',
        }}
        className="button-group"
      >
        <Link href="/race-tree">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '50px',
              padding: '20px 40px',
              color: '#000',
              fontWeight: 'bold',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.5rem',
              maxWidth: '600px',
              textAlign: 'center',
              cursor: 'pointer',
            }}
            className="hoverable-button"
          >
            <Image
              src="https://img2.pic.in.th/pic/ping-pong.png"
              alt="Race Tree Icon"
              width={40}
              height={40}
              style={{ marginRight: '20px' }}
            />
            Race Tree
          </div>
        </Link>

        <Link href="/scoreboard-overview">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '50px',
              padding: '20px 40px',
              color: '#000',
              fontWeight: 'bold',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.5rem',
              maxWidth: '600px',
              textAlign: 'center',
              cursor: 'pointer',
            }}
            className="hoverable-button"
          >
            <Image
              src="https://img2.pic.in.th/pic/ping-pong.png"
              alt="Overview Icon"
              width={40}
              height={40}
              style={{ marginRight: '20px' }}
            />
            Overview
          </div>
        </Link>

        <Link href="/race-info">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '50px',
              padding: '20px 40px',
              color: '#000',
              fontWeight: 'bold',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.5rem',
              maxWidth: '600px',
              textAlign: 'center',
              cursor: 'pointer',
            }}
            className="hoverable-button"
          >
            <Image
              src="https://img2.pic.in.th/pic/ping-pong.png"
              alt="Race Info Icon"
              width={40}
              height={40}
              style={{ marginRight: '20px' }}
            />
            Race Info
          </div>
        </Link>
      </div>


      <div style={{ backgroundColor: '#1a1a1a', padding: '2rem 1rem', color: 'white', marginTop: '90vh', zIndex: 0 }}>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <h3 style={{ paddingBottom: '20px', fontSize: '2rem', fontFamily: 'Impact, sans-serif' }}>
            ITC Global Table Tennis Championship 2024
          </h3>
          <input
            type="text"
            placeholder="Search by player name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '0.5rem',
              marginBottom: '1rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              backgroundColor: '#333',
              color: 'white',
              width: '100%',
              maxWidth: '300px',
              textAlign: 'center'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'row', gap: '15px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <select value={division} onChange={(e) => setDivision(e.target.value)} style={{ padding: '0.5rem', backgroundColor: '#333', color: 'white', border: 'none', fontSize: '1rem' }}>
              <option>All Division</option>
              <option>Youth</option>
              <option>General</option>
            </select>
            <select value={series} onChange={(e) => setSeries(e.target.value)} style={{ padding: '0.5rem', backgroundColor: '#333', color: 'white', border: 'none', fontSize: '1rem' }}>
              {(seriesOptions[division] || seriesOptions.All).map((seriesOption, idx) => (
                <option key={idx} value={seriesOption}>{seriesOption}</option>
              ))}
            </select>
          </div>
        </div>

        {filteredSeries.map((ser) => (
          <div key={ser.id} style={{ marginBottom: '2rem' }}>
            <h4 style={{
              padding: '10px 0',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#fff',
              textAlign: 'center',
              backgroundColor: '#444',
              borderRadius: '8px',
              margin: '0 20px',
            }}>
              {ser.title} - Qualifying
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '0 20px', marginTop: '1rem' }}>
              {ser.players.reduce<JSX.Element[]>((acc, player, index) => {
                if (index % 2 === 0) {
                  const opponent = ser.players[index + 1];
                  if (opponent) {
                    acc.push(
                      <div key={index} style={{
                        backgroundColor: '#333',
                        padding: '15px',
                        borderRadius: '8px',
                        color: 'white',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
                          <div style={{ textAlign: 'left', flex: 1 }}>
                            <Image
                              src={player.flagUrl}
                              alt={`${player.country} Flag`}
                              width={30} // specify width
                              height={20} // specify height
                              style={{ marginBottom: '5px' }}
                            />
                            <p style={{ fontSize: '0.9rem' }}>{player.name}</p>
                            <p style={{ fontSize: '0.8rem', color: '#ccc' }}>Score: {player.game1} {player.game2} {player.game3}</p>
                          </div>
                          <h3 style={{ color: '#fff', fontSize: '2rem', margin: '0 10px' }}>3-1</h3>
                          <div style={{ textAlign: 'right', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <Image
                              src={opponent.flagUrl}
                              alt={`${opponent.country} Flag`}
                              width={30} // specify width
                              height={20} // specify height
                              style={{ marginBottom: '5px' }}
                            />
                            <p style={{ fontSize: '0.9rem' }}>{opponent.name}</p>
                            <p style={{ fontSize: '0.8rem', color: '#ccc' }}>Score: {opponent.game1} {opponent.game2} {opponent.game3}</p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                }
                return acc;
              }, [])}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
