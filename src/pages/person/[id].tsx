import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "@/styles/person.module.scss";
export default function PersonDetail() {
  const {
    query: { id },
  } = useRouter();
  const { data, error } = useSWR<PersonResponse>(
    id ? `/api/person/${id}` : null
  );

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.thumb}>
          <img src={data?.person?.squareImage} alt={`thumb`} />
        </div>
        <div className={styles.title}>{data?.person.name}</div>
        <div>
          Networth: {(data?.person.netWorth! / 1000).toFixed(0)} Billion
        </div>
        <div>Country: {data?.person.country}</div>
        <div>Industry: {data?.person.industries.join(" ")}</div>
        <div>{data?.person.bio.join(" ")}</div>
      </div>
      <div className={styles.assets}>
        <div className={styles.title}>Financial Assets</div>
        <div className={styles.grid}>
          {data?.person.financialAssets.map((fin, idx) => (
            <div className={styles.item} key={`fin_${idx}`}>
              <div>{fin.ticker ? <div>Ticker: {fin.ticker}</div> : null}</div>
              <div>
                {fin.sharePrice ? (
                  <div>
                    Shares: {(Number(fin.sharePrice) * 1000).toLocaleString()}
                  </div>
                ) : null}
              </div>
              <div>
                {fin.exerciseOptionPrice ? (
                  <div>Exercise Price: ${fin.exerciseOptionPrice}</div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
