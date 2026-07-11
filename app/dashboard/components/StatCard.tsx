type Props = {
  title: string;
  value: string;
  icon: string;
};

export default function StatCard({ title, value, icon }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-center justify-between">
        <p className="text-gray-500 font-medium">{title}</p>

        <span className="text-3xl">
          {icon}
        </span>
      </div>

      <h2 className="text-4xl font-bold text-slate-800 mt-4">
        {value}
      </h2>
    </div>
  );
}