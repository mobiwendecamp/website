<x-filament-widgets::widget class="fi-filament-info-widget">
    <x-filament::section>
        <div class="">
            <h3 class="font-semibold">Invite new People</h3>
            <span>Links are valid for 4 hours.</span>

            <x-filament::modal>
                <x-slot name="trigger">
                    <x-filament::button>
                        Get Invite Link
                    </x-filament::button>
                </x-slot>
                <div class="break-words">
                    {{\Illuminate\Support\Facades\URL::signedRoute('filament-panels::register',expiration: now()->addHours(4))}}
                </div>
                {{-- Modal content --}}
            </x-filament::modal>

        </div>
    </x-filament::section>
</x-filament-widgets::widget>
