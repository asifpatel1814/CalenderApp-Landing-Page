import React, { useEffect, useState } from "react";
import {User} from "../typing"
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

type Props = {
  users: User[];
  deleteRecord: (uid: string) => void;
  handleUpdate: (user: User) => void;
};

const columns = [
  {name: "NAME", uid: "name"},
  {name: "ROLE", uid: "role"},
  {name: "EMAIL", uid: "email"},
  {name: "ACTIONS", uid: "actions"},
];




export default function DTable({users, deleteRecord, handleUpdate} : Props) {
    const [group, setGroup] = useState<User[]>([]);
    const [pagenum, setPagenum] = useState(1);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [action, setAction] = useState("view");
    const [id, setId] = useState("1");

    const [singleUser, setSingleUser] = useState<User>({_type:"user", id:"", name:"", email: "", role:""});

    useEffect(() => {
        paginate(pagenum);
    }, [users, pagenum]);

    const PAGE_SIZE = 10;

    const paginate = (pagenum: number) =>{
        const startIndex = (pagenum - 1) * PAGE_SIZE;
        const endIndex = startIndex + PAGE_SIZE;
        const newg = users.slice(startIndex, endIndex);
        setGroup(newg);
    }


    // paginate(pagenum);



  return (
    <div>
      <div className="flex flex-col w-[400px] md:w-[800px] lg:w-[1000px] ">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow border-2 border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only text-sm mx-2">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {group?.map((user, userIdx) => (
                    <tr
                      key={userIdx}
                      className={userIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user?.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user?.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user?.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="hover:text-indigo-900 mx-2"
                          onClick={() => {
                            setAction("view");
                            setSingleUser(user);
                            setId(user.id);
                            onOpen();
                          }}
                        >
                          View
                        </a>
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900 mx-2"
                          onClick={() => {
                            setAction("edit");
                            setId(user.id);
                            setSingleUser(user);
                            onOpen();
                          }}
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="text-red-600 hover:text-red-900 mx-2"
                          onClick={async () => {
                            setAction("delete");
                            setId(user.id);
                            if(confirm(`Pakka delete karu na ise - ${user.name}`)){
                                deleteRecord(user.id);
                                const ng = await group.filter((elem)=> elem.id !== user.id);
                                setGroup(ng);
                            }
                          }}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className=" my-2 pagination flex flex-row items-center text-center justify-center px-4">
                <button
                  className="text-sm sm:text-lg border-transparent border-2 px-3 mx-3 rounded-full h-fit w-fit bg-gray-400"
                  onClick={() => {
                    if (pagenum > 1) {
                      setPagenum(pagenum - 1);
                    }
                  }}
                  disabled={pagenum == 1}
                >
                  🔙 Previous
                </button>
                <button
                  className=" text-sm sm:text-lg border-transparent border-2 px-3 mx-3 rounded-full h-fit w-fit bg-gray-400"
                  onClick={() => {
                    if (pagenum < Math.ceil(users.length / PAGE_SIZE))
                      setPagenum(pagenum + 1);
                  }}
                  disabled={pagenum == Math.ceil(users.length / PAGE_SIZE)}
                >
                  Next 🔜
                </button>
              </div>
              <div>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalBody>
                          <div>
                            {(action === "view" || action === "edit") && (
                              <div className="flex flex-col text-xl text-left px-4 m-3">
                                <Input
                                  autoFocus
                                  label="Name"
                                  value={singleUser.name}
                                  className="text-xl"
                                  variant="bordered"
                                  onChange={(e) => setSingleUser({...singleUser, name: e.target.value})}
                                  isDisabled={action === "view"}
                                />
                                <Input
                                  autoFocus
                                  label="Email"
                                  value={singleUser.email}
                                  variant="bordered"
                                  onChange={(e) => setSingleUser({...singleUser, email: e.target.value})}
                                  isDisabled={action === "view"}
                                />
                                <Input
                                  autoFocus
                                  label="Role"
                                  value={singleUser.role}
                                  variant="bordered"
                                  onChange={(e) => setSingleUser({...singleUser, role: e.target.value})}
                                  isDisabled={action === "view"}
                                />
                              </div>
                            )}
                          </div>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Close
                          </Button>
                          {action === "edit" && (
                            <Button
                              color="success"
                              variant="light"
                              onPress={onClose}
                              onClick={()=>handleUpdate(singleUser)}
                            >
                              Submit
                            </Button>
                          )}
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
