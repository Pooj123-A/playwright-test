
import { test, expect } from "@playwright/experimental-ct-react";
import App1143 from "./App1143.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1143 />);
  await expect(component).toContainText("Learn React");
});
