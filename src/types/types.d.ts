interface Billion {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

interface BillionsResponse {
  ok: boolean;
  billions: Billion[];
}

interface FinancialAsset {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  exerciseOptionPrice: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: true;
  currentPrice: number;
}
interface Person {
  id: string;
  state: string;
  city: string;
  name: string;
  country: string;
  position: 1;
  industries: string[];
  financialAssets: FinancialAsset[];

  thumbnail: string;
  squareImage: string;
  bio: string[];
  about: string[];

  netWorth: number;
}

interface PersonResponse {
  ok: boolean;
  person: Person;
}
