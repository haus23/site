export interface Tip {
  id: number;
  matchId: number;
  playerId: number;
  result?: string;
  joker?: boolean;
  tipPoints?: number;
  extraPoints?: number;
  points?: number;
}
