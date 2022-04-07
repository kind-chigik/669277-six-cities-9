export type UserComment = {
  comment: string;
  rating: number;
  id: number;
  clearText: (comment: string) => void;
  clearRating: (rating: number) => void;
}
