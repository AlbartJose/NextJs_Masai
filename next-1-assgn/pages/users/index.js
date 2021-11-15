import Link from "next/link";

const UsersPage = (props) => {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {props.users.map((el) => (
          <Link href={`/users/${el.id}`}>
            <li key={el.id}>{el.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      users: [
        {
          id: 1,
          name: "Albart",
          batch: "ftweb10",
          email: "albart@mail.com",
        },
        {
          id: 2,
          name: "Sushant",
          batch: "ftweb10",
          email: "sushant@mail.com",
        },
        {
          id: 3,
          name: "Srikant",
          batch: "ftweb10",
          email: "srikant@mail.com",
        },
        {
          id: 4,
          name: "Prakhar",
          batch: "ftweb10",
          email: "prakhar@mail.com",
        },
      ],
    },
  };
};

export default UsersPage;
