import React from "react";

type Props = {
  title?: string;
  nameConst?: string;
  dataCode: any;
  dataOther?: any;
};
export default function CardCode({
  title,
  nameConst,
  dataCode,
  dataOther,
}: Props) {
  return (
    <div className="border-card-border relative rounded-lg border bg-gradient-to-r from-card-gradient2 to-card-gradient1">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-help to-gradient"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-gradient to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-5 flex items-center">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-orange"></div>
          <div className="h-3 w-3 rounded-full bg-green-200"></div>
        </div>
        <div className="text-info text-center grow lg:text-xl">{title}</div>
      </div>
      <div className="overflow-hidden border-t-[2px] border-card-border-device px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-code-pink">const</span>
            <span className="mr-2 ">{nameConst}</span>
            <span className="mr-2 text-code-pink">=</span>
            <span className="text-gray">{"{"}</span>
          </div>
          {dataCode &&
            Object.keys(dataCode).map((key, index) => {
              let valueRes = dataCode[key]; // Get the value for the current key
              let typeValue = typeof valueRes;
              let htmlRes = <></>;
              switch (typeValue) {
                case "string":
                  htmlRes = (
                    <div>
                      <span className="ml-4 lg:ml-8 mr-2 ">
                        {key}:
                      </span>
                      <span className="text-code-gray">{`'`}</span>
                      <span className="text-code-amber">{valueRes}</span>
                      <span className="text-code-gray">{`',`}</span>
                    </div>
                  );
                  break;
                case "boolean":
                  htmlRes = (
                    <div>
                      <span className="ml-4 lg:ml-8 mr-2 ">
                        {key}:
                      </span>
                      <span className="text-code-orange">
                        {String(valueRes)}
                      </span>
                      <span className="text-code-gray">{`,`}</span>
                    </div>
                  );
                  break;
                case "object":
                  const checkArr = Array.isArray(valueRes);
                  if (checkArr) {
                    htmlRes = (
                      <div className="ml-4 lg:ml-8 mr-2">
                        <span className=" ">{key}: </span>
                        <span className="text-code-gray">{`[`}</span>
                        {valueRes.map((item, index) => {
                          if (index === valueRes.length -1) {
                            return (
                              <React.Fragment key={index}>
                                <span className="text-code-gray">{"'"}</span>
                                <span className="text-code-amber">{item}</span>
                                <span className="text-code-gray">{"'"}</span>
                              </React.Fragment>
                            );
                          }
                          return (
                            <React.Fragment key={index}>
                              <span className="text-code-gray">{"'"}</span>
                              <span className="text-code-amber">{item}</span>
                              <span className="text-code-gray">{"', "}</span>
                            </React.Fragment>
                          );
                        })}
                        <span className="text-code-gray">{"],"}</span>
                      </div>
                    );
                  }
                  break;
                default:
                  break;
              }
              return <React.Fragment key={index}>{htmlRes}</React.Fragment>;
            })}
          {dataOther}
          <div>
            <span className="text-gray">{"}"}</span>
          </div>
        </code>
      </div>
    </div>
  );
}
