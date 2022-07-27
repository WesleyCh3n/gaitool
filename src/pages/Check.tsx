import { invoke } from "@tauri-apps/api/tauri";
import { ButtonOutline } from "../components/button/Button";
import { useStore } from "../store";

const Check = () => {
  const cfgPath = useStore((state) => state.cfgPath);
  return (
    <div className="h-screen w-screen flex justify-center items-center dark:bg-gray-800">
      <ButtonOutline
        className="my-1"
        onClick={async () => {
          var remapCsv = cfgPath.remapCsv;
          let result = await invoke("diff_col", {file: "D:\\data\\2022-03-08-11-55_64-8-2-2-[1]-1.csv", remapCsv: remapCsv});
          console.log(result);
        }}
        content={"DIFF"}
      />
      <div className="dark:text-gray-200">Hello World</div>
    </div>
  );
};

export default Check;
