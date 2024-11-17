<script>
import {Input} from "$lib/components/ui/input";
import {Button} from "$lib/components/ui/button";
</script>
<div class="bg-card shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
        <h3 class="text-base font-semibold text-foreground">Newsletter anmelden</h3>
        <div class="mt-2 max-w-xl text-sm text-muted-foreground">
            <p>Wir schicken dir Updates und news per Email</p>
        </div>
        <form class="mt-4 flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="email" />
            <Button type="submit">Subscribe</Button>
        </form>
    </div>
</div>
