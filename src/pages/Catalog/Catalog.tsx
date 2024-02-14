import { useEffect, useState } from 'react';
import { FIlter, LIstOfCars, LoadMore, Loader } from '../../components';
import './Catalog.scss';
import { getCars } from '../../services/Api';
import { ICarCharacteristics } from '../../types/aboutCars';

export const Catalog: React.FC = () => {
  const [cars, setCars] = useState<ICarCharacteristics[]>([]);
  const [err, setErr] = useState<string>();
  const [page, setPage] = useState<number>(8);
  const [isPushed, setIsPushed] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const data = await getCars();

      typeof data === 'number'
        ? setErr('Sorry, some thing wrong! Try later')
        : setCars(data);
    })();
  }, []);

  return (
    <>
      {!cars.length ? (
        <Loader />
      ) : (
        <section className="catalog container">
          <h2 className="hidden-title">Catalog</h2>
          <FIlter cars={cars} />
          {err ? (
            <h2>{err}</h2>
          ) : (
            <>
              <LIstOfCars cars={cars.slice(0, page)} />
              {cars.length <= page ? null : (
                <>
                  {isPushed ? (
                    <Loader />
                  ) : (
                    <LoadMore
                      setPage={setPage}
                      page={page}
                      setIsPushed={setIsPushed}
                    />
                  )}
                </>
              )}
            </>
          )}
        </section>
      )}
    </>
  );
};
