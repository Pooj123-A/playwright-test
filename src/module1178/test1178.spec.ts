
import { test, expect } from "@playwright/experimental-ct-react";
import App1178 from "./App1178.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1178 />);
  await expect(component).toContainText("Learn React");
});
