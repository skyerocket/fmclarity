import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "../apollo-client";

const Home = ({ contractors }) => (
  <div className={styles.grid}>
    {contractors.map((contractor) => (
      <div key={contractor.name} className={styles.card}>
        <h3>{contractor.name}</h3>
        <p>{contractor.email}</p>
        <p>{contractor.telephone}</p>
        <p>{contractor.services}</p>
      </div>
    ))}
  </div>
)

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Query {
        contractors {
          name
          email
          telephone
          services
        }
      }
    `,
  });

  return {
    props: {
      contractors: data.contractors,
    },
 };
}

export default Home