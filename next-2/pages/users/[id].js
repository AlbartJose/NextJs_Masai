import styles from "./styles.module.css";
import { withRouter } from "next/router";

const UserDetailPage = (props) => {
  return (
    <>
      <div className={styles.maindiv}>
        <div>
          <img src={props.data.avatar} />
        </div>
        <div>ID: {props.router.query.id}</div>
        <div>
          Name: {props.data.first_name} {props.data.last_name}
        </div>
        <div>Email: {props.data.email}</div>
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

  // Get the paths we want to pre-render based on posts
  const paths = users.data.map((user) => ({
    params: { id: String(user.id) },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}

export default withRouter(UserDetailPage);
