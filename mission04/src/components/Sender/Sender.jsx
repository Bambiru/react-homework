function Sender({ data: { id, content }, formattedTime }) {
  return (
    <div key={id} className="flex items-center justify-end gap-2 ">
      <time className="text-sm" dateTime={formattedTime}>
        {formattedTime}
      </time>
      <span className="px-3 py-2 bg-yellow-200 border rounded-md">
        {content}
      </span>
    </div>
  );
}

export default Sender;
