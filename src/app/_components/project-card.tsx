// @flow strict

import * as React from 'react';

// @ts-ignore
function ProjectCard({ project }) {

  return (
    <div className="from-card-gradient1 to-card-gradient2 border-card-border relative rounded-lg border bg-gradient-to-r  w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-code-pink to-gradient"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-gradient to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-code-orange"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-info text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-card-border-device px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-code-pink">const</span>
            <span className="mr-2 ">project</span>
            <span className="mr-2 text-code-pink">=</span>
            <span className="text-code-gray">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 ">name:</span>
            <span className="text-code-gray">{`'`}</span>
            <span className="text-code-amber">{project.name}</span>
            <span className="text-code-gray">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" ">tools:</span>
            <span className="text-code-gray">{` ['`}</span>
            {
              project.tools.map((tag: string, i: number) => (
                <React.Fragment key={i}>
                  <span className="text-amber">{tag}</span>
                  {
                    project.tools.length - 1 !== i &&
                    <span className="text-code-gray">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-code-gray">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 ">myRole:</span>
            <span className="text-code-orange">{project.role}</span>
            <span className="text-code-gray">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="">Description:</span>
            <span className="text-code-cyan">{' ' + project.description}</span>
            <span className="text-code-gray">,</span>
          </div>
          <div><span className="text-code-gray">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;