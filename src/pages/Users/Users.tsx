import DynamicTable from '../../components/DynamicTable';
import { TableTypes } from '../../types/table.types';
import UserForm from './UserForm';

const Users = () => {

  const fields = [
    {
      label: 'Name',
      type: 'text',
    },
    {
      label: 'Role',
      type: 'select',
      options: [
        { value: 'Admin', label: 'Admin' },
        { value: 'User', label: 'User' },
        { value: 'Moderator', label: 'Moderator' }
      ]
    },
    {
      label: 'Role',
      type: 'select',
      options: [
        { value: 'Admin', label: 'Admin' },
        { value: 'User', label: 'User' },
        { value: 'Moderator', label: 'Moderator' }
      ],
    }
  ];

  const data = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      role: 'User',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bobjohnson@example.com',
      role: 'Admin',
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alicebrown@example.com',
      role: 'Moderator',
    },
    {
      id: 5,
      name: 'Mike Davis',
      email: 'mikedavis@example.com',
      role: 'User',
    },
    {
      id: 6,
      name: 'Emily Chen',
      email: 'emilychen@example.com',
      role: 'Admin',
    },
    {
      id: 7,
      name: 'David Lee',
      email: 'davidlee@example.com',
      role: 'Moderator',
    },
    {
      id: 8,
      name: 'Sarah Taylor',
      email: 'sarahtaylor@example.com',
      role: 'User',
    },
    {
      id: 9,
      name: 'Kevin White',
      email: 'kevinwhite@example.com',
      role: 'Admin',
    },
    {
      id: 10,
      name: 'Olivia Martin',
      email: 'oliviamartin@example.com',
      role: 'Moderator',
    },
  ];

  const columns: TableTypes[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role: string) => {
        let color = '';
        switch (role) {
          case 'Admin':
            color = 'red';
            break;
          case 'Moderator':
            color = 'orange';
            break;
          case 'User':
            color = 'green';
            break;
          default:
            color = 'black';
        }
        return <span style={{ color: color }}>{role}</span>;
      },
    },
  ];

  return (
      <DynamicTable data={data} columns={columns as []} fields={fields} title={'Users'} form={<UserForm />} />
  );
};

export default Users;