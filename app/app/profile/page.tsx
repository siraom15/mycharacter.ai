import { Separator } from "@/components/ui/separator";
import AccountForm from "./account-form";
import { createClient } from "@/utils/supabase/server";

export default async function Account() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Profile</h2>
          <p className="text-sm text-muted-foreground">
            This is how others will see you on the site.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <AccountForm user={user} />
    </div>
  );
}
