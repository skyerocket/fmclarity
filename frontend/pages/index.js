import styles from '../styles/Home.module.css'
import { gql, useMutation } from "@apollo/client";
import client from "../apollo-client";
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

// const Demo = () => {
//   const [form] = Form.useForm();

//   const onGenderChange = (value) => {
//     switch (value) {
//       case 'male':
//         form.setFieldsValue({ note: 'Hi, man!' });
//         return;
//       case 'female':
//         form.setFieldsValue({ note: 'Hi, lady!' });
//         return;
//       case 'other':
//         form.setFieldsValue({ note: 'Hi there!' });
//     }
//   };

//   const onFinish = (values) => {
//     console.log(values);
//   };

//   const onReset = () => {
//     form.resetFields();
//   };

//   const onFill = () => {
//     form.setFieldsValue({
//       note: 'Hello world!',
//       gender: 'male',
//     });
//   };

//   return (
//     <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
//       <Form.Item name="note" label="Note" rules={[{ required: true }]}>
//         <Input />
//       </Form.Item>
//       <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
//         <Select
//           placeholder="Select a option and change input text above"
//           onChange={onGenderChange}
//           allowClear
//         >
//           <Option value="male">male</Option>
//           <Option value="female">female</Option>
//           <Option value="other">other</Option>
//         </Select>
//       </Form.Item>
//       <Form.Item
//         noStyle
//         shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
//       >
//         {({ getFieldValue }) =>
//           getFieldValue('gender') === 'other' ? (
//             <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
//               <Input />
//             </Form.Item>
//           ) : null
//         }
//       </Form.Item>
//       <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//         <Button htmlType="button" onClick={onReset}>
//           Reset
//         </Button>
//         <Button type="link" htmlType="button" onClick={onFill}>
//           Fill form
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };


const Home = ({ contractors }) => {
  let input;
  const [addContractor, { data }] = useMutation(ADD);

  return (
    <>
      <div className={styles.grid}>
        {contractors.map((contractor) => (
          <div key={contractor.name} className={styles.card}>
            <h3>{contractor.name}</h3>
            <p>{contractor.email}</p>
            <p>{contractor.telephone}</p>
            <p>{contractor.services}</p>
          </div>
        ))}
      </div>
      {/* <Demo /> */}
    </>
  )
}


const ADD = gql`
  mutation ADD($name: String!, $email: String!, $telephone: String!, $services: [String!]) {
    addContractor(
  name: $name, email: $email, telephone: $telephone, services: $services
  )
    {
      name,
      email,
      telephone
      services,
    }
  }
`

export const getStaticProps = async () => {
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

export default Home