export default function VariablesAndConstants() {
  const functionScoped = 2;  // use const instead of var
  const blockScoped = 5;     // use const since it’s never reassigned
  const constant1 = functionScoped - blockScoped;

  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped}<br />
      blockScoped = {blockScoped}<br />
      constant1 = {constant1}
      <hr />
    </div>
  );
}
