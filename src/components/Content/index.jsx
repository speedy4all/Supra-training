function Content({ setCurrentDate, setState }) {
  return (
    <div>
      Content
      <div>
        <button onClick={setState}>Toggle content</button>
        <button onClick={setCurrentDate}>
          Set current date
        </button>
      </div>
    </div>
  );
}

export default Content;
