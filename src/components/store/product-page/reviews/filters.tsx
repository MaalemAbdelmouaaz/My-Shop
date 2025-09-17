import {
  RatingStatisticsType,
  ReviewsFiltersType,
  ReviewsOrderType,
} from "@/lib/types";
import { cn } from "@/lib/utils";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  filters: ReviewsFiltersType;
  setFilters: Dispatch<SetStateAction<ReviewsFiltersType>>;
  stats: RatingStatisticsType;
  setSort: Dispatch<SetStateAction<ReviewsOrderType | undefined>>;
}

const ReviewsFilters: FC<Props> = ({ filters, setFilters, setSort, stats }) => {
  const { rating, hasImages } = filters;
  const { ratingStatistics, reviewsWithImagesCount, totalReviews } = stats;
  return (
    <div className="mt-8 relative overflow-hidden">
      <div className="flex flex-wrap gap-4">
        {/* All */}
        <div
          className={cn(
                          "bg-gray-light text-main-primary border border-transparent rounded-full cursor-pointer py-1.5 px-4 xxx",
            {
              "bg-purple-primary text-white border-purple-primary":
                !rating && !hasImages,
            }
          )}
          onClick={() => {
            setFilters({ rating: undefined, hasImages: undefined });
            setSort(undefined);
          }}
        >
          All ({totalReviews})
        </div>
        {/* Includes Pic */}
        <div
          className={cn(
            "bg-gray-light text-main-primary border border-transparent rounded-full cursor-pointer py-1.5 px-4",
            {
              "bg-purple-primary text-white border-purple-primary": hasImages,
            }
          )}
          onClick={() => setFilters({ ...filters, hasImages: true })}
        >
          Include Pictures ({reviewsWithImagesCount})
        </div>
        {/* Rating Filters */}
        {ratingStatistics.map((r) => (
          <div
            key={r.rating}
            className={cn(
              "bg-gray-light text-main-primary border border-transparent rounded-full cursor-pointer py-1.5 px-4",
              {
                "bg-purple-primary text-white border-purple-primary":
                  r.rating === rating,
              }
            )}
            onClick={() => setFilters({ ...filters, rating: r.rating })}
          >
            {r.rating} stars ({r.numReviews})
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsFilters;
