import { FileText, Image, X } from "lucide-react";

const FilePreview = ({ name, size, type }: any) => (
  <div className="flex items-center justify-between rounded-lg border bg-background px-3 py-2">
    <div className="flex items-center gap-3">
      {type === "pdf" ? (
        <FileText className="size-6 text-red-500" />
      ) : (
        <Image className="size-6 text-blue-500" />
      )}
      <div className="flex flex-col">
        <p className="text-xs font-medium">{name}</p>
        <p className="text-[10px] text-muted-foreground">{size}</p>
      </div>
    </div>
    <X className="h-4 w-4 cursor-pointer text-muted-foreground hover:text-destructive" />
  </div>
);

export default FilePreview;
