import Link from "next/link";
import styles from "./styles.module.css";

const UsersPage = (props) => {
  return (
    <>
      <h1>All Users</h1>
      <ul>
        {props.users.map((el) => (
          <div key={el.id} className={styles.allUser}>
            <div>
              {el.first_name} {el.last_name}{" "}
            </div>
            <div>
              <Link href={`/ssr/users/${el.id}`}>
                <button>More Details</button>
              </Link>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const users = await res.json();
  return {
    props: { users: users.data },
  };
};

export default UsersPage;
