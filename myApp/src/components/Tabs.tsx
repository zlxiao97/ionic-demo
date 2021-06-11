import { useState } from "react";
import "./Tabs.css";

const TabPane = function (props: any) {
  return <>{props.children}</>;
};

const Tabs = function (props: any) {
  const [tab, setTab] = useState<string>(props.children[0].key);

  const handleClick = (key: any) => {
    setTab(key);
  };

  return (
    <div className="Tab">
      <div className="header">
        {props.children.map((child: { props: any; key: string }) => (
          <div
            className={tab === child.key ? "active" : ""}
            key={child.key}
            onClick={() => handleClick(child.key)}
          >
            {child.props.tab}
          </div>
        ))}
      </div>
      <div className="content">
        <TabPane
          children={
            props.children.find((child: any) => child.key === tab).props
              .children
          }
        />
      </div>
    </div>
  );
};

Tabs.TabPane = TabPane;

export default Tabs;
