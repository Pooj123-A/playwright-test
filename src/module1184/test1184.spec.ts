
import { test, expect } from "@playwright/experimental-ct-react";
import App1184 from "./App1184.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1184 />);
  await expect(component).toContainText("Learn React");
});
