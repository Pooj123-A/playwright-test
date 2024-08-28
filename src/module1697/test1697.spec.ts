
import { test, expect } from "@playwright/experimental-ct-react";
import App1697 from "./App1697.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1697 />);
  await expect(component).toContainText("Learn React");
});
