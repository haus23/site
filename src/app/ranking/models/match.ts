export interface Match {
  id: number;
  roundId: number;
  nr: number;
  league: string;
  matchDay: Date;
  fixture: string;
  topMatch: boolean;
  canceled: boolean;
  result: string;
  points: number;
}
