
import { test, expect } from "@playwright/experimental-ct-react";
import App1463 from "./App1463.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1463 />);
  await expect(component).toContainText("Learn React");
});
