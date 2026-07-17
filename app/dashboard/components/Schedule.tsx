import {
  BookOpen,
  Code2,
  Globe,
  FlaskConical,
  Clock3,
} from "lucide-react";

const classes = [
  {
    subject: "Database Management Systems",
    room: "Room 402",
    time: "10:00 AM",
    icon: BookOpen,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    subject: "Data Structures & Algorithms",
    room: "Lab 3",
    time: "12:00 PM",
    icon: Code2,
    color: "bg-violet-100 text-violet-600",
  },
  {
    subject: "Web Development",
    room: "Lab 5",
    time: "2:00 PM",
    icon: Globe,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    subject: "Operating Systems Lab",
    room: "Lab 1",
    time: "4:00 PM",
    icon: FlaskConical,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function Schedule() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-slate-800">
          📅 Today's Classes
        </h2>

        <span className="text-sm font-medium text-cyan-600">
          4 Classes
        </span>

      </div>

      <div className="space-y-4">

        {classes.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-slate-100 p-4 transition-all duration-300 hover:border-cyan-300 hover:shadow-md"
            >

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon size={22} />
                </div>

                <div>

                  <h3 className="font-semibold text-slate-800">
                    {item.subject}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.room}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <div className="flex items-center justify-end gap-2 text-cyan-600">

                  <Clock3 size={15} />

                  <span className="font-semibold">
                    {item.time}
                  </span>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}