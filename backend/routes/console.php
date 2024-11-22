<?php

use App\Console\Commands\FrontendDeployCommand;
use Illuminate\Support\Facades\Schedule;

Schedule::command(FrontendDeployCommand::class)
    ->hourly();
