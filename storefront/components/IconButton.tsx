import twmesh from "@/utils/twmesh";

export const IconButton: React.FC<{
  icon: React.ReactNode;
  className?: string;
  outlined?: boolean;
  circle?: boolean;
}> = ({ icon, className, outlined, circle, ...props }) => {
  return (
    <button
      type="button"
      className={twmesh(
        "hover:bg-gray rounded-md p-2 text-slate-700 dark:text-white",
        outlined && "border border-slate-200 dark:border-slate-700",
        circle && "rounded-full",
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
};
