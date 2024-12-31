import {FC} from "react";
import {page} from "./index.module.less";
import dayjs from "dayjs";
import {Button} from "antd";
import {Button as RsButton} from "@/components";
type HomeProps = {};

const Home: FC<HomeProps> = ({}) => {
  return (
    <div className={page}>
      <div className="text-black">{dayjs().format("YYYY-MM-DD HH:mm:ss")}</div>
      <Button type="primary">Primary Button</Button>
      <RsButton
        label="Primary Button"
        onClick={() => {
          console.log("click");
        }}
      ></RsButton>
    </div>
  );
};
export default Home;
