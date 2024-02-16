import { useEffect, useState } from 'react';
import { FIlter, LIstOfCars, LoadMore, Loader } from '../../components';
import './Catalog.scss';
import { getCars } from '../../services/Api';
import { ICarCharacteristics } from '../../types/aboutCars';

export const Catalog: React.FC = () => {
  const [cars, setCars] = useState<ICarCharacteristics[]>([]);
  const [someError, setSomeError] = useState<string>('');
  const [page, setPage] = useState<number>(8);
  const [isPushed, setIsPushed] = useState<boolean>(false);
  const [filteredCars, setFilteredCars] = useState<ICarCharacteristics[]>([]);
  const [isSearch, setIsSearch] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const data = await getCars();

      typeof data === 'number'
        ? setSomeError('Sorry, some thing wrong! Try later.')
        : setCars(data);
    })();
  }, []);

  return (
    <section className="catalog container">
      <h2 className="hidden-title">Catalog</h2>
      {someError ? (
        <h3>{someError}</h3>
      ) : (
        <>
          {cars.length ? (
            <>
              <FIlter
                cars={cars}
                setFilteredCars={setFilteredCars}
                setIsSearch={setIsSearch}
                setPage={setPage}
              />

              {isSearch ? (
                <Loader />
              ) : (
                <>
                  <LIstOfCars cars={filteredCars.slice(0, page)} />

                  {filteredCars.length <= page ? null : (
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
            </>
          ) : (
            <div className="catalog__wrapper-of-loader">
              <Loader />
            </div>
          )}
        </>
      )}
    </section>
  );
};
