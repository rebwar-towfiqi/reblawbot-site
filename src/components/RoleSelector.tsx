
import { motion } from "framer-motion";
// @ts-ignore
import { FaGavel, FaUserShield, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const roles = [
  {
    id: "plaintiff_lawyer",
    label: "وکیل شاکی",
    icon: FaUserTie,
    description: "از حقوق شاکی دفاع کن و متهم را محکوم جلوه بده.",
  },
  {
    id: "defender_lawyer",
    label: "وکیل متهم",
    icon: FaUserShield,
    description: "از متهم دفاع کن و بی‌گناهی‌اش را اثبات کن.",
  },
  {
    id: "judge",
    label: "قاضی",
    icon: FaGavel,
    description: "بی‌طرفانه جلسه را مدیریت و رأی نهایی را صادر کن.",
  },
];

export default function RoleSelector() {
  const navigate = useNavigate();

  const handleSelect = (roleId: string) => {
    navigate(`/case-selection?role=${roleId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-blue-800 mb-10"
        >
          🎭 انتخاب نقش شما در بازی حقوقی
        </motion.h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.id}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleSelect(role.id)}
                className="cursor-pointer bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                {/* @ts-ignore */}
                <Icon className="text-3xl text-blue-600 mb-3" />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{role.label}</h2>
                <p className="text-sm text-gray-600">{role.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
