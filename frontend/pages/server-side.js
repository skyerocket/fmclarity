export const getServerSideProps = async () => {
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