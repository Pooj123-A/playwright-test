
import { test, expect } from "@playwright/experimental-ct-react";
import App2708 from "../example/App2708.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2708 />);
  await expect(component).toContainText("Learn React");
});
