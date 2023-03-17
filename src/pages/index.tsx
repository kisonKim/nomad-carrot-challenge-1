import styles from "@/styles/home.module.scss";
import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";

export default function Home() {
  const { data, error } = useSWR<BillionsResponse>("/api/get-billions");

  console.log(data);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.list}>
        {data?.billions?.map((billion) => (
          <Link href={`/person/${billion.id}`} key={billion.id}>
            <div className={styles.billion}>
              <img src={billion.squareImage} alt={`billionImg_${billion.id}`} />
              <div className={styles.info}>
                <div className={styles.name}>{billion.name}</div>
                <div className={styles.desc}>
                  {billion.netWorth} / {billion.industries.join(" ")}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
