import { withRouter } from "next/router";

const UserMap = {
  1: {
    id: 1,
    name: "Albart",
    batch: "ftweb10",
    email: "albart@mail.com",
  },
  2: {
    id: 2,
    name: "Sushant",
    batch: "ftweb10",
    email: "sushant@mail.com",
  },
  3: {
    id: 3,
    name: "Srikant",
    batch: "ftweb10",
    email: "srikant@mail.com",
  },
  4: {
    id: 4,
    name: "Prakhar",
    batch: "ftweb10",
    email: "prakhar@mail.com",
  },
};

const UserDetailPage = (props) => {
  return (
    <>
      <ul>
        <li>Id: {UserMap[props.router.query.id].id}</li>
        <li>Name: {UserMap[props.router.query.id].name}</li>
        <li>Batch: {UserMap[props.router.query.id].batch}</li>
        <li>Email: {UserMap[props.router.query.id].email}</li>
      </ul>
    </>
  );
};

export const getStaticProps = async (context) => {
  return {
    props: {
      id: context.params.id,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
      {
        params: { id: "3" },
      },
      {
        params: { id: "4" },
      },
    ],
    fallback: false,
  };
};

export default withRouter(UserDetailPage);
