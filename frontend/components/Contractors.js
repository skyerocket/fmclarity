// components/Countries.js

import { useQuery, gql } from "@apollo/client";
import styles from "../styles/Home.module.css";

const QUERY = gql`
    query Query {
        contractors {
            name
            email
            telephone
        }
    }
`

export default function Contractors() {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const contractors = data.contractors;

  return (
    <div className={styles.grid}>
        {contractors.map((contractor) => (
          <div key={contractor.name} className={styles.card}>
            <h3>{contractor.name}</h3>
            <p>{contractor.email}</p>
            <p>{contractor.telephone}</p>
            {/* <p>{contractor.services}</p> */}
          </div>
        ))}
    </div>
  );
}