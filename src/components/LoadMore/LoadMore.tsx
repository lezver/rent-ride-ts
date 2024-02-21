import { IPropsLoadMore } from '../../interface/loadMore';
import './LoadMore.scss';

export const LoadMore: React.FC<IPropsLoadMore> = ({
  setPage,
  page,
  setIsPushed,
}) => {
  const incrementPageOnTypeLoadMore = (edit: number, pushed: boolean): void => {
    setIsPushed(pushed);

    setTimeout((): void => {
      setPage(page + edit);
      setIsPushed(false);
    }, 300);
  };

  return (
    <button
      className="load-more"
      type="button"
      onClick={() => incrementPageOnTypeLoadMore(8, true)}
    >
      More Cars
    </button>
  );
};
