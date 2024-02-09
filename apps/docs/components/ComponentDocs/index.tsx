import React from "react";

interface DocumentationProps {
  component: React.FC<any>; // Assuming any prop type for the Button component
}

const ComponentDocs: React.FC<DocumentationProps> = ({
  component: Component,
}) => {
  return (
    <div>
      <h2>Component Documentation</h2>
      <p>This component takes the following props:</p>
      <p>TODO: Should dynamically create {Component.name} props table</p>
    </div>
  );
};

export default ComponentDocs;
