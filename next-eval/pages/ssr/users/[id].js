import styles from "./styles.module.css";
import { withRouter } from "next/router";
import { useRouter } from "next/router";

const UserDetailPage = (props) => {
  const router = useRouter();
  return (
    <>
      <div>
        <button onClick={() => router.push("/ssr/users")}>Go Back</button>
      </div>
      <div className={styles.maindiv}>
        <div>
          <img src={props.data.avatar} />
        </div>
        <div>
          <div>ID: {props.router.query.id}</div>
          <div>
            Name: {props.data.first_name} {props.data.last_name}
          </div>
          <div>Email: {props.data.email}</div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`https://reqres.in/api/users/${context.params.id}`);
  const user = await res.json();
  return {
    props: {
      id: context.params.id,
      data: user.data,
    },
  };
};

export async function getStaticPaths() {
  const res = await fetch("https://reqres.in/api/users");
  const users = await res.json();

  const paths = users.data.map((user) => ({
    params: { id: String(user.id) },
  }));

  return { paths, fallback: "blocking" };
}

export default withRouter(UserDetailPage);
