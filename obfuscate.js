function generate() {
  const title = document.getElementById("title").value.trim();
  const label = document.getElementById("label").value.trim();
  const discord = document.getElementById("discord").value.trim();

  const hasDiscord = discord !== "";

  const script = `
local Player = game:GetService("Players").LocalPlayer
local PlayerGui = Player:WaitForChild("PlayerGui")

local gui = Instance.new("ScreenGui")
gui.Name = "GeneratedGui"
gui.ResetOnSpawn = false
gui.Parent = PlayerGui

local frame = Instance.new("Frame")
frame.Size = UDim2.new(0, 450, 0, 300)
frame.Position = UDim2.new(0.5, -225, 0.5, -150)
frame.BackgroundColor3 = Color3.fromRGB(30, 30, 30)
frame.AnchorPoint = Vector2.new(0.5, 0.5)
frame.Parent = gui

local uicorner = Instance.new("UICorner", frame)
uicorner.CornerRadius = UDim.new(0, 10)

local close = Instance.new("TextButton")
close.Size = UDim2.new(0, 30, 0, 30)
close.Position = UDim2.new(1, -35, 0, 5)
close.Text = "X"
close.BackgroundColor3 = Color3.fromRGB(60, 60, 60)
close.TextColor3 = Color3.new(1,1,1)
close.BorderSizePixel = 0
close.Parent = frame
Instance.new("UICorner", close).CornerRadius = UDim.new(0, 6)
close.MouseButton1Click:Connect(function() frame.Visible = false end)

local title = Instance.new("TextLabel")
title.Size = UDim2.new(1, -40, 0, 40)
title.Position = UDim2.new(0, 20, 0, 5)
title.Text = "${title}"
title.TextColor3 = Color3.new(1,1,1)
title.Font = Enum.Font.SourceSansBold
title.TextSize = 24
title.TextXAlignment = Enum.TextXAlignment.Left
title.BackgroundTransparency = 1
title.Parent = frame

local label = Instance.new("TextLabel")
label.Size = UDim2.new(1, -40, 0, 20)
label.Position = UDim2.new(0, 20, 0, 50)
label.Text = "${label}"
label.TextColor3 = Color3.new(1,1,1)
label.Font = Enum.Font.SourceSans
label.TextSize = 18
label.TextXAlignment = Enum.TextXAlignment.Left
label.BackgroundTransparency = 1
label.Parent = frame

local box = Instance.new("TextBox")
box.Size = UDim2.new(1, -40, 0, 150)
box.Position = UDim2.new(0, 20, 0, 80)
box.PlaceholderText = "put your script here."
box.Text = ""
box.ClearTextOnFocus = false
box.TextWrapped = true
box.TextYAlignment = Enum.TextYAlignment.Top
box.TextXAlignment = Enum.TextXAlignment.Left
box.TextColor3 = Color3.new(1,1,1)
box.BackgroundColor3 = Color3.fromRGB(40, 40, 40)
box.Font = Enum.Font.Code
box.TextSize = 16
box.MultiLine = true
box.Parent = frame
Instance.new("UICorner", box).CornerRadius = UDim.new(0, 6)
${
  hasDiscord
    ? `
local discord = Instance.new("TextLabel")
discord.Size = UDim2.new(1, 0, 0, 25)
discord.Position = UDim2.new(0, 0, 1, -25)
discord.Text = "Join our Discord: ${discord}"
discord.TextColor3 = Color3.fromRGB(114, 137, 218)
discord.BackgroundTransparency = 1
discord.Font = Enum.Font.SourceSans
discord.TextSize = 14
discord.Parent = frame`
    : ``
}
`.trim();

  document.getElementById("output").value = script;
}