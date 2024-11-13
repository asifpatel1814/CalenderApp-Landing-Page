import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Button, Input, NextUIProvider } from "@nextui-org/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GetStaticProps } from "next";
import { User } from "@/typing";
import { fetchUsers } from "@/utils/fetchUsers";
import DTable from "@/components/Table";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  users: User[];
};

export default function Home({ users }: Props) {
  const [data, setData] = useState(users);
  const [searchQuery, setSearchQuery] = useState("");

  const deleteRecord = (uid: string) => {
    users = users.filter((user) => user.id !== uid);
    setData(users);
  };

  const handleSearch = (query: string) => {
    const filteredUsers = query
      ? data.filter((user) =>
          user.name.toLowerCase().includes(query.toLowerCase()) || user.role.toLowerCase() === query.toLowerCase()
        )
      : users;

    setData(filteredUsers);
  };

  const updateUser = (updatedUser: User) => {
    setData((prevUsers: User[]) => {
      const updatedUsers = prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
      return updatedUsers;
    });
    users = data;
  };


  // handleSearch("");

  return (
    <NextUIProvider>
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <Head>
          <title>Milton-Admin Prathamesh Pawar</title>
        </Head>

        <div className="sticky top-0" style={{ zIndex: 100 }}>
          <Header />
        </div>

        <div className="m-12" style={{ zIndex: 10 }}>
          <div className="flex m-4 p-4 flex-row justify-between">
            <Input
              autoFocus
              label="Name"
              className="text-xl"
              variant="bordered"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              onClick={()=>handleSearch(searchQuery)}
              className="m-2"
            >
              Search
              </Button>
          </div>
          <DTable users={data} deleteRecord={deleteRecord} handleUpdate={updateUser} />
        </div>

        <div className="mt-4" id="footer" style={{ zIndex: 100 }}>
          <Footer />
        </div>
      </main>
    </NextUIProvider>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const users: User[] = await fetchUsers();

  return {
    props: {
      users,
    },
    revalidate: 1000,
  };
};
