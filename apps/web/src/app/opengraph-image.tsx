import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'FAAIF Group — Empowering Diverse Industries Through Innovation';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#0F172A',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40 }}>
        <span
          style={{
            fontFamily: 'sans-serif',
            fontWeight: 700,
            fontSize: 32,
            color: '#fff',
            letterSpacing: '-0.02em',
          }}
        >
          FAAIF <span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>Group</span>
        </span>
        <span
          style={{
            width: 2,
            height: 24,
            background: '#F59E0B',
            display: 'inline-block',
          }}
        />
      </div>
      <div
        style={{
          fontFamily: 'sans-serif',
          fontWeight: 700,
          fontSize: 64,
          color: '#fff',
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
          maxWidth: 900,
          marginBottom: 32,
        }}
      >
        Empowering Diverse Industries Through Innovation.
      </div>
      <div
        style={{
          fontFamily: 'sans-serif',
          fontSize: 22,
          color: 'rgba(255,255,255,0.6)',
          maxWidth: 800,
        }}
      >
        Cloud Ordinate · SkyFitStrength · GetMoodzy
      </div>
    </div>,
    { ...size }
  );
}
