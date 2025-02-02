<script lang="ts">
    import {Input} from "$lib/components/ui/input";
    import {Button} from "$lib/components/ui/button";
    import * as t from "$lib/paraglide/messages.js"
    import { PUBLIC_BACKEND_WEBSITE_NEWSLETTER_SIGNUP } from '$env/static/public';
    let email = $state();
    let errors = $state();
    let success = $state(false);

    async function addEmail(event: SubmitEvent) {
        event.preventDefault();
        errors = '';
        success = false

        try {

            const response = await fetch(PUBLIC_BACKEND_WEBSITE_NEWSLETTER_SIGNUP, {
                method: 'POST',
                body: JSON.stringify({ email: email }),
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json'
                }
            })

            if (response.status === 422) {
                let responseErrors = (await response.json())
                errors = responseErrors.message
                return
            }

            if (!response.ok) {
                errors = t.something_went_wrong()
                throw new Error(`Response status: ${response.status}`);
            }


            success = true
            email = ''
        } catch (error) {
            errors = t.something_went_wrong()
        }
    }
</script>
<div class="bg-card shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
        <h3 class="text-base font-semibold text-foreground">{t.newsletter_widget_headline()}</h3>
        <div class="mt-2 max-w-xl text-sm text-muted-foreground">
            <p>{t.newsletter_widget_description()}</p>
        </div>
        <form onsubmit={addEmail} class="mt-4 flex w-full max-w-sm items-center space-x-2">
            <Input bind:value={email} type="email" placeholder="email"/>
            <Button type="submit">{t.newsletter_widget_subscribe()}</Button>
        </form>
        {#if errors}
            <div class="text-destructive mt-2">
                {errors}
            </div>
        {/if}
        {#if success}
            <div class="text-primary mt-2">
                {t.newsletter_signed_up()}
            </div>
        {/if}
    </div>
</div>
