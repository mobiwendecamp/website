<script>
    import * as t from "$lib/paraglide/messages.js"
    import {donation_account} from "$lib/config/site"
</script>

<div class="bg-card shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:p-6">
        <h3 class="text-base font-semibold text-foreground">{t.donation_widget_headline()}</h3>
        <div class="mt-2 max-w-xl text-sm text-muted-foreground">
            <p>{t.donation_widget_description()}</p>
            <div class="space-y-2 mt-4">
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
        </div>
        <div class="mt-3 text-sm/6">
            <a href="/donate" class="font-semibold text-primary hover:underline">
                Erfahre hier mehr über Spenden
                <span aria-hidden="true"> &rarr;</span>
            </a>
        </div>
    </div>
</div>
