
import { test, expect } from "@playwright/experimental-ct-react";
import App1118 from "./App1118.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1118 />);
  await expect(component).toContainText("Learn React");
});
