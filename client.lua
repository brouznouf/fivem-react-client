Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        local ped = GetPlayerPed(-1)
        if (IsControlJustPressed(1, 168) and not IsPedInAnyVehicle(ped, false)) then
            Citizen.Trace('Test')
            SendNUIMessage({
                test = "COUCOU"
            })
        end
    end
end)