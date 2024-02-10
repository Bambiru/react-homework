function Recipient({ data: { id, sender, content }, formattedTime }) {
  return (
    <div key={id}>
      <div className="flex flex-col gap-1">
        <p className="font-bold">{sender}</p>
        <div className="flex items-center gap-2 justify-first">
          <span className="px-3 py-2 bg-blue-200 border rounded-md">
            {content}
          </span>
          <time className="text-sm" dateTime={formattedTime}>
            {formattedTime}
          </time>
        </div>
      </div>
    </div>
  );
}

export default Recipient;
