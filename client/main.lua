function SendNotification(message, type, duration)
    SendNUIMessage({
        action = "showNotification",
        message = message,
        type = type,
        duration = duration or 5000
    })
end

RegisterNetEvent('AbdelRMB:Notify')
AddEventHandler('AbdelRMB:Notify', function(message, type, duration)
    SendNotification(message, type, duration)
end)
