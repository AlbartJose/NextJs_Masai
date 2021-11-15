import Link from "next/link";

const UsersPage = (props) => {
  return (
    <>
      <h1>All Users</h1>
      <ul>
        {props.users.map((el) => (
          <Link key={el.id} href={`/users/${el.id}`}>
            <li>
              {el.first_name} {el.last_name}{" "}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const users = await res.json();
  return {
    props: { users: users.data },
  };
};

export default UsersPage;
