// review rating statistics

export interface ReviewRatingStatistics {
  averageRating: number;
  highestRating: number;
  lowestRating: number;
  count: number;
  /** mapping of rating to count of reviews containing that rating */
  // TODO verify whether the first type is number or string!
  ratingsDistribution: Record<number, number>;
}
