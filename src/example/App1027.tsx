
import { test, expect } from "@playwright/experimental-ct-react";
import App1027 from "./App1027.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1027 />);
  await expect(component).toContainText("Learn React");
});
