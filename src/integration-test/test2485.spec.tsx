
import { test, expect } from "@playwright/experimental-ct-react";
import App2485 from "../example/App2485.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2485 />);
  await expect(component).toContainText("Learn React");
});
