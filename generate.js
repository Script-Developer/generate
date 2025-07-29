function generate() {
  const userScript = document.getElementById("scriptInput").value.trim();

  if (!userScript) {
    alert("Please enter your script.");
    return;
  }

  const finalScript = `-- Generate by generator

local Players = game:GetService("Players")
local StarterGui = game:GetService("StarterGui")

local player = Players.LocalPlayer
local gui = Instance.new("ScreenGui", player:WaitForChild("PlayerGui"))
gui.Name = "CustomGui"
gui.ResetOnSpawn = false

local frame = Instance.new("Frame", gui)
frame.Size = UDim2.new(0, 200, 0, 100)
frame.Position = UDim2.new(1, -210, 0, 10)
frame.BackgroundColor3 = Color3.new(0.1, 0.1, 0.1)
frame.BorderSizePixel = 0

local xButton = Instance.new("TextButton", frame)
xButton.Size = UDim2.new(0, 30, 0, 30)
xButton.Position = UDim2.new(1, -35, 0, 5)
xButton.Text = "X"
xButton.BackgroundColor3 = Color3.new(1, 0.3, 0.3)
xButton.TextColor3 = Color3.new(1, 1, 1)
xButton.MouseButton1Click:Connect(function()
    gui:Destroy()
end)

local toggle = Instance.new("TextButton", frame)
toggle.Size = UDim2.new(0, 160, 0, 40)
toggle.Position = UDim2.new(0, 10, 0, 50)
toggle.Text = "Click Me"
toggle.BackgroundColor3 = Color3.new(0.3, 0.6, 1)
toggle.TextColor3 = Color3.new(1, 1, 1)

toggle.MouseButton1Click:Connect(function()
${indentLua(userScript, 2)}
end)
`;

  document.getElementById("output").value = finalScript;
}

function indentLua(script, indentLevel) {
  const indent = "  ".repeat(indentLevel);
  return script
    .split("\n")
    .map(line => indent + line)
    .join("\n");
}
