<script>
    import * as t from "$lib/paraglide/messages.js"
    import {donation_account} from "$lib/config/site"
    import BetterplaceLogo from "$lib/components/Atoms/Icons/BetterplaceLogo.svelte";
</script>

<div class="bg-card shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
        <h3 class="text-base font-semibold text-foreground">{t.donation_widget_headline()}</h3>
        <div class="mt-2 max-w-xl text-sm text-muted-foreground">
            <p>{t.donation_widget_description()}</p>
            <div class="divide-y">

                <div class="space-y-2 py-4 ">
                    <h4 class="font-semibold">{t.donation_via_iban()}:</h4>
                    <div>
                        <div class="text-foreground">
                            {donation_account.iban}
                        </div>
                        <div>{t.donation_widget_iban()}</div>
                    </div>
                    <div>
                        <div class="text-foreground">
                            {donation_account.bic}
                        </div>
                        <div>{t.donation_widget_bic()}</div>
                    </div>
                    <div>
                        <div class="text-foreground">
                            {donation_account.owner}
                        </div>
                        <div>{t.donation_widget_account_owner()}</div>
                    </div>
                    <div>
                        <div class="text-foreground">
                            {donation_account.purpose}
                        </div>
                        <div>{t.donation_widget_purpose()}</div>
                    </div>
                </div>

                <div class="py-4 space-y-2">
                    <h4 class="font-semibold">{t.donation_via_betterplace()}:</h4>

                    <a class="font-semibold hover:underline flex items-center" target="_blank" href={t.donation_via_betterplace_href()}>
                        <BetterplaceLogo class="h-8 text-foreground"/>
                    </a>
                </div>
            </div>

        </div>
        <div class="mt-3 text-sm/6 flex flex-col">

            <a href="/donate" class="font-semibold text-primary hover:underline">
                Erfahre hier mehr über Spenden
                <span aria-hidden="true"> &rarr;</span>
            </a>
        </div>
    </div>
</div>
